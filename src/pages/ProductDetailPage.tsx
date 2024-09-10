import {
  Box,
  Button,
  Divider,
  Grid,
  Heading,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import ProductImageSlide from "../components/ProductImageSlide";
import QuantitySelector from "../components/QuantitySelector";
import Rating from "../components/Rating";
import useProduct from "../hooks/useProduct";
import calculateDiscountPrice from "../services/calculateDiscountedPrice";
import formatPrice from "../services/formatPrice";

const ProductDetailPage = () => {
  const { id: productId } = useParams();

  const { data: product, error, isLoading } = useProduct(parseInt(productId!));

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  if (error || !productId) throw error;
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
        gap={3}
      >
        <VStack>
          <ProductImageSlide images={product?.images || []} />
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
              {formatPrice(
                calculateDiscountPrice(
                  product?.price,
                  product?.discountPercentage
                )
              )}
            </Text>
            <HStack>
              <Text
                fontSize={"sm"}
                textDecoration={"line-through"}
                color={"gray.500"}
              >
                {formatPrice(product?.price)}
              </Text>
              <Text fontSize={"sm"}>-{product?.discountPercentage}%</Text>
            </HStack>
          </Box>
          <Divider />
          <HStack>
            <QuantitySelector
              refValue={quantity}
              onChange={(value) => setQuantity(value)}
            />
            <Text>{product?.stock} left</Text>
          </HStack>
          <HStack>
            <Button
              background={"yellow.400"}
              color={"white"}
              fontWeight={"normal"}
              _hover={{ bg: "yellow.500" }}
              onClick={() =>
                navigate(`/checkout?id=${productId}&quantity=${quantity}`)
              }
            >
              Buy Now
            </Button>
            <AddToCartButton
              background={"orange.400"}
              color={"white"}
              fontWeight={"normal"}
              _hover={{ bg: "orange.500" }}
              item={{ productId: parseInt(productId), quantity: quantity }}
            />
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
