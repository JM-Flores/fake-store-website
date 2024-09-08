import { Grid } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import ProductGrid from "../components/ProductGrid";

const ProductsPage = () => {
  return (
    <Grid templateColumns={"220px 1fr"}>
      <SideBar />
      <ProductGrid />
    </Grid>
  );
};

export default ProductsPage;
