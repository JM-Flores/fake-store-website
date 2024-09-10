import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import CartList from "./CartList";
import useCartDetails from "../hooks/useCartDetails";
import getCartTotalPrice from "../services/getCartTotalPrice";
import formatPrice from "../services/formatPrice";

const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cartDetails = useCartDetails();

  return (
    <>
      <IconButton
        aria-label="Cart"
        icon={<FaShoppingCart />}
        variant="solid"
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            <CartList />
          </DrawerBody>

          <DrawerFooter>
            <VStack alignItems={"end"}>
              <HStack alignItems={"baseline"}>
                <Text>Total</Text>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                  {formatPrice(getCartTotalPrice(cartDetails))}
                </Text>
              </HStack>
              <HStack>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Checkout</Button>
              </HStack>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
