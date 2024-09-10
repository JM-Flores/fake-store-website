import { Heading, Stack, StackDivider } from "@chakra-ui/react";
import CartDetails from "../entities/CartDetails";
import CheckoutItem from "./CheckoutItem";

const CheckoutList = ({ cartDetails }: { cartDetails: CartDetails }) => {
  return (
    <Stack divider={<StackDivider borderColor="gray.200" />}>
      <Heading>Order Summary</Heading>
      {cartDetails.map((itemDetail) =>
        itemDetail.selected ? (
          <CheckoutItem item={itemDetail} key={itemDetail.product.id} />
        ) : null
      )}
    </Stack>
  );
};

export default CheckoutList;
