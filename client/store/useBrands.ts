import { BrandType } from '@/types';
import { create } from 'zustand';

type BrandsStore = {
  brands: BrandType[],
  selectedBrand: BrandType | null,
  setBrands: (types: BrandType[]) => void;
  setSelectedBrand: (selectedBrand: BrandType | null) => void;
};

export const useTypes = create<BrandsStore>((set) => ({
  brands: [
    { id: 1, name: 'Samsung' },
    { id: 2, name: 'Apple' },
  ],
  selectedBrand: null,
  setBrands: (brands) => set({ brands }),
  setSelectedBrand: (selectedBrand) => set({ selectedBrand }),
}));
