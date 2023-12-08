import { ProductType } from '@/types';
import { create } from 'zustand';

type TypesStore = {
  types: ProductType[],
  selectedType: ProductType | null,
  setTypes: (types: ProductType[]) => void;
  setSelectedType: (selectedType: ProductType | null) => void;
};

export const useTypes = create<TypesStore>((set) => ({
  types: [
    { id: 1, name: 'Refrigerator' },
    { id: 2, name: 'Phones' },
    { id: 3, name: 'Laptop' },
  ],
  selectedType: null,
  setTypes: (types) => set({ types }),
  setSelectedType: (selectedType) => set({ selectedType }),
}));
