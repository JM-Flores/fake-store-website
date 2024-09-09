import {
  Box,
  Grid,
  Heading,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { inherits } from "util";

const ProductDetailPage = () => {
  const { id: productId } = useParams();

  const { data, error, isLoading } = useProduct(parseInt(productId!));

  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <Box
      background={"gray.200"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Grid background={"white"} width={"1000px"} templateColumns={"2fr 3fr"}>
        <VStack>
          <Image src={data?.images[0]} />
        </VStack>
        <VStack>
          <Heading width={"100%"} textAlign={"left"} fontWeight={"md"}>
            {data?.title}
          </Heading>
          <Text>{data?.description}</Text>
        </VStack>
      </Grid>
    </Box>
  );
};

export default ProductDetailPage;
