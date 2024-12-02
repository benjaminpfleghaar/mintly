import { create } from "zustand";

interface ToastState {
	showToast: boolean;
	toggleToast: () => void;
}

export const useToast = create<ToastState>()((set) => ({
	showToast: false,
	toggleToast: () => set((state) => ({ showToast: !state.showToast })),
}));
