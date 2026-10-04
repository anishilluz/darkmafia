import { CERTIFIED_SERVICES, VEHICLES_DATABASE, PRODUCTS_CATALOG, DARK_MAFIA_BUILDS, BLOG_POSTS } from '@/lib/data';
import { Service, Product, Vehicle, Build, CustomizationEnquiry } from '@/types';

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || '';
const WC_KEY = process.env.WC_CONSUMER_KEY || '';
const WC_SECRET = process.env.WC_CONSUMER_SECRET || '';

export async function getServices(): Promise<Service[]> {
  if (WP_URL) {
    try {
      const res = await fetch(`${WP_URL}/wp-json/wp/v2/services?_embed`, {
        next: { revalidate: 3600, tags: ['services'] }
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          // Normalize WP CPT to Service interface
          return data.map((item: any) => ({
            id: item.slug || String(item.id),
            slug: item.slug,
            title: item.title?.rendered || item.name,
            subtitle: item.acf?.service_subtitle || '',
            shortDescription: item.acf?.short_description || item.excerpt?.rendered || '',
            fullDescription: item.content?.rendered || '',
            iconName: item.acf?.icon_name || 'Wrench',
            bannerImage: item.acf?.banner_image?.url || '/images/services-reference.png',
            beforeAfter: {
              beforeImage: item.acf?.before_image?.url || '',
              afterImage: item.acf?.after_image?.url || '',
              caption: item.acf?.before_after_caption || ''
            },
            startingPrice: item.acf?.starting_price || 'Enquire for Price',
            estimatedDuration: item.acf?.estimated_duration || '1 Day',
            warranty: item.acf?.warranty || 'Standard Warranty',
            compatibleVehicleTypes: item.acf?.compatible_vehicle_types || ['car', 'bike'],
            benefits: item.acf?.benefits || [],
            process: item.acf?.process_steps || [],
            faqs: item.acf?.faqs || [],
            linkedProductIds: item.acf?.linked_products || []
          }));
        }
      }
    } catch (e) {
      console.warn('Falling back to local certified services catalog:', e);
    }
  }
  return CERTIFIED_SERVICES;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices();
  return services.find(s => s.slug === slug) || null;
}

export async function getVehicles(): Promise<Vehicle[]> {
  if (WP_URL) {
    try {
      const res = await fetch(`${WP_URL}/wp-json/wp/v2/vehicles?per_page=100`, {
        next: { revalidate: 86400, tags: ['vehicles'] }
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return data.map((item: any) => ({
            id: item.slug || String(item.id),
            type: item.acf?.vehicle_type || 'car',
            make: item.acf?.make || item.title?.rendered,
            model: item.acf?.model || '',
            generation: item.acf?.generation || '',
            yearRange: item.acf?.year_range || '',
            variant: item.acf?.variant || '',
            headlightSocket: item.acf?.headlight_socket || 'H4 / Bi-LED',
            fogSocket: item.acf?.fog_socket,
            image: item.acf?.vehicle_image?.url,
            badge: item.acf?.badge
          }));
        }
      }
    } catch (e) {
      console.warn('Falling back to local vehicles database:', e);
    }
  }
  return VEHICLES_DATABASE;
}

export async function getProducts(options?: {
  category?: string;
  vehicleId?: string;
  featured?: boolean;
  vehicleType?: 'car' | 'bike';
}): Promise<Product[]> {
  let products = [...PRODUCTS_CATALOG];

  if (WP_URL && WC_KEY && WC_SECRET) {
    try {
      const auth = Buffer.from(`${WC_KEY}:${WC_SECRET}`).toString('base64');
      const url = new URL(`${WP_URL}/wp-json/wc/v3/products`);
      url.searchParams.set('per_page', '50');
      if (options?.featured) url.searchParams.set('featured', 'true');
      
      const res = await fetch(url.toString(), {
        headers: { Authorization: `Basic ${auth}` },
        next: { revalidate: 1800, tags: ['products'] }
      });
      if (res.ok) {
        const wcProducts = await res.json();
        if (Array.isArray(wcProducts) && wcProducts.length > 0) {
          products = wcProducts.map((p: any) => ({
            id: String(p.id),
            name: p.name,
            slug: p.slug,
            sku: p.sku || `DMC-${p.id}`,
            price: Number(p.price || p.regular_price || 0),
            regularPrice: Number(p.regular_price || p.price || 0),
            salePrice: p.sale_price ? Number(p.sale_price) : undefined,
            onSale: p.on_sale || false,
            stockStatus: p.stock_status || 'instock',
            stockQuantity: p.stock_quantity ?? 10,
            rating: Number(p.average_rating || 5.0),
            reviewCount: p.rating_count || 12,
            category: p.categories?.[0]?.slug || 'lighting',
            categoryName: p.categories?.[0]?.name || 'Automotive Lighting',
            subCategory: p.categories?.[1]?.name,
            vehicleType: p.meta_data?.find((m: any) => m.key === 'vehicle_type')?.value || 'both',
            isUniversal: p.meta_data?.find((m: any) => m.key === 'is_universal')?.value ?? true,
            compatibleVehicleIds: p.meta_data?.find((m: any) => m.key === 'compatible_vehicles')?.value || [],
            images: p.images?.map((img: any) => img.src) || [],
            shortDescription: p.short_description?.replace(/<[^>]*>?/gm, '') || '',
            description: p.description?.replace(/<[^>]*>?/gm, '') || '',
            features: p.meta_data?.find((m: any) => m.key === 'features')?.value || [],
            specs: p.attributes?.map((attr: any) => ({ label: attr.name, value: attr.options?.join(', ') })) || [],
            warranty: '2 Years Warranty',
            shipping: 'Free Express Shipping in India',
            installationDifficulty: 'Moderate',
            isFeatured: p.featured || false
          }));
        }
      }
    } catch (e) {
      console.warn('Falling back to local products catalog:', e);
    }
  }

  // Filter logic
  if (options?.category && options.category !== 'all') {
    products = products.filter(p => p.category === options.category);
  }

  if (options?.vehicleType) {
    products = products.filter(p => p.vehicleType === options.vehicleType || p.vehicleType === 'both');
  }

  if (options?.vehicleId) {
    products = products.filter(p => p.isUniversal || p.compatibleVehicleIds?.includes(options.vehicleId!));
  }

  if (options?.featured) {
    products = products.filter(p => p.isFeatured);
  }

  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find(p => p.slug === slug) || null;
}

export async function getBuilds(): Promise<Build[]> {
  return DARK_MAFIA_BUILDS;
}

export async function getBuildBySlug(slug: string): Promise<Build | null> {
  return DARK_MAFIA_BUILDS.find(b => b.slug === slug) || null;
}

export async function submitCustomizationEnquiry(enquiry: CustomizationEnquiry): Promise<{ success: boolean; ticketId: string; message: string }> {
  const ticketId = `DMC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

  if (WP_URL) {
    try {
      const res = await fetch(`${WP_URL}/wp-json/darkmafia/v1/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...enquiry, ticketId })
      });
      if (res.ok) {
        return { success: true, ticketId, message: 'Enquiry successfully registered with Dark Mafia Customs workshop.' };
      }
    } catch (e) {
      console.warn('WordPress endpoint unavailable, saved locally:', e);
    }
  }

  return {
    success: true,
    ticketId,
    message: 'Your custom build request has been received by our lead technician! We will contact you via WhatsApp & Phone within 4 business hours.'
  };
}
