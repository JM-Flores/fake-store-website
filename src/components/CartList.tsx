import {
  Box,
  Button,
  Checkbox,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import useCartStore from "../store/cartStore";
import CartItem from "./CartItem";
import { useState } from "react";

const CartList = () => {
  const cart = useCartStore((s) => s.cartItems);
  const clearAll = useCartStore((s) => s.clearAll);

  const selectAll = useCartStore((s) => s.changeSelectAll);
  const isAllSelected = useCartStore((s) => s.isAllSelected);

  return (
    <Stack divider={<StackDivider borderColor="gray.200" />}>
      <HStack>
        <Checkbox
          onChange={() => selectAll(!isAllSelected())}
          isChecked={isAllSelected()}
        />
        <Text fontSize={"sm"}>Select all</Text>
        <Button size={"sm"} onClick={() => clearAll()}>
          Delete all
        </Button>
      </HStack>
      {cart.map((item) => (
        <CartItem item={item} key={item.productId} />
      ))}
    </Stack>
  );
};

export default CartList;
