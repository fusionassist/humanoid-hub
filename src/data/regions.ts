import { Region } from '@/types';

export const regions: Region[] = [
  {
    id: 'ireland',
    name: 'Ireland',
    code: 'IE',
    currency: 'EUR',
    currencySymbol: '€',
    enabled: true,
    vatRate: 23,
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'GB',
    currency: 'GBP',
    currencySymbol: '£',
    enabled: false,
    vatRate: 20,
  },
  {
    id: 'eu',
    name: 'European Union',
    code: 'EU',
    currency: 'EUR',
    currencySymbol: '€',
    enabled: false,
    vatRate: 21,
  },
];

export const getActiveRegion = (): Region => {
  return regions.find((r) => r.enabled) || regions[0];
};

export const getRegionById = (id: string): Region | undefined => {
  return regions.find((r) => r.id === id);
};
