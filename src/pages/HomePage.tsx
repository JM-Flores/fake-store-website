import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductQueryCard from "../components/ProductQueryCard";
import homePageProductQueries from "../entities/homePageProductQueries";

const HomePage = () => {
  return (
    <Box
      background={"gray.200"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      <SimpleGrid columns={4} background={"white"} padding={5} gap={5}>
        {homePageProductQueries.map((productQuery) => (
          <Box>
            <ProductQueryCard
              title={productQuery.title}
              query={productQuery.query}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;
