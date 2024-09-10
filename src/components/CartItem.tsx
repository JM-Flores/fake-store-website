import {
  Box,
  Checkbox,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import useProduct from "../hooks/useProduct";
import type { CartItem } from "../store/cartStore";
import formatPrice from "../services/formatPrice";
import calculateDiscountPrice from "../services/calculateDiscountedPrice";
import QuantitySelector from "./QuantitySelector";

const CartItem = ({ item }: { item: CartItem }) => {
  const { data: product, isLoading } = useProduct(item.productId);

  if (isLoading) return <Spinner />;

  return (
    <HStack gap={5} marginLeft={5}>
      <Checkbox isChecked={item.selected} />
      <Image src={product?.images[0]} boxSize={20} objectFit={"contain"} />
      <Text w="180px" noOfLines={2}>
        {product?.title}
      </Text>
      <VStack w="110px">
        <Text fontSize={"xl"}>
          {formatPrice(
            calculateDiscountPrice(product?.price, product?.discountPercentage)
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
      </VStack>
      <QuantitySelector />
    </HStack>
  );
};

export default CartItem;
