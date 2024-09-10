import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export type AlertStatus = 'success' | 'error'

interface AlertStore {
    isOpen: boolean;
    message: string;
    status: AlertStatus;
    showAlert: (status: AlertStatus, message: string) => void;
    hideAlert: () => void;
}

const useAlertStore = create<AlertStore>((set) => ({
    isOpen: false,
    status: 'success',
    message: '',
    showAlert: (status, message) => set({ isOpen: true, status, message }),
    hideAlert: () => set({ isOpen: false, status: 'success', message: '' }),
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Alert Store', useAlertStore);
}

export default useAlertStore;