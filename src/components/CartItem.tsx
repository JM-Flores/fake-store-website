import { DeleteIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CartDetail } from "../entities/CartDetails";
import calculateDiscountPrice from "../services/calculateDiscountedPrice";
import formatPrice from "../services/formatPrice";
import type { CartItem } from "../store/cartStore";
import useCartStore from "../store/cartStore";
import QuantitySelector from "./QuantitySelector";

const CartItem = ({ item }: { item: CartDetail }) => {
  const selectItem = useCartStore((s) => s.changeSelectItem);
  const deleteItem = useCartStore((s) => s.deleteItem);
  const changeQuantity = useCartStore((s) => s.changeQuantity);

  return (
    <HStack gap={5} marginLeft={5}>
      <Checkbox
        isChecked={item.selected}
        onChange={() => selectItem(item.product.id, !item.selected)}
      />
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
      <QuantitySelector
        refValue={item.quantity}
        onChange={(quantity) =>
          changeQuantity({ productId: item.product.id, quantity: quantity })
        }
      />
      <IconButton
        aria-label="Cart"
        icon={<DeleteIcon />}
        colorScheme="red"
        variant="ghost"
        onClick={() => deleteItem(item.product.id)}
      />
    </HStack>
  );
};

export default CartItem;
