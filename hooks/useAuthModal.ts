import { create } from "zustand";

interface AuthModal {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useAuthModal = create<AuthModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));


export default useAuthModal