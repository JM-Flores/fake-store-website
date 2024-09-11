import {
  Button,
  ButtonProps,
  forwardRef,
  useDisclosure,
} from "@chakra-ui/react";
import Invoice from "./Invoice";
import { ForwardedRef } from "react";
import useAlertStore from "../store/alertStore";
import CartDetails from "../entities/CartDetails";
import createInvoice from "../services/createInvoice";

interface Props extends ButtonProps {
  cart: CartDetails;
}

const PlaceOrderButton = forwardRef(
  ({ cart, ...props }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    const showAlert = useAlertStore((s) => s.showAlert);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOnClick = () => {
      const invoice = createInvoice(cart);
      console.log(invoice);
      if (invoice) {
        onOpen();
      } else {
        showAlert("error", "Empty order!");
      }
    };

    return (
      <>
        <Button onClick={handleOnClick}>Place Order</Button>

        <Invoice isOpen={isOpen} onClose={onClose} />
      </>
    );
  }
);

export default PlaceOrderButton;
