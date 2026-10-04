import { Service, Product, Vehicle, Build } from '@/types';

export const CERTIFIED_SERVICES: Service[] = [
  {
    id: 'headlight-restoration',
    slug: 'headlight-restoration',
    title: 'Headlight Restoration',
    subtitle: 'Restore Factory Optical Clarity & Eliminate Foggy Hazing',
    shortDescription: 'Faded, hazy, or yellowed headlights reduce your night visibility and ruin your car\'s look. Our multi-stage restoration process removes oxidization and seals the lens for long-lasting optical clarity.',
    fullDescription: 'Road grime, sun UV exposure, and heat degrade the factory polycarbonate clear coat on your headlights over time, resulting in oxidized, yellow, and dangerously dim beams. Dark Mafia Customs utilizes an advanced wet-sanding and micro-abrasive compounding protocol followed by an aerospace-grade ceramic UV sealant bake. We don\'t just polish the surface; we chemically seal the lens to prevent future degradation for years to come.',
    iconName: 'Sparkles',
    bannerImage: '/images/services-reference.png',
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
      caption: 'Severe Polycarbonate UV Oxidation vs Optical Mirror Finish Restoration'
    },
    startingPrice: '₹1,999',
    estimatedDuration: '2 - 3 Hours',
    warranty: '1 Year Optical Clarity Warranty',
    compatibleVehicleTypes: ['car', 'bike'],
    highlightTag: 'Fast Turnaround',
    benefits: [
      {
        title: 'Up to 70% Beam Recovery',
        description: 'Reclaim lost lumen output trapped behind hazy polycarbonate lenses.',
        icon: 'Eye'
      },
      {
        title: 'Aerospace UV Poly-Seal',
        description: 'Hard-cure anti-UV coating prevents future yellowing under intense tropical sun.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Vehicle Aesthetics & Value',
        description: 'Instantly revives the front fascia styling and increases vehicle resale attractiveness.',
        icon: 'Sparkles'
      }
    ],
    process: [
      { stepNumber: 1, title: 'Optical Inspection & Masking', description: 'Precision multi-layer masking of paintwork and body panels to protect adjoining surfaces.' },
      { stepNumber: 2, title: 'Multi-Stage Micro Abrasion', description: 'Progressive wet sanding from P800 through P3000 grit to eliminate deep surface pitting and oxidation.' },
      { stepNumber: 3, title: 'Compound Diamond Cut Polishing', description: 'Dual-action rotary refining with optical-grade diminishing abrasive compounds.' },
      { stepNumber: 4, title: 'UV Ceramic Clear Infusion', description: 'Infusion of high-index UV blocker coating cured under controlled temperature lamps.' }
    ],
    faqs: [
      { question: 'How long does the headlight restoration last?', answer: 'Unlike cheap temporary waxes, our multi-stage restoration with aerospace UV sealant lasts between 18 to 24 months under normal driving conditions.' },
      { question: 'Can you restore bike headlights as well as cars?', answer: 'Yes! We restore both car headlights and sportbike / cruiser headlight lenses with equal precision.' },
      { question: 'Do you need to remove the headlight assembly from the vehicle?', answer: 'For standard surface restoration, headlights remain mounted with protective masking. For internal lens cleaning or retrofit work, the housing is carefully unsealed in our climate-controlled lab.' }
    ],
    linkedProductIds: ['dmc-dsr-30-biled', 'dmc-relay-harness-h4']
  },
  {
    id: 'custom-headlight-modifications',
    slug: 'custom-headlight-modifications',
    title: 'Custom Headlight Modifications',
    subtitle: 'Bespoke Internal Styling, Custom Shrouds & Dynamic Light Signatures',
    shortDescription: 'Express your style with custom headlight housings, dynamic LED indicators, paint styling, and bespoke configurations tailored specifically to your vehicle\'s persona.',
    fullDescription: 'Tired of identical factory headlights? Dark Mafia Customs builds bespoke, one-of-a-kind internal headlight architectures. We de-lens headlights using thermal separation ovens, customize internal bezels with matte stealth black, forged carbon hydro-dip, or color-matched accents, and integrate custom acrylic light bars with dynamic startup sequences.',
    iconName: 'Wrench',
    bannerImage: '/images/services-reference.png',
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
      caption: 'Stock Chrome Halogen Assembly vs Stealth Matte Black Dynamic Housing'
    },
    startingPrice: '₹6,499',
    estimatedDuration: '1 - 2 Days',
    warranty: '2 Years Moisture & Sealant Guarantee',
    compatibleVehicleTypes: ['car', 'bike'],
    highlightTag: 'Bespoke Fabrication',
    benefits: [
      {
        title: '100% Unique Design',
        description: 'Tailored specifically to your vehicle styling goals—no cookie-cutter units.',
        icon: 'Palette'
      },
      {
        title: 'Thermal Vacuum Resealing',
        description: 'Resealed with OEM butyl rubber sealant inside pressure chambers to ensure zero moisture leaks.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Dynamic Lighting Integration',
        description: 'Bespoke sequential sweep indicators and startup welcome sequences integrated into internal bezels.',
        icon: 'Zap'
      }
    ],
    process: [
      { stepNumber: 1, title: 'Concept Render & Consultation', description: 'We map out custom shrouds, internal bezel paint finishes, and light sequence layouts.' },
      { stepNumber: 2, title: 'Thermal De-Housing', description: 'Evenly heated separation of front polycarbonate lens from back housing without tab stress.' },
      { stepNumber: 3, title: 'Custom Fabrication & Paint', description: 'Internal shrouds prepped, primed with high-heat resistant coatings, and customized.' },
      { stepNumber: 4, title: 'OEM Butyl Injected Reseal', description: 'Re-sealed with OEM-spec synthetic butyl rubber under uniform clamping pressure.' }
    ],
    faqs: [
      { question: 'Will custom headlights get moisture inside when washing?', answer: 'Never when done by Dark Mafia Customs. We use OEM grade hot-melt butyl sealant and pressure test each housing before refitting.' },
      { question: 'Can I choose custom colors for the internal bezels?', answer: 'Yes. We offer Piano Gloss Black, Stealth Matte Satin Black, Forged Carbon Fiber hydro-dip, and custom body-color matched finishes.' }
    ],
    linkedProductIds: ['dmc-rgb-devil-eyes', 'dmc-drl-sweep-tube-60cm']
  },
  {
    id: 'devil-eyes-installation',
    slug: 'devil-eyes-installation',
    title: 'Devil Eyes Installation',
    subtitle: 'Menacing Projector Optics with Smartphone RGB Color Control',
    shortDescription: 'Give your car a menacing look with single-color or smartphone-controlled RGB Devil Eyes glowing directly from inside your projector lenses.',
    fullDescription: 'Devil Eyes (also known as Demon Eyes) place high-intensity miniature micro-LED emitters behind your optical projector lenses, casting a vivid inner illumination through the glass lens when parking lights are active. When your main driving beams turn on, smart micro-controllers automatically shut off the Devil Eyes to protect optical purity and legality.',
    iconName: 'Flame',
    bannerImage: '/images/services-reference.png',
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
      caption: 'Off State vs Smartphone Controlled Syndicate Red / Electric Cyan Devil Eye'
    },
    startingPrice: '₹3,499',
    estimatedDuration: '4 - 6 Hours',
    warranty: '1 Year Electronic Component Warranty',
    compatibleVehicleTypes: ['car', 'bike'],
    highlightTag: 'Dark Mafia Signature',
    benefits: [
      {
        title: 'Millions of Smartphone Colors',
        description: 'Bluetooth iOS & Android app enables custom strobe, breathe, gradient, and solid color palettes.',
        icon: 'Smartphone'
      },
      {
        title: 'Auto-Beam Cutoff Safety',
        description: 'Auto-kill circuit instantly deactivates colored Devil Eyes the moment low/high beam headlights ignite.',
        icon: 'Zap'
      },
      {
        title: 'Aggressive Night Stance',
        description: 'Turns any car or motorcycle into an unmistakable menacing silhouette on the street.',
        icon: 'Flame'
      }
    ],
    process: [
      { stepNumber: 1, title: 'Projector Core Alignment', description: 'Internal bracket mounting directly behind the glass optical sphere.' },
      { stepNumber: 2, title: 'Bluetooth Controller Wiring', description: 'Solid-state IP67 sealed BLE driver integrated into auxiliary power.' },
      { stepNumber: 3, title: 'Auto-Kill Safety Relay', description: 'Tapping headlight trigger to auto-switch off colors during nighttime headlight use.' },
      { stepNumber: 4, title: 'App Calibration & Mobile Pairing', description: 'Pairing client device and testing RGB spectrum sweeps.' }
    ],
    faqs: [
      { question: 'Is Devil Eye lighting legal on public roads?', answer: 'Devil eyes are configured for parking, car meets, and show modes. Our intelligent auto-cutoff switch deactivates them automatically when your main headlights turn on for street driving.' },
      { question: 'Will this drain my vehicle battery?', answer: 'No. Our high-efficiency micro-LED emitters draw less than 0.3 Amps and are wired through ignition-switched power relays.' }
    ],
    linkedProductIds: ['dmc-rgb-devil-eyes', 'dmc-dsr-30-biled']
  },
  {
    id: 'drl-upgrades-and-installation',
    slug: 'drl-upgrades-and-installation',
    title: 'DRL Upgrades & Installation',
    subtitle: 'Daytime Running Lights with Startup Sweeps & Dynamic Sequential Turn Signals',
    shortDescription: 'Upgrade your headlights or front bumper with bright, energy-efficient Daytime Running Lights (DRLs) featuring startup sweeps and sequential indicators.',
    fullDescription: 'Modern luxury supercars and superbikes are defined by their daytime running light signatures. We engineer and retrofit ultra-bright, dotless COB silicon LED light pipes and custom acrylic DRL channels into headlights, bumper grilles, and front cowls with theater-grade startup sweeps and fluid sequential amber turn signals.',
    iconName: 'Zap',
    bannerImage: '/images/services-reference.png',
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=800&q=80',
      caption: 'Dim Halogen Marker vs Neon Dotless Startup Sweep Dynamic DRL'
    },
    startingPrice: '₹4,999',
    estimatedDuration: '4 - 5 Hours',
    warranty: '18 Months Warranty',
    compatibleVehicleTypes: ['car', 'bike'],
    highlightTag: 'High Street Demand',
    benefits: [
      {
        title: 'Ceremonial Startup Sweep',
        description: 'Fluid greeting animation every time you unlock or start the vehicle.',
        icon: 'Sparkles'
      },
      {
        title: 'Sequential Amber Flow',
        description: 'Audi/Lexus style animated sweeping turn signal for maximum road signaling safety.',
        icon: 'ChevronsRight'
      },
      {
        title: 'Extreme Daylight Visibility',
        description: 'High-density Osram LED chips visible even under direct harsh midday sunlight.',
        icon: 'Sun'
      }
    ],
    process: [
      { stepNumber: 1, title: 'Channel & Grille Template', description: 'Laser-measuring headlight housings or bumper contours for flush fit.' },
      { stepNumber: 2, title: 'Silicon DRL Channel Mounting', description: 'Zero-rattle structural mounting with vibration-resistant clips.' },
      { stepNumber: 3, title: 'Sequential Driver Integration', description: 'Wiring synchronized turn signal triggers to vehicle CANBUS or indicator lines.' },
      { stepNumber: 4, title: 'Voltage Stabilization Test', description: 'Ensuring zero flickering under engine cranking and alternator peak load.' }
    ],
    faqs: [
      { question: 'Will this cause dashboard error warnings or hyper-flashing?', answer: 'No. All our DRL kits include built-in load resistors and CANBUS decoders to prevent hyper-flashing and dash warnings.' }
    ],
    linkedProductIds: ['dmc-drl-sweep-tube-60cm', 'dmc-relay-harness-h4']
  },
  {
    id: 'led-projector-retrofits',
    slug: 'led-projector-retrofits',
    title: 'LED Projector Retrofits',
    subtitle: 'Bi-LED & Bi-Xenon Optical Conversions for Surgical Night Visibility',
    shortDescription: 'Upgrade old reflector headlights with high-performance Bi-LED or Bi-Xenon projector lenses for a sharp beam cutoff and superior night illumination.',
    fullDescription: 'Traditional reflector headlights scatter light erratically, creating glare for oncoming motorists while leaving dark patches on the road. Dark Mafia Customs retrofits precision 3.0-inch and 2.5-inch Bi-LED optical projectors with internal electromagnetic solenoids that deliver a razor-sharp horizontal cutoff line on low beam, and unleash immense long-throw illumination on high beam.',
    iconName: 'Compass',
    bannerImage: '/images/services-reference.png',
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
      caption: 'Dim Scattered Halogen Beam vs Razor Cutoff 12,000LM Bi-LED Projection'
    },
    startingPrice: '₹9,999',
    estimatedDuration: '1 Day',
    warranty: '2 Years Comprehensive Warranty',
    compatibleVehicleTypes: ['car', 'bike'],
    highlightTag: 'Flagship Optical Service',
    benefits: [
      {
        title: '300% Distance Throw Increase',
        description: 'Projects usable illumination over 350 meters down unlit highways.',
        icon: 'Maximize'
      },
      {
        title: 'Zero Oncoming Glare Cutoff',
        description: 'Laser-engineered cutoff shield stops light below driver eye-line for oncoming cars.',
        icon: 'Shield'
      },
      {
        title: 'Pure 5700K Daylight Spectrum',
        description: 'Optimal color temperature reduces eye fatigue on long midnight touring runs.',
        icon: 'Sun'
      }
    ],
    process: [
      { stepNumber: 1, title: 'Housing Decoupling & Alignment', description: 'Reflector bowls mounted on optical laser calibration benches.' },
      { stepNumber: 2, title: 'Precision Projector Mounting', description: 'Threading or bracket mounting Bi-LED projector through original socket.' },
      { stepNumber: 3, title: 'Dual Beam Solenoid Wire-up', description: 'Solenoid shutter tied directly to vehicle high-beam stalk.' },
      { stepNumber: 4, title: 'Laser Wall Alignment & Leveling', description: 'Leveling beam cutoff strictly to international ECE/DOT roadway angles.' }
    ],
    faqs: [
      { question: 'What is the difference between Bi-LED and Bi-Xenon?', answer: 'Bi-LED features instant-on solid-state illumination with no ballast warm-up lag, cooler operating temperatures, and higher optical efficiency compared to older HID Xenon bulbs.' },
      { question: 'Can you install Bi-LED projectors on bikes?', answer: 'Yes! We specialize in single and dual Bi-LED retrofits for bikes like Yamaha R15, MT-15, Royal Enfield, and KTM models.' }
    ],
    linkedProductIds: ['dmc-dsr-30-biled', 'dmc-laser-biled-matrix']
  },
  {
    id: 'fog-lamp-upgrades',
    slug: 'fog-lamp-upgrades',
    title: 'Fog Lamp Upgrades',
    subtitle: 'Waterproof Bi-LED Projector Fog Assemblies with Dual High/Low Beams',
    shortDescription: 'Upgrade your fog lamps to powerful, waterproof Bi-LED projectors that light up the road surface beneath weather blockages.',
    fullDescription: 'Factory fog lights are usually low-wattage halogen bulbs that barely illuminate road markers. Dark Mafia Customs upgrades them to heavy-duty, die-cast aluminum Bi-LED projector fog housings engineered with IP68 waterproof ratings. Equipped with dual-beam electromagnetic solenoids, our fog projectors work in sync with your high beams to flood the entire roadway in dense fog, rain, or pitch-black ghat roads.',
    iconName: 'CloudRain',
    bannerImage: '/images/services-reference.png',
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
      caption: 'Stock 19W Halogen Fog vs 100W All-Weather Dual-Beam Bi-LED Fog Flood'
    },
    startingPrice: '₹6,999',
    estimatedDuration: '2 - 3 Hours',
    warranty: '2 Years Waterproof & Bulb Replacement Warranty',
    compatibleVehicleTypes: ['car'],
    highlightTag: 'All-Weather Defense',
    benefits: [
      {
        title: 'IP68 Submersible Waterproofing',
        description: 'Sealed die-cast aluminum bodies designed for water crossings, heavy monsoons, and pressure washing.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Integrated High-Beam Assist',
        description: 'Solenoid shutter drops to throw quad high-beams when paired with your main headlights.',
        icon: 'Zap'
      },
      {
        title: 'Direct OEM Bracket Compatibility',
        description: 'Plug-and-play fitment into factory bumper pockets for Toyota, Mahindra, Hyundai, Suzuki, BMW, and more.',
        icon: 'Wrench'
      }
    ],
    process: [
      { stepNumber: 1, title: 'Bumper Undertray Access', description: 'Careful removal of splash guard and OEM fog light pods.' },
      { stepNumber: 2, title: 'Custom Vehicle Brackets', description: 'Mounting vehicle-specific CNC aluminum brackets to lock Bi-LED fogs firmly in place.' },
      { stepNumber: 3, title: 'High-Beam Solenoid Tap', description: 'Linking fog shutter trigger to vehicle high-beam relay.' },
      { stepNumber: 4, title: 'Roadway Low Pitch Leveling', description: 'Pitching beam low to cut beneath heavy ground fog and monsoon water spray.' }
    ],
    faqs: [
      { question: 'Will these fog projectors blind other drivers?', answer: 'No. Just like our main Bi-LED projectors, our fog projectors have a razor-sharp cutoff that keeps intense light concentrated strictly on the tarmac.' }
    ],
    linkedProductIds: ['dmc-biled-fog-projector-3in', 'dmc-relay-harness-h4']
  },
  {
    id: 'vehicle-styling-and-aesthetics',
    slug: 'vehicle-styling-and-aesthetics',
    title: 'Vehicle Styling & Aesthetics',
    subtitle: 'Body Kits, Carbon Fiber Accents, De-Chroming & App Ambient Cockpits',
    shortDescription: 'Give your car a high-end look with custom body kits, carbon fiber wraps, black-out packages, ambient lighting, and personalized details.',
    fullDescription: 'Dark Mafia Customs transforms standard production vehicles into aggressive, stealth machines. Our vehicle styling studio specializes in precision de-chroming (stealth black-out packages for grilles, window trims, badges), dry and gloss carbon fiber wraps, custom aerodynamic splitters, diffusers, rear spoilers, and 64-color smartphone-integrated fiber-optic ambient interior lighting.',
    iconName: 'ShieldAlert',
    bannerImage: '/images/services-reference.png',
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
      caption: 'Factory Chrome Accents vs Full Mafia Stealth De-Chrome & Carbon Styling'
    },
    startingPrice: '₹7,999',
    estimatedDuration: '1 - 3 Days',
    warranty: '2 Years Film & Workmanship Guarantee',
    compatibleVehicleTypes: ['car', 'bike'],
    highlightTag: 'Full Mafia Stance',
    benefits: [
      {
        title: 'Complete Chrome Delete',
        description: 'Say goodbye to tacky shiny chrome trims with satin or gloss stealth black finishes.',
        icon: 'Palette'
      },
      {
        title: 'Aerodynamic Body Add-ons',
        description: 'Front splitters, side skirt extensions, and aggressive rear diffusers for grounded stance.',
        icon: 'Shield'
      },
      {
        title: '64-Color Symphony Ambient Cockpit',
        description: 'Integrated fiber-optic cabin lighting with audio-sync and custom color zones.',
        icon: 'Sparkles'
      }
    ],
    process: [
      { stepNumber: 1, title: 'Surface Clay Bar Decontamination', description: 'Chemical iron decontamination and isopropyl alcohol wipe of all body surfaces.' },
      { stepNumber: 2, title: 'Trim Removal & Disassembly', description: 'Careful badge, grille, and trim extraction using non-marring tools.' },
      { stepNumber: 3, title: 'Cast Vinyl Wrap & Black-out', description: 'Application of premium cast wrap film with heat-post-curing edges at 90°C.' },
      { stepNumber: 4, title: 'Aesthetic Hardware Alignment', description: 'Precision mounting of aerodynamic splitters and final surface sealant.' }
    ],
    faqs: [
      { question: 'Is de-chroming wrap reversible?', answer: 'Yes. We use premium automotive cast films that can be removed cleanly years later without harming the underlying factory finish.' },
      { question: 'Can you install ambient lighting on any car?', answer: 'Yes. Our ultra-thin 1mm fiber-optic strips fit cleanly into the dashboard and door card seam lines of virtually any modern car.' }
    ],
    linkedProductIds: ['dmc-ambient-lighting-kit-64c', 'dmc-carbon-splitter-lip']
  }
];

export const VEHICLES_DATABASE: Vehicle[] = [
  // CARS
  {
    id: 'car-bmw-3series-g20',
    type: 'car',
    make: 'BMW',
    model: '3 Series',
    generation: 'G20 (Pre-LCI & LCI)',
    yearRange: '2019 - 2025',
    variant: '330i / 330Li / M340i xDrive',
    headlightSocket: 'OEM LED Module / DSR Retrofit',
    fogSocket: 'Bi-LED Bracket Type 3.0',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular German Sedans'
  },
  {
    id: 'car-mahindra-thar',
    type: 'car',
    make: 'Mahindra',
    model: 'Thar',
    generation: 'Gen 2 (3-Door & Roxx 5-Door)',
    yearRange: '2020 - 2026',
    variant: 'AX / LX / Earth Edition',
    headlightSocket: '7-Inch Round H4 Direct Socket',
    fogSocket: 'H16 / 3.0-Inch Bi-LED Round Bracket',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
    badge: 'Off-Road Beast'
  },
  {
    id: 'car-hyundai-creta',
    type: 'car',
    make: 'Hyundai',
    model: 'Creta',
    generation: 'Gen 2 & Facelift',
    yearRange: '2020 - 2025',
    variant: 'E / EX / S / SX / SX(O) / N-Line',
    headlightSocket: 'HB3 / 9005 Projector Socket',
    fogSocket: '3.0-Inch Bi-LED Projector',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
    badge: 'Top Selling SUV'
  },
  {
    id: 'car-toyota-fortuner',
    type: 'car',
    make: 'Toyota',
    model: 'Fortuner',
    generation: 'AN160 / Legender',
    yearRange: '2016 - 2025',
    variant: '4x2 / 4x4 / Legender / GR-S',
    headlightSocket: 'Bi-LED Dual Projector System',
    fogSocket: 'Toyota Specific 2.0 / 3.0 Bracket',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
    badge: 'Flagship SUV'
  },
  {
    id: 'car-vw-virtus',
    type: 'car',
    make: 'Volkswagen',
    model: 'Virtus / Polo',
    generation: 'MQB A0 IN / 6R',
    yearRange: '2015 - 2025',
    variant: 'Comfortline / Highline / GT Plus',
    headlightSocket: 'H7 / H4 / LED Housing',
    fogSocket: 'H11 / Bi-LED Modular',
    image: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=600&q=80',
    badge: 'Euro Tuner Favorite'
  },
  // BIKES
  {
    id: 'bike-yamaha-r15',
    type: 'bike',
    make: 'Yamaha',
    model: 'YZF R15',
    generation: 'V3 / V4 / M',
    yearRange: '2018 - 2025',
    variant: 'Standard / Racing Blue / R15M',
    headlightSocket: 'Single Center Bi-LED Projector',
    fogSocket: 'Auxiliary Crash Guard Mount',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80',
    badge: 'Track Bred 150'
  },
  {
    id: 'bike-re-gt650',
    type: 'bike',
    make: 'Royal Enfield',
    model: 'Continental GT / Interceptor 650',
    generation: 'Twin 650 Series',
    yearRange: '2019 - 2025',
    variant: 'Standard / Chrome / Blacked Out Edition',
    headlightSocket: '7-Inch Round Headlamp Shell H4',
    fogSocket: 'Auxiliary Fork / Engine Guard Clamp',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80',
    badge: 'Cafe Racer Twin'
  },
  {
    id: 'bike-ktm-duke390',
    type: 'bike',
    make: 'KTM',
    model: 'Duke 390 / RC 390',
    generation: 'Gen 2 & Gen 3',
    yearRange: '2017 - 2025',
    variant: 'Standard / GP Edition',
    headlightSocket: 'Split LED Predator Headlight',
    fogSocket: 'Crash Cage Auxiliary Mount',
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80',
    badge: 'Street Fighter'
  },
  {
    id: 'bike-kawasaki-zx10r',
    type: 'bike',
    make: 'Kawasaki',
    model: 'Ninja ZX-10R / ZX-6R',
    generation: 'Gen 6 Aerodynamic Face',
    yearRange: '2021 - 2025',
    variant: 'KRT Edition / Standard',
    headlightSocket: 'Dual Cowl Recessed Bi-LED Module',
    fogSocket: 'Not Applicable',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=600&q=80',
    badge: 'Liter Class Weapon'
  }
];

export const PRODUCTS_CATALOG: Product[] = [
  {
    id: 'dmc-dsr-30-biled',
    name: 'Dark Mafia DSR 3.0" Hyper-Beam Bi-LED Projector Lens Kit',
    slug: 'dsr-30-hyper-beam-biled-projector-kit',
    sku: 'DMC-DSR-300-PRO',
    price: 13999,
    regularPrice: 17999,
    salePrice: 13999,
    onSale: true,
    stockStatus: 'instock',
    stockQuantity: 42,
    rating: 4.95,
    reviewCount: 128,
    category: 'lighting',
    categoryName: 'DSR Lighting & Bi-LED',
    subCategory: 'Projector Lenses',
    vehicleType: 'both',
    isUniversal: true,
    compatibleVehicleIds: ['car-bmw-3series-g20', 'car-mahindra-thar', 'car-hyundai-creta', 'car-vw-virtus', 'bike-re-gt650', 'bike-yamaha-r15'],
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High-power 75W custom tuned automotive Bi-LED projector featuring dual high-transmittance curved quartz lenses, instant electromagnetic solenoid cutoffs, and 12,000 Lumens per pair.',
    description: 'The Dark Mafia DSR 3.0" Bi-LED Projector is our crown jewel of automotive illumination. Engineered for drivers who demand surgical night vision without blinding oncoming traffic, it features German-engineered Osram LED dies coupled with our custom Dark Mafia optic reflector bowl. The result is a razor-sharp beam cutoff line with deep, wide horizontal road fill and an ultra-focused high beam punch reaching beyond 380 meters.',
    features: [
      'Genuine 75W per projector real-world output',
      'Instantaneous 0.01s High/Low electromagnetic solenoid switch',
      'Pure 5700K Daylight White color profile for zero eye fatigue',
      'High-speed 12,000 RPM silent magnetic levitation cooling fan',
      'Direct threaded shaft mounting compatible with H4, H7, 9005 sockets'
    ],
    specs: [
      { label: 'Lens Diameter', value: '3.0 Inches Optical Quartz' },
      { label: 'Input Voltage', value: 'DC 9V - 16V' },
      { label: 'Power Consumption', value: '75W (High Beam) / 60W (Low Beam)' },
      { label: 'Luminous Flux', value: '12,000 Lumens (Pair)' },
      { label: 'Color Temp', value: '5700K Neutral Pure White' },
      { label: 'Operating Temp', value: '-40°C to +105°C' }
    ],
    warranty: '2 Years Direct Replacement Warranty',
    shipping: 'Free Express Shipping Across India (3-5 Days)',
    installationDifficulty: 'Professional Recommended',
    isFeatured: true
  },
  {
    id: 'dmc-rgb-devil-eyes',
    name: 'Dark Mafia Syndicate App-Controlled RGB Devil Eyes (Bluetooth BLE)',
    slug: 'syndicate-rgb-devil-eyes-bluetooth',
    sku: 'DMC-DEVIL-BLE-RGB',
    price: 3499,
    regularPrice: 4499,
    salePrice: 3499,
    onSale: true,
    stockStatus: 'instock',
    stockQuantity: 85,
    rating: 4.88,
    reviewCount: 94,
    category: 'lighting',
    categoryName: 'DSR Lighting & Bi-LED',
    subCategory: 'Devil Eyes',
    vehicleType: 'both',
    isUniversal: true,
    compatibleVehicleIds: ['car-bmw-3series-g20', 'car-mahindra-thar', 'car-hyundai-creta', 'car-toyota-fortuner', 'car-vw-virtus', 'bike-yamaha-r15', 'bike-ktm-duke390', 'bike-re-gt650'],
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Smartphone Bluetooth app-controlled RGB LED devil eyes engineered to fit seamlessly inside 2.5" and 3.0" projector lenses with intelligent auto-kill safety cutoff wire.',
    description: 'Transform your front headlights into an aggressive, glowing underworld presence. Dark Mafia Syndicate Devil Eyes mount directly behind the optical spherical projector lens. Using our iOS and Android smartphone app, choose from 16 million colors, speed-adjustable strobe modes, heartbeat breathing pulses, or set it to our signature Syndicate Purple or Menacing Crimson. Includes a dedicated auto-cutoff signal wire that instantly kills colored glow when your main driving headlights activate.',
    features: [
      '16 Million colors via responsive Bluetooth 5.0 smartphone app',
      'Built-in smart headlight auto-kill wire for street road safety',
      'High-grade Cree micro-LED array for uniform internal lens diffusion',
      'Fully potted IP67 waterproof silicone sealed electronics module'
    ],
    specs: [
      { label: 'Control Method', value: 'Bluetooth 5.0 iOS / Android App' },
      { label: 'Lens Fitment', value: '2.5" and 3.0" Projector Lenses' },
      { label: 'Operating Voltage', value: '12V DC' },
      { label: 'Auto Cutoff', value: 'Yes (12V High/Low beam trigger wire)' }
    ],
    warranty: '1 Year Full Replacement Warranty',
    shipping: 'Free Express Shipping Across India',
    installationDifficulty: 'Moderate',
    isFeatured: true
  },
  {
    id: 'dmc-biled-fog-projector-3in',
    name: 'Dark Mafia Aegis 3.0" All-Weather Bi-LED Projector Fog Light System',
    slug: 'aegis-30-all-weather-biled-fog-projectors',
    sku: 'DMC-FOG-AEGIS-30',
    price: 8999,
    regularPrice: 11999,
    salePrice: 8999,
    onSale: true,
    stockStatus: 'instock',
    stockQuantity: 36,
    rating: 4.92,
    reviewCount: 76,
    category: 'lighting',
    categoryName: 'DSR Lighting & Bi-LED',
    subCategory: 'Fog Projectors',
    vehicleType: 'car',
    isUniversal: false,
    compatibleVehicleIds: ['car-bmw-3series-g20', 'car-mahindra-thar', 'car-hyundai-creta', 'car-toyota-fortuner', 'car-vw-virtus'],
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Submersible IP68 waterproof die-cast aluminum Bi-LED fog light projectors with high/low beam solenoids and vehicle-specific mounting brackets.',
    description: 'When rain, dense fog, or mountain mist blinds ordinary headlights, the Dark Mafia Aegis 3.0" Fog Projector takes over. Designed to sit low in the vehicle bumper, it cuts underneath the fog layer with an ultra-wide 160-degree flat beam pattern that illuminates road shoulders, curbs, and potholes without any upward bounce-back glare. Features high-beam assist to throw a secondary punch alongside your main headlights.',
    features: [
      'True IP68 waterproof sealed die-cast aeronautical aluminum chassis',
      'Dual-beam solenoid drops cutoff shield to unleash auxiliary high beam',
      'Vehicle-specific direct mounting brackets for Thar, Fortuner, Creta, BMW, and German sedans',
      'Custom tuned 4300K Warm Yellow-White or 5500K Crystal White'
    ],
    specs: [
      { label: 'Chassis Material', value: 'A380 Die-Cast Heavy Aluminum' },
      { label: 'Waterproof Rating', value: 'IP68 Submersible' },
      { label: 'Lumen Output', value: '9,800 Lumens per set' },
      { label: 'Power Rating', value: '55W per lamp' }
    ],
    warranty: '2 Years Waterproof & Performance Warranty',
    shipping: 'Free Express Shipping Across India',
    installationDifficulty: 'Moderate',
    isFeatured: true
  },
  {
    id: 'dmc-drl-sweep-tube-60cm',
    name: 'Dark Mafia CyberSweep Dynamic Startup & Sequential DRL Strips (60cm)',
    slug: 'cybersweep-dynamic-startup-sequential-drl',
    sku: 'DMC-DRL-CYBER-60',
    price: 2499,
    regularPrice: 3499,
    salePrice: 2499,
    onSale: true,
    stockStatus: 'instock',
    stockQuantity: 110,
    rating: 4.81,
    reviewCount: 63,
    category: 'styling',
    categoryName: 'Styling & Aesthetics',
    subCategory: 'DRL & LED Tubes',
    vehicleType: 'both',
    isUniversal: true,
    compatibleVehicleIds: ['car-bmw-3series-g20', 'car-mahindra-thar', 'car-hyundai-creta', 'car-vw-virtus', 'bike-yamaha-r15', 'bike-ktm-duke390', 'bike-re-gt650'],
    images: [
      'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Flexible ultra-bright dotless silicon LED light tube featuring ceremonial greeting startup sweeps and synchronized fluid amber sequential turn signal indicators.',
    description: 'Give your ride the lighting signature of a 2026 concept car. The CyberSweep flexible tube features high-density micro-LED emitters encased in seamless milk-white silicone that produces a 100% continuous, zero-hotspot neon light glow. Powers up with an animated welcoming sweep every time you unlock your vehicle, and switches into a flowing sequential amber indicator when signaling.',
    features: [
      'Ceremonial dynamic greeting sweep sequence upon vehicle ignition',
      'Audi / Lexus style flowing amber sequential turn signals',
      'Flexible soft silicone tube can be trimmed every 3cm to fit any contour',
      'Integrated CANBUS intelligent load drivers eliminate dashboard faults'
    ],
    specs: [
      { label: 'Length', value: '60cm (Pair included)' },
      { label: 'Color Function', value: 'Ice White DRL + Amber Sequential Turn' },
      { label: 'Voltage', value: '12V DC' },
      { label: 'Waterproof', value: 'IP67 Weather Sealed' }
    ],
    warranty: '1 Year Replacement Warranty',
    shipping: 'Free Express Shipping Across India',
    installationDifficulty: 'Plug & Play'
  },
  {
    id: 'dmc-ambient-lighting-kit-64c',
    name: 'Dark Mafia Phantom Symphony 64-Color Fiber Optic Interior Ambient Kit',
    slug: 'phantom-symphony-64-color-ambient-lighting',
    sku: 'DMC-INT-PHANTOM-64',
    price: 5499,
    regularPrice: 7499,
    salePrice: 5499,
    onSale: true,
    stockStatus: 'instock',
    stockQuantity: 52,
    rating: 4.93,
    reviewCount: 88,
    category: 'styling',
    categoryName: 'Styling & Aesthetics',
    subCategory: 'Interior Ambient',
    vehicleType: 'car',
    isUniversal: true,
    compatibleVehicleIds: ['car-bmw-3series-g20', 'car-mahindra-thar', 'car-hyundai-creta', 'car-toyota-fortuner', 'car-vw-virtus'],
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'App-controlled 64-color symphony interior ambient lighting system with ultra-thin 1mm fiber optic light guides, door pocket pods, and footwell illumination.',
    description: 'Transform your cockpit into an executive luxury lounge or high-energy midnight cockpit. The Phantom Symphony kit uses next-generation addressable LED driver chips connected to razor-thin 1mm optical conduits that slide invisibly into dashboard and door card seams. Features 64 colors, multi-zone color splitting, sound-reactive audio music sync, and seamless smartphone control.',
    features: [
      '64-Color RGB Symphony with independent upper and lower color zones',
      'Ultra-thin 1.0mm acrylic light conduit embeds flush into dashboard seams',
      'Acoustic microphone sync dances to cabin exhaust notes or music',
      'Sub-controllers for each door communicate wirelessly—zero messy wire routing across door jams'
    ],
    specs: [
      { label: 'Conduit Total Length', value: '6 Meters Trim-to-fit' },
      { label: 'Sub-Controllers', value: '4 Wireless RF Door Modules + 1 Main Box' },
      { label: 'App Compatibility', value: 'iOS & Android' }
    ],
    warranty: '18 Months Warranty',
    shipping: 'Free Express Shipping Across India',
    installationDifficulty: 'Professional Recommended'
  },
  {
    id: 'dmc-relay-harness-h4',
    name: 'Dark Mafia Heavy-Duty Ceramic Core Dual Relay Wiring Harness',
    slug: 'heavy-duty-ceramic-dual-relay-wiring-harness',
    sku: 'DMC-HARN-H4-CER',
    price: 1299,
    regularPrice: 1799,
    salePrice: 1299,
    onSale: true,
    stockStatus: 'instock',
    stockQuantity: 140,
    rating: 4.87,
    reviewCount: 45,
    category: 'accessories',
    categoryName: 'Performance & Accessories',
    subCategory: 'Wiring & Relays',
    vehicleType: 'both',
    isUniversal: true,
    compatibleVehicleIds: ['car-mahindra-thar', 'car-vw-virtus', 'bike-re-gt650', 'bike-yamaha-r15'],
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: '100% pure copper 12-gauge automotive wiring harness with dual 40A waterproof relays, independent fuse blocks, and high-temp ceramic plugs.',
    description: 'Never risk your factory vehicle wiring harness when installing high-draw Bi-LED or halogen upgrades. This heavy-duty harness draws power directly from your battery terminals through dual 40A solid-state relays, using your factory headlight socket solely as an on/off trigger. Prevents flickering, protects the factory Body Control Module (BCM), and delivers 100% unchoked voltage directly to your lights.',
    features: [
      'High-temperature ceramic bulb connectors rated up to 1000°C',
      'Dual 40A sealed waterproof electromagnetic relays',
      'In-line 30A blade fuse protection',
      'Heavy braided PET wire loom shielding prevents abrasion and engine heat damage'
    ],
    specs: [
      { label: 'Wire Gauge', value: '12 AWG Pure Tinned Oxygen-Free Copper' },
      { label: 'Relay Rating', value: 'Dual 40A 12V DC' },
      { label: 'Socket Type', value: 'H4 / 9003 Compatible' }
    ],
    warranty: '3 Years Warranty',
    shipping: 'Free Express Shipping Across India',
    installationDifficulty: 'Plug & Play'
  }
];

export const DARK_MAFIA_BUILDS: Build[] = [
  {
    id: 'build-bmw-m340i-midnight',
    slug: 'bmw-m340i-midnight-syndicate-edition',
    title: 'The Midnight Syndicate: BMW M340i xDrive',
    vehicleName: 'BMW M340i xDrive (G20)',
    vehicleType: 'car',
    year: '2023',
    location: 'Dark Mafia Studio Bengaluru',
    heroImage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80'
    ],
    story: 'The client brought in an immaculate Dravit Grey BMW M340i seeking an menacing, blacked-out aesthetic without compromising highway illumination during intercity night sprints. We completed a full internal headlight housing blackout with satin black ceramic coating, integrated Bluetooth BLE Devil Eyes glowing in deep Syndicate Purple, and retrofitted Dark Mafia Aegis Bi-LED fog units into the lower bumper ducts.',
    servicesPerformed: [
      'Custom Headlight Modifications',
      'Devil Eyes Installation',
      'Fog Lamp Upgrades',
      'Vehicle Styling & Aesthetics (Full De-Chroming)'
    ],
    productsUsedIds: ['dmc-rgb-devil-eyes', 'dmc-biled-fog-projector-3in', 'dmc-ambient-lighting-kit-64c'],
    featured: true
  },
  {
    id: 'build-thar-black-ops-overhaul',
    slug: 'mahindra-thar-black-ops-overhaul',
    title: 'Project Black Ops: Mahindra Thar 4x4',
    vehicleName: 'Mahindra Thar 4x4 Hard Top',
    vehicleType: 'car',
    year: '2024',
    location: 'Dark Mafia Customs Mumbai',
    heroImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
    ],
    story: 'Built for intense off-grid trail expeditions and high-altitude Himalayan passes. The factory 55W halogen reflectors were replaced with 3.0" DSR Bi-LED Hyper-Beam projectors encased in menacing blackout turbine shrouds, coupled with IP68 waterproof Bi-LED auxiliary fog floodlights wired to independent cockpit switches.',
    servicesPerformed: [
      'LED Projector Retrofits',
      'DRL Upgrades & Installation',
      'Fog Lamp Upgrades'
    ],
    productsUsedIds: ['dmc-dsr-30-biled', 'dmc-biled-fog-projector-3in', 'dmc-relay-harness-h4'],
    featured: true
  },
  {
    id: 'build-r15-v4-predator',
    slug: 'yamaha-r15-v4-predator-track-edition',
    title: 'The Predator: Yamaha R15M Superbike Overhaul',
    vehicleName: 'Yamaha YZF R15M V4',
    vehicleType: 'bike',
    year: '2024',
    location: 'Dark Mafia Customs Studio',
    heroImage: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80'
    ],
    story: 'Crafted to dominate city streets and weekend track days. We upgraded the central optical core with a custom tuned Bi-LED unit, added glowing Electric Cyan Devil Eyes behind the projector lens, and installed CyberSweep dynamic turn signal strips along the aerodynamic front fairing vents.',
    servicesPerformed: [
      'Custom Headlight Modifications',
      'Devil Eyes Installation',
      'DRL Upgrades & Installation'
    ],
    productsUsedIds: ['dmc-rgb-devil-eyes', 'dmc-drl-sweep-tube-60cm'],
    featured: true
  }
];

export const BLOG_POSTS = [
  {
    slug: 'what-are-dsr-lights-complete-guide',
    title: 'What Are DSR Lights? The Definitive Guide to High-Performance Automotive Illumination',
    category: 'Automotive Lighting',
    date: 'March 2026',
    readTime: '6 min read',
    excerpt: 'Explore why DSR (Direct Surface Reflector / Dual Stage Retrofit) Bi-LED projectors outperform factory halogen and stock reflectors in beam width, cutoff sharpness, and night driving safety.',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'bi-led-vs-bi-xenon-projectors-which-is-better',
    title: 'Bi-LED vs. Bi-Xenon Headlight Retrofits: Which Delivers Superior Road Vision?',
    category: 'Technical Comparisons',
    date: 'February 2026',
    readTime: '8 min read',
    excerpt: 'Detailed optical comparison breaking down warm-up latency, power efficiency, cutoff definition, and maintenance lifespan between Bi-LED and older HID Xenon technology.',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'devil-eyes-installation-legality-and-features',
    title: 'Devil Eyes Installation: App Controls, Wiring Safety & Legal Street Use Explained',
    category: 'Customization Guides',
    date: 'January 2026',
    readTime: '5 min read',
    excerpt: 'Everything you need to know about smartphone RGB Devil Eyes, auto-cutoff safety switches, and how to keep your ride compliant on public highways.',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80'
  }
];
