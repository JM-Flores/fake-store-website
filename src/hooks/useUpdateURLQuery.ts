import { useSearchParams } from "react-router-dom";
import { ProductQuery } from "../store/productQueryStore";

const useUpdateURLQuery = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const updateSearchParams = (query: ProductQuery) => {
        // If search text exist, clear all URL params
        const newSearchParams = !query.searchText ? new URLSearchParams(searchParams) : new URLSearchParams({});

        // If other params exist, clear search text and reset page
        if (query.category || query.sortBy || query.sortOrder){ 
            newSearchParams.delete('searchText');
            query.page = 1;
        }

    
        // Iterate over the properties in the query object
        for (const [key, value] of Object.entries(query)) {
            if (!value) newSearchParams.delete(key)
            else newSearchParams.set(key, value);
        }
    
        // Update the URL with the new query parameters
        setSearchParams(newSearchParams);
    }

    return { updateSearchParams };
}

export default useUpdateURLQuery;