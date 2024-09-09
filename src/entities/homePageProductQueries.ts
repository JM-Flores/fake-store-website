import { ProductQuery } from "../store/productQueryStore";

interface HomepageProductQuery {
    title: string;
    query: ProductQuery;
}

const homePageProductQueries: HomepageProductQuery[] = [
    {
        title: 'Shop All Products',
        query: {}
    }
]

export default homePageProductQueries;