import { create } from "zustand";

interface CartItem {
    productId: number;
    quantity: number;
}

interface CartStore {
    cartItems: CartItem[];
    addItem: (item: CartItem) => void;
    changeQuantity: (item: CartItem) => void;
    deleteItem: (productId: number) => void;
    clearItems: () => void;
}

create<CartStore>(set=> ({
    cartItems: [
        {productId: 1, quantity: 1},
        {productId: 2, quantity: 5},
        {productId: 3, quantity: 3},
    ],
    addItem: (item) => set((store) => ({cartItems: {...store.cartItems}})),
    changeQuantity: (item) => set((store) => ({cartItems: {...store.cartItems}})),
    deleteItem: (item) => set((store) => ({cartItems: {...store.cartItems}})),
    clearItems: () => set(() => ({cartItems: []}))
}))