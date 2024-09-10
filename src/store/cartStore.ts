import { create } from "zustand";

export interface CartItem {
    productId: number;
    quantity: number;
    selected?: boolean;
};

interface CartStore {
    cartItems: CartItem[];
    addItem: (item: CartItem) => void;
    changeQuantity: (item: CartItem) => void;
    deleteItem: (productId: number) => void;
    changeSelectItem: (productId: number, isSelect: boolean) => void;
    changeSelectAll: (isSelect: boolean) => void;
    clearItems: () => void;
};

const useCartStore = create<CartStore>(set=> ({
    cartItems: [
        {productId: 1, quantity: 1},
        {productId: 2, quantity: 5},
        {productId: 3, quantity: 3},
        {productId: 167, quantity: 1},
        {productId: 171, quantity: 1},
        {productId: 1, quantity: 1},
        {productId: 2, quantity: 5},
        {productId: 3, quantity: 3},
        {productId: 167, quantity: 1},
        {productId: 171, quantity: 1},
    ],
    addItem: (item) => set((store) => ({cartItems: {...store.cartItems}})),
    changeQuantity: (item) => set((store) => ({cartItems: {...store.cartItems}})),
    deleteItem: (id) => set((store) => ({cartItems: {...store.cartItems}})),
    changeSelectItem: (id, isSelect) => set((store) => ({cartItems: {...store.cartItems}})),
    changeSelectAll: (isSelect) => set((store) => ({cartItems: {...store.cartItems}})),
    clearItems: () => set(() => ({cartItems: []}))
}));

export default useCartStore;