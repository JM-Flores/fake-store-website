import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import sortOptions from "../entities/SortOptions";

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
    productQuery: { sortBy: sortOptions[0][0], sortOrder: 'desc'},
    setCategory: (category) => set((store) => ({productQuery: {...store.productQuery, category, searchText: ''}})),
    setSortBy: (sortBy) => set((store) => ({productQuery: {...store.productQuery, sortBy}})),
    setSortOrder: (sortOrder) => set((store) => ({productQuery: {...store.productQuery, sortOrder}})),
    setSearchText: (searchText) => set((store) => ({productQuery: {...store.productQuery, searchText, category: ''}})),
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Product Query Store', useProductQueryStore);
  }

export default useProductQueryStore;