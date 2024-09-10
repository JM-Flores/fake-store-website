import {
  Box,
  Checkbox,
  HStack,
  IconButton,
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
import useCartStore from "../store/cartStore";
import { DeleteIcon } from "@chakra-ui/icons";

const CartItem = ({ item }: { item: CartItem }) => {
  const { data: product, isLoading } = useProduct(item.productId);

  const selectItem = useCartStore((s) => s.changeSelectItem);
  const deleteItem = useCartStore((s) => s.deleteItem);
  const changeQuantity = useCartStore((s) => s.changeQuantity);

  if (isLoading) return <Spinner />;

  return (
    <HStack gap={5} marginLeft={5}>
      <Checkbox
        isChecked={item.selected}
        onChange={() => selectItem(item.productId, !item.selected)}
      />
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
      <QuantitySelector
        refValue={item.quantity}
        onChange={(quantity) =>
          changeQuantity({ productId: item.productId, quantity: quantity })
        }
      />
      <IconButton
        aria-label="Cart"
        icon={<DeleteIcon />}
        colorScheme="red"
        variant="ghost"
        onClick={() => deleteItem(item.productId)}
      />
    </HStack>
  );
};

export default CartItem;
