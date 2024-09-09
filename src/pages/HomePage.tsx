import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
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
      <VStack>
        <SimpleGrid columns={3} paddingTop={5} gap={1} width={"1000px"}>
          {homePageProductQueries.map((productQuery) => (
            <Box key={productQuery.title}>
              <ProductQueryCard
                title={productQuery.title}
                query={productQuery.query}
              />
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default HomePage;
