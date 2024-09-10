import { Box, Button, HStack, Spinner, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import CheckoutList from "../components/CheckoutList";
import CartDetails from "../entities/CartDetails";
import useCartDetails from "../hooks/useCartDetails";
import useProduct from "../hooks/useProduct";
import formatPrice from "../services/formatPrice";
import getCartTotalPrice from "../services/getCartTotalPrice";

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const quantity = searchParams.get("quantity");

  let cart: CartDetails = [];
  let isLoading = false;
  let error: string | Error | null = null;

  if (productId && quantity) {
    const {
      data,
      error: productError,
      isLoading: productIsLoading,
    } = useProduct(parseInt(productId));
    error = productError;
    isLoading = productIsLoading;

    if (data)
      cart = [{ product: data, quantity: parseInt(quantity), selected: true }];
  } else {
    const {
      cartDetails,
      error: cartError,
      isLoading: cartIsLoading,
    } = useCartDetails();
    error = cartError;
    isLoading = cartIsLoading;

    cart = cartDetails;
  }

  return (
    <Box
      background={"gray.200"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box background={"white"} width={"1000px"} padding={5}>
        <CheckoutList cartDetails={cart} />
        <HStack alignItems={"baseline"}>
          <Text>Total</Text>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {!error &&
              (false ? <Spinner /> : formatPrice(getCartTotalPrice(cart)))}
          </Text>
        </HStack>
        <Button>Place Order</Button>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
