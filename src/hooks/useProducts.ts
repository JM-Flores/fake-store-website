import { useQuery } from "@tanstack/react-query";
import ProductFetchResponse from "../entities/ProductsFetchResponse";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<ProductFetchResponse>("/products");

const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await apiClient.getAll({ params: {} });
            return response.products;
        }
    });
}

export default useProducts