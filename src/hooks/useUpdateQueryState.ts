import { useSearchParams } from "react-router-dom";
import useProductQueryStore, { defaultQuery, ProductQuery, SortOrder } from "../store/productQueryStore";
import { useEffect } from "react";

const useUpdateQueryState = () => {
    const [searchParams] = useSearchParams();

    const setQuery = useProductQueryStore(s => s.setQuery);

    useEffect(() => {
        if (searchParams.size === 0) {
            setQuery(defaultQuery);
        }
        else {
            const category = searchParams.get('category');
            const sortBy = searchParams.get('sortBy');
            const sortOrder = searchParams.get('sortOrder') as SortOrder | undefined;
            const searchText = searchParams.get('searchText');
            const page = parseInt(searchParams.get('page') || '0')

            const query: ProductQuery = {
                ...defaultQuery,
                ...(category ? { category } : {}),
                ...(sortBy ? { sortBy } : {}),
                ...(sortOrder ? { sortOrder } : {}),
                ...(searchText ? { searchText } : {}),
                ...(page ? { page } : {}),
            };

            setQuery(query);
        }
    }, [searchParams, setQuery]);

}

export default useUpdateQueryState;