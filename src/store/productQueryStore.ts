import { create } from "zustand";

type SortOrder = 'asc' | 'desc';

interface ProductQuery {
    category?: string;
    sortBy?: string;
    sortOrder?: SortOrder;
    searchText?: string;
}

interface ProductQueryStore {
    productQuery: ProductQuery;
    setCategory: (category: string) => void;
    setSortBy: (sortBy: string) => void;
    setSortOrder: (sortOrder: SortOrder) => void;
    setSearchText: (searchText: string) => void;

}

const useProductQueryStore = create<ProductQueryStore>(set => ({
    productQuery: {},
    setCategory: (category) => set((store) => ({productQuery: {...store.productQuery, category}})),
    setSortBy: (sortBy) => set((store) => ({productQuery: {...store.productQuery, sortBy}})),
    setSortOrder: (sortOrder) => set((store) => ({productQuery: {...store.productQuery, sortOrder}})),
    setSearchText: (searchText) => set((store) => ({productQuery: {...store.productQuery, searchText}})),
}));


export default useProductQueryStore;