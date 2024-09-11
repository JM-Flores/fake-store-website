import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import InvoiceDetail from "../entities/Invoice";
import formatPrice from "../services/formatPrice";

interface Props {
  invoice?: InvoiceDetail;
  isOpen: boolean;
  onClose: () => void;
}

const Invoice = ({ invoice, isOpen, onClose }: Props) => {
  if (!invoice) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxWidth={"80vw"} minWidth={"800px"}>
        <ModalHeader>Invoice</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TableContainer>
            <Table
              variant="simple"
              sx={{
                "th, td": {
                  textAlign: "center", // Centers the text in all columns
                },
              }}
            >
              <Thead>
                <Tr>
                  <Th>Product</Th>
                  <Th>Unit Price</Th>
                  <Th>Quantity</Th>
                  <Th>
                    <Text textAlign={"right"}>Total Price</Text>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {invoice.products.map((item) => (
                  <Tr>
                    <Td>
                      <Text noOfLines={2} textAlign={"left"}>
                        {item.name}
                      </Text>
                    </Td>
                    <Td>
                      <Text>{formatPrice(item.price)}</Text>
                    </Td>
                    <Td>
                      <Text>{item.quantity}</Text>
                    </Td>
                    <Td>
                      <Text textAlign={"right"}>
                        {formatPrice(item.price * item.quantity)}
                      </Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                  <Th>
                    <Box paddingTop={5} paddingBottom={2}>
                      <Text>Total</Text>
                    </Box>
                  </Th>
                  <Th>
                    <Text
                      fontSize={"2xl"}
                      fontWeight={"bold"}
                      textAlign={"right"}
                      paddingTop={1}
                    >
                      {formatPrice(invoice.totalPrice)}
                    </Text>
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Invoice;
