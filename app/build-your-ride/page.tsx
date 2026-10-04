import React from 'react';
import { Metadata } from 'next';
import BuildYourRideClient from '@/components/configurator/BuildYourRideClient';

export const metadata: Metadata = {
  title: 'Build Your Ride | Interactive Vehicle Configurator | Dark Mafia Customs',
  description: 'Design your custom vehicle build online with Dark Mafia Customs. Select your car or bike, configure DSR Bi-LED projectors, Devil Eyes, and styling, and get real-time price estimates.',
};

export default function BuildYourRidePage() {
  return <BuildYourRideClient />;
}
