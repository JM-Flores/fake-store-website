import { Box, Grid, Heading } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import ProductGrid from "../components/ProductGrid";
import useProductQueryStore from "../store/productQueryStore";
import useCategories from "../hooks/useCategories";

const ProductsListingPage = () => {
  const categorySlug = useProductQueryStore((s) => s.productQuery.category);
  const { data: categories, error, isLoading } = useCategories();
  const category = categories?.find((c) => c.slug === categorySlug)?.name;

  return (
    <Grid templateColumns={"220px 1fr"}>
      <SideBar />
      <Box>
        {category && (
          <Heading mt={5} ml={5} fontSize={25}>
            {category}
          </Heading>
        )}
        <ProductGrid />
      </Box>
    </Grid>
  );
};

export default ProductsListingPage;
