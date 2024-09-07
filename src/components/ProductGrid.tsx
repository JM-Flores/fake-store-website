import { SimpleGrid } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { data } = useProducts();

  console.log(data);

  return (
    <SimpleGrid columns={5} gap={2} marginTop={5}>
      {data?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
