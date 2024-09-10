import { mountStoreDevtool } from "simple-zustand-devtools";
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
    isAllSelected: () => boolean;
    clearAll: () => void;
};

const useCartStore = create<CartStore>(set=> ({
    cartItems: [
        {productId: 1, quantity: 1},
        {productId: 2, quantity: 5},
        {productId: 3, quantity: 3},
        {productId: 167, quantity: 1},
        {productId: 171, quantity: 1},
        {productId: 4, quantity: 1},
        {productId: 5, quantity: 5},
        {productId: 6, quantity: 3},
        {productId: 168, quantity: 1},
        {productId: 170, quantity: 1},
    ],
    addItem: (item) => set((store) => ({cartItems: {...store.cartItems}})),
    changeQuantity: (item) => set((store) => ({
        cartItems: store.cartItems.map((cartItem) =>
            cartItem.productId === item.productId
                ? { ...cartItem, quantity: item.quantity }
                : cartItem
        ),
    })),
    deleteItem: (productId) => set((store) => ({
        cartItems: store.cartItems.filter((item) => item.productId !== productId)
    })),
    changeSelectItem: (id, isSelect) => set((store) => ({
        cartItems: store.cartItems.map((item) =>
            item.productId === id
              ? { ...item, selected: isSelect }
              : item
          ),
    })),
    changeSelectAll: (isSelect) => set((store) => ({
        cartItems: store.cartItems.map((item) => ({
            ...item,
            selected: isSelect,
          })),
    })),
    isAllSelected: () => {
        const store = useCartStore.getState() as CartStore;
        return store.cartItems.every((item) => item.selected === true);
      },
    clearAll: () => set(() => ({cartItems: []}))
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Cart Store', useCartStore);
  }

export default useCartStore;