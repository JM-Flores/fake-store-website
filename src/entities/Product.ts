interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    reviews: {}[];
    thumbnail: string;
    images: string[];
    meta: {
        createdAt: string,
        updatedAt: string,
    },
}

export default Product;