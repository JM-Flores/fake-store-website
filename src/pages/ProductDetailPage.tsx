import {
  background,
  Box,
  Button,
  Divider,
  Grid,
  Heading,
  HStack,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spinner,
  Text,
  theme,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { inherits } from "util";
import Rating from "../components/Rating";
import QuantitySelector from "../components/QuantitySelector";
import calculateDiscountPrice from "../services/calculateDiscountedPrice";

const ProductDetailPage = () => {
  const { id: productId } = useParams();

  const { data: product, error, isLoading } = useProduct(parseInt(productId!));

  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <Box
      background={"gray.200"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Grid
        background={"white"}
        width={"1000px"}
        templateColumns={"2fr 3fr"}
        padding={5}
      >
        <VStack>
          <Image src={product?.images[0]} />
        </VStack>
        <VStack display={"flex"} alignItems={"baseline"} gap={4}>
          <Heading
            as={"h1"}
            width={"100%"}
            textAlign={"left"}
            fontWeight={"md"}
          >
            {product?.title}
          </Heading>
          <HStack>
            <Rating rating={product?.rating} size={3}></Rating>
            <Text>{product?.reviews.length} Ratings</Text>
          </HStack>
          <Text>Brand: {product?.brand}</Text>
          <Box>
            <Text fontSize={"3xl"}>
              $
              {calculateDiscountPrice(
                product?.price,
                product?.discountPercentage
              )}
            </Text>
            <HStack>
              <Text
                fontSize={"sm"}
                textDecoration={"line-through"}
                color={"gray.500"}
              >
                ${product?.price}
              </Text>
              <Text fontSize={"sm"}>-{product?.discountPercentage}%</Text>
            </HStack>
          </Box>
          <Divider />
          <HStack>
            <QuantitySelector />
            <Text>{product?.stock} left</Text>
          </HStack>
          <HStack>
            <Button
              background={"yellow.400"}
              color={"white"}
              fontWeight={"normal"}
              _hover={{ bg: "yellow.500" }}
            >
              Buy Now
            </Button>
            <Button
              background={"orange.400"}
              color={"white"}
              fontWeight={"normal"}
              _hover={{ bg: "orange.500" }}
            >
              Add to Cart
            </Button>
          </HStack>
          <Divider />
          <Heading as={"h2"} fontWeight={"md"} fontSize={"xl"}>
            About this Product
          </Heading>
          <Text>{product?.description}</Text>
          <Text color={"gray.500"}>Tags: {product?.tags.join(" | ")}</Text>
        </VStack>
      </Grid>
    </Box>
  );
};

export default ProductDetailPage;
