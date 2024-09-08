import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { data, error, isLoading } = useProducts();

  if (error) return <Text>{error.message}</Text>;

  if (isLoading) return <Spinner />;

  return (
    <Box>
      <SimpleGrid
        columns={{
          base: 2,
          md: 3,
          lg: 5,
        }}
        gap={2}
        padding={5}
      >
        {data?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductGrid;
