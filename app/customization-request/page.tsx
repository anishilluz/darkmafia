import React, { Suspense } from 'react';
import { Metadata } from 'next';
import CustomizationFormClient from '@/components/customization/CustomizationFormClient';

export const metadata: Metadata = {
  title: 'Request a Customization Quote | Dark Mafia Customs',
  description: 'Book vehicle lighting upgrades, Bi-LED projector retrofits, Devil Eyes, and bespoke styling with Dark Mafia Customs. Fast itemized quotations.',
};

export default function CustomizationRequestPage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center text-chrome-400 font-mono text-xs">
        Loading Customization Lab...
      </div>
    }>
      <CustomizationFormClient />
    </Suspense>
  );
}
