import { DeviceType } from '@/types';
import { create } from 'zustand';

type ProductStore = {
  devices: DeviceType[],
  setDevices: (devices: DeviceType[]) => void;
};

export const useProducts = create<ProductStore>((set) => ({
  devices: [
    { id: 1, name: 'Iphone 12 PRO', price: 899, rating: 5, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 2, name: 'Iphone 13', price: 899, rating: 5, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 3, name: 'Iphone 13 PRO', price: 899, rating: 5, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 4, name: 'Iphone 14', price: 899, rating: 5, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  ],
  selectedType: null,
  setDevices: (devices) => set({ devices }),
}));
