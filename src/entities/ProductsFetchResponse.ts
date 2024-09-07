import Product from "./Product";

interface ProductFetchResponse{
    products: Product[];
    total: number;
}

export default ProductFetchResponse;