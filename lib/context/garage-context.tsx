'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Vehicle } from '@/types';
import { VEHICLES_DATABASE } from '@/lib/data';

interface GarageContextType {
  activeVehicle: Vehicle | null;
  selectedVehicleType: 'car' | 'bike';
  setVehicleType: (type: 'car' | 'bike') => void;
  selectVehicle: (vehicleId: string) => void;
  clearVehicle: () => void;
  checkFitment: (compatibleVehicleIds?: string[], isUniversal?: boolean) => {
    isFit: boolean;
    isUniversal: boolean;
    statusText: string;
    badgeColor: 'emerald' | 'amber' | 'rose' | 'slate';
  };
  availableVehicles: Vehicle[];
}

const GarageContext = createContext<GarageContextType | undefined>(undefined);

export function GarageProvider({ children }: { children: React.ReactNode }) {
  const [activeVehicle, setActiveVehicle] = useState<Vehicle | null>(null);
  const [selectedVehicleType, setSelectedVehicleType] = useState<'car' | 'bike'>('car');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const storedVehicleId = localStorage.getItem('dmc_active_vehicle');
      const storedType = localStorage.getItem('dmc_vehicle_type') as 'car' | 'bike';
      if (storedType) setSelectedVehicleType(storedType);
      if (storedVehicleId) {
        const found = VEHICLES_DATABASE.find(v => v.id === storedVehicleId);
        if (found) {
          setActiveVehicle(found);
          setSelectedVehicleType(found.type);
        }
      }
    } catch (e) {
      console.warn('Storage unavailable:', e);
    }
  }, []);

  const selectVehicle = (vehicleId: string) => {
    const found = VEHICLES_DATABASE.find(v => v.id === vehicleId);
    if (found) {
      setActiveVehicle(found);
      setSelectedVehicleType(found.type);
      try {
        localStorage.setItem('dmc_active_vehicle', vehicleId);
        localStorage.setItem('dmc_vehicle_type', found.type);
      } catch (e) {}
    }
  };

  const clearVehicle = () => {
    setActiveVehicle(null);
    try {
      localStorage.removeItem('dmc_active_vehicle');
    } catch (e) {}
  };

  const setVehicleType = (type: 'car' | 'bike') => {
    setSelectedVehicleType(type);
    try {
      localStorage.setItem('dmc_vehicle_type', type);
    } catch (e) {}
    if (activeVehicle && activeVehicle.type !== type) {
      setActiveVehicle(null);
    }
  };

  const checkFitment = (compatibleVehicleIds?: string[], isUniversal?: boolean) => {
    if (!activeVehicle) {
      return {
        isFit: true,
        isUniversal: isUniversal ?? true,
        statusText: isUniversal ? 'Universal Fitment' : 'Select vehicle to check fitment',
        badgeColor: 'slate' as const,
      };
    }

    if (isUniversal) {
      return {
        isFit: true,
        isUniversal: true,
        statusText: `Universal Fitment for your ${activeVehicle.make} ${activeVehicle.model}`,
        badgeColor: 'emerald' as const,
      };
    }

    const matches = compatibleVehicleIds?.includes(activeVehicle.id);
    if (matches) {
      return {
        isFit: true,
        isUniversal: false,
        statusText: `Guaranteed Direct Fit for your ${activeVehicle.make} ${activeVehicle.model}`,
        badgeColor: 'emerald' as const,
      };
    }

    return {
      isFit: false,
      isUniversal: false,
      statusText: `Not Verified for your ${activeVehicle.make} ${activeVehicle.model}`,
      badgeColor: 'rose' as const,
    };
  };

  const availableVehicles = VEHICLES_DATABASE.filter(v => v.type === selectedVehicleType);

  return (
    <GarageContext.Provider
      value={{
        activeVehicle,
        selectedVehicleType,
        setVehicleType,
        selectVehicle,
        clearVehicle,
        checkFitment,
        availableVehicles
      }}
    >
      {children}
    </GarageContext.Provider>
  );
}

export function useGarage() {
  const context = useContext(GarageContext);
  if (!context) {
    throw new Error('useGarage must be used within GarageProvider');
  }
  return context;
}
