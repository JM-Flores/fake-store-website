import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import useUpdateQueryState from "../hooks/useUpdateQueryState";
import Pagination from "./Pagination";
import { useState } from "react";
import useUpdateURLQuery from "../hooks/useUpdateURLQuery";
import useProductQueryStore from "../store/productQueryStore";

const ProductGrid = () => {
  useUpdateQueryState();

  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useProducts();

  const pageContentLimit = useProductQueryStore((s) => s.productQuery.limit);

  const { updateSearchParams } = useUpdateURLQuery();

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
        {data?.products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </SimpleGrid>
      <Pagination
        currentPage={page}
        totalPages={Math.floor((data?.total || 0) / (pageContentLimit || 1))}
        onPageChange={(newPage) => {
          updateSearchParams({ page: newPage });
          setPage(newPage);
        }}
      />
    </Box>
  );
};

export default ProductGrid;
