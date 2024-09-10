import {
  Box,
  Checkbox,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import useCartStore from "../store/cartStore";
import CartItem from "./CartItem";

const CartList = () => {
  const cart = useCartStore((s) => s.cartItems);

  return (
    <Stack divider={<StackDivider borderColor="gray.200" />}>
      <HStack>
        <Checkbox />
        <Text>Select all</Text>
        <Checkbox />
        <Text>Delete all</Text>
      </HStack>
      {cart.map((item) => (
        <CartItem item={item} key={item.productId} />
      ))}
    </Stack>
  );
};

export default CartList;
