import { create } from 'zustand';

type AuthStore = {
  onAuth: boolean;
  user: 'ADMIN' | 'USER';
  setOnAuth: (status: boolean) => void;
  setUser: (role: 'ADMIN' | 'USER') => void;
};

export const useAuth = create<AuthStore>((set) => ({
  onAuth: false,
  user: 'USER',
  setOnAuth: (status) => set({ onAuth: status }),
  setUser: (role) => set({ user: role })
}));
