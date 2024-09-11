import { Box, Button, Heading } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import CheckoutList from "../components/CheckoutList";
import CartDetails from "../entities/CartDetails";
import useCartDetails from "../hooks/useCartDetails";
import useProduct from "../hooks/useProduct";
import createInvoice from "../services/createInvoice";
import PlaceOrderButton from "../components/PlaceOrderButton";

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const quantity = searchParams.get("quantity");

  let cart: CartDetails = [];
  let isLoading = false;
  let error: Error | null = null;

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
      <Box background={"white"} width={"1000px"} paddingY={10} paddingX={10}>
        <Heading marginLeft={1} marginBottom={5}>
          Order Summary
        </Heading>
        <CheckoutList cartDetails={cart} />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box />
          <PlaceOrderButton colorScheme="green" marginRight={5} cart={cart} />
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
