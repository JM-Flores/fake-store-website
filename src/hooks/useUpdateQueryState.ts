import { useSearchParams } from "react-router-dom";
import useProductQueryStore, { ProductQuery, SortOrder } from "../store/productQueryStore";
import { useEffect } from "react";

const useUpdateQueryState = () => {
    const [searchParams] = useSearchParams();

    const setQuery = useProductQueryStore(s => s.setQuery);

    useEffect(() => {
        const query: ProductQuery = {
            category: searchParams.get('category') || undefined,
            sortBy: searchParams.get('sortBy') || undefined,
            sortOrder: searchParams.get('sortOrder') as SortOrder || undefined,
            searchText: searchParams.get('searchText') || undefined,
        };

        // console.log(query);

        setQuery(query);
    }, [searchParams, setQuery]);

}

export default useUpdateQueryState;