import {
  Button,
  ButtonProps,
  forwardRef,
  useDisclosure,
} from "@chakra-ui/react";
import { ForwardedRef, useState } from "react";
import useAlertStore from "../store/alertStore";
import CartDetails from "../entities/CartDetails";
import createInvoice from "../services/createInvoice";
import Invoice from "./Invoice";
import InvoiceDetail from "../entities/Invoice";

interface Props extends ButtonProps {
  cart: CartDetails;
}

const PlaceOrderButton = forwardRef(
  ({ cart, ...props }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    const showAlert = useAlertStore((s) => s.showAlert);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [invoiceResult, setInvoiceResult] = useState<
      InvoiceDetail | undefined
    >();

    const handleOnClick = () => {
      const invoice = createInvoice(cart);
      if (invoice) {
        setInvoiceResult(invoice);
        onOpen();
      } else {
        showAlert("error", "Empty order!");
      }
    };

    return (
      <>
        <Button onClick={handleOnClick} {...props}>
          Place Order
        </Button>

        <Invoice isOpen={isOpen} onClose={onClose} invoice={invoiceResult} />
      </>
    );
  }
);

export default PlaceOrderButton;
