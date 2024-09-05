import { useQuery } from "@tanstack/react-query";
import Product from "../entities/Product";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Product>("/products");

const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => apiClient.getAll({params: {}})
    });
}

export default useProducts