import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import sortOptions from "../entities/SortOptions";

export type SortOrder = 'asc' | 'desc';

export interface ProductQuery {
    category?: string;
    sortBy?: string;
    sortOrder?: SortOrder;
    searchText?: string;
    limit?: number;
    page?: number;
}

interface ProductQueryStore {
    productQuery: ProductQuery;
    setQuery: (query: ProductQuery) => void;
    // setCategory: (category: string) => void;
    // setSortBy: (sortBy: string) => void;
    // setSortOrder: (sortOrder: SortOrder) => void;
    setSearchText: (searchText: string) => void;
    resetQuery: () => void;
}

export const defaultQuery = { 
    sortBy: sortOptions[0][0], 
    sortOrder: 'desc' as SortOrder,
    limit: 30,
    page: 1
};

const useProductQueryStore = create<ProductQueryStore>(set => ({
    productQuery: defaultQuery,
    setQuery: (query) => set({productQuery: query}),
    // setCategory: (category) => set((store) => ({productQuery: {...store.productQuery, category, searchText: ''}})),
    // setSortBy: (sortBy) => set((store) => ({productQuery: {...store.productQuery, sortBy}})),
    // setSortOrder: (sortOrder) => set((store) => ({productQuery: {...store.productQuery, sortOrder}})),
    setSearchText: (searchText) => set((store) => ({productQuery: {...store.productQuery, searchText, category: ''}})),
    resetQuery: () => set(() => ({productQuery: defaultQuery}))
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Product Query Store', useProductQueryStore);
  }

export default useProductQueryStore;