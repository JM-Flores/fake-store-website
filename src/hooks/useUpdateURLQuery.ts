import { useSearchParams } from "react-router-dom";
import { ProductQuery } from "../store/productQueryStore";

const useUpdateURLQuery = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const updateSearchParams = (query: ProductQuery) => {
        // If search text exist, clear all URL params
        const newSearchParams = !query.searchText ? new URLSearchParams(searchParams) : new URLSearchParams({});

        // If other params exist, clear search text
        if (query.category || query.sortBy || query.sortOrder) newSearchParams.delete('searchText');
    
        // Iterate over the properties in the query object
        for (const [key, value] of Object.entries(query)) {
            newSearchParams.set(key, value); // Set or update the parameter
        }
    
        // Update the URL with the new query parameters
        setSearchParams(newSearchParams);
    }

    return { updateSearchParams };
}

export default useUpdateURLQuery;