import { Box } from "@chakra-ui/react";

const ProductPage = () => {
  return (
    <Box
      background={"gray.200"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box background={"white"} width={"1000px"}>
        product
      </Box>
    </Box>
  );
};

export default ProductPage;
