import { SimpleGrid } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { data } = useProducts();

  return (
    <SimpleGrid columns={5} gap={5} marginTop={5}>
      {data?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
