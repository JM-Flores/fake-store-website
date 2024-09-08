import { useQuery } from "@tanstack/react-query";
import ProductFetchResponse from "../entities/ProductsFetchResponse";
import APIClient from "../services/apiClient";
import useProductQueryStore from "../store/productQueryStore";


const useProducts = () => {
    const productQuery = useProductQueryStore(s => s.productQuery);

    const endpoint = productQuery.searchText ? '/search' :
                productQuery.category ? '/category/' + productQuery.category :
                '';

    const apiClient = new APIClient<ProductFetchResponse>(endpoint);

    return useQuery({
        queryKey: ['products', productQuery],
        queryFn: async () => {

            const response = productQuery.searchText ? 
                await apiClient.getAll({ 
                    params: {q: productQuery.searchText} 
                }) :
                await apiClient.getAll();
            return response.products;
        }
    });
}

export default useProducts