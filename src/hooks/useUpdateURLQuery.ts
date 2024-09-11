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

        // Convert to an array of [key, value] pairs
        const paramsArray = Array.from(newSearchParams.entries());

        // Sort the array by key
        paramsArray.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

        // Reconstruct URLSearchParams from the sorted array
        const sortedSearchParams = new URLSearchParams(paramsArray);
        
        // Update the URL with the new query parameters
        setSearchParams(sortedSearchParams);
    }

    return { updateSearchParams };
}

export default useUpdateURLQuery;