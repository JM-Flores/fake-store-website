import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { CartDetail } from "../entities/CartDetails";
import calculateDiscountPrice from "../services/calculateDiscountedPrice";
import formatPrice from "../services/formatPrice";

const CheckoutItem = ({ item }: { item: CartDetail }) => {
  return (
    <HStack gap={5} marginLeft={5}>
      <Image src={item.product.images[0]} boxSize={20} objectFit={"contain"} />
      <Text w="180px" noOfLines={2}>
        {item.product.title}
      </Text>
      <VStack w="110px">
        <Text fontSize={"xl"}>
          {formatPrice(
            calculateDiscountPrice(
              item.product.price,
              item.product.discountPercentage
            )
          )}
        </Text>
        <HStack>
          <Text
            fontSize={"sm"}
            textDecoration={"line-through"}
            color={"gray.500"}
          >
            {formatPrice(item.product.price)}
          </Text>
          <Text fontSize={"sm"}>-{item.product.discountPercentage}%</Text>
        </HStack>
      </VStack>
      <Text>{item.quantity}</Text>
      <Text fontSize={"xl"}>
        {formatPrice(
          calculateDiscountPrice(
            item.product.price,
            item.product.discountPercentage
          ) * item.quantity
        )}
      </Text>
    </HStack>
  );
};

export default CheckoutItem;
