import { Box, Button, HStack, Spinner, Text } from "@chakra-ui/react";
import useCartDetails from "../hooks/useCartDetails";
import CheckoutList from "../components/CheckoutList";
import formatPrice from "../services/formatPrice";
import getCartTotalPrice from "../services/getCartTotalPrice";

const CheckoutPage = () => {
  const { cartDetails, error, isLoading } = useCartDetails();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Box
      background={"gray.200"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box background={"white"} width={"1000px"} padding={5}>
        <CheckoutList cartDetails={cartDetails} />
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
        <Button>Place Order</Button>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
