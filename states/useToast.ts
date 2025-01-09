import { create } from "zustand";

interface ToastState {
	showToast: boolean;
	toastMessage: string;
	toggleToast: (message?: string) => void;
}

export const useToast = create<ToastState>()((set) => ({
	showToast: false,
	toastMessage: "",
	toggleToast: (message) => set((state) => ({ showToast: !state.showToast, toastMessage: message })),
}));
