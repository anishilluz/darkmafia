import React from 'react';
import { Metadata } from 'next';
import CheckoutClient from '@/components/checkout/CheckoutClient';

export const metadata: Metadata = {
  title: 'Secure Checkout | Dark Mafia Customs',
  description: 'Complete your purchase of high-performance automotive lighting with fast free delivery across India.',
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
