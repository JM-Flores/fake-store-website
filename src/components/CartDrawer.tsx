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
  Spinner,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import CartList from "./CartList";
import useCartDetails from "../hooks/useCartDetails";
import getCartTotalPrice from "../services/getCartTotalPrice";
import formatPrice from "../services/formatPrice";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { cartDetails, error, isLoading } = useCartDetails();

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
            {!error && isLoading ? (
              <Spinner />
            ) : (
              <CartList cartDetails={cartDetails} />
            )}
          </DrawerBody>

          <DrawerFooter>
            <VStack alignItems={"end"}>
              <HStack alignItems={"baseline"}>
                <Text>Total</Text>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                  {!error && isLoading ? (
                    <Spinner />
                  ) : (
                    formatPrice(getCartTotalPrice(cartDetails))
                  )}
                </Text>
              </HStack>
              <HStack>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={() => navigate("/checkout")}
                >
                  Checkout
                </Button>
              </HStack>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
