import { ProductQuery } from "../store/productQueryStore";

interface HomepageProductQuery {
    title: string;
    query: ProductQuery;
}

const homePageProductQueries: HomepageProductQuery[] = [
    {
        title: 'Shop All Products',
        query: {}
    },
    {
        title: 'Shop Smartphones',
        query: {
            category: 'smartphones'
        }
    },
    {
        title: 'Shop Furnitures',
        query: {
            category: 'furniture'
        }
    },
]

export default homePageProductQueries;