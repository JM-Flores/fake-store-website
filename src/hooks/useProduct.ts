import { useQuery } from "@tanstack/react-query";
import Product from "../entities/Product";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Product>('');

const useProduct = (id: number) => {

    return useQuery({
        queryKey: ['product', id],
        queryFn: () => apiClient.get(id),
    })

}

export default useProduct;