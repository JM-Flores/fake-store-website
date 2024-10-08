import {
  Box,
  HStack,
  Image,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import CartDetails from "../entities/CartDetails";
import calculateDiscountPrice from "../services/calculateDiscountedPrice";
import formatPrice from "../services/formatPrice";
import getCartTotalPrice from "../services/getCartTotalPrice";

interface Props {
  cartDetails: CartDetails;
  error?: Error | null;
  isLoading?: boolean;
}

const CheckoutList = ({ cartDetails, error, isLoading }: Props) => {
  if (isLoading) return <Spinner />;

  return (
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
            <Th></Th>
            <Th>Unit Price</Th>
            <Th>Quantity</Th>
            <Th>
              <Text textAlign={"right"}>Total Price</Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartDetails.map((item) =>
            item.selected ? (
              <Tr key={item.product.id}>
                <Td>
                  <Image
                    src={item.product.images[0]}
                    boxSize={20}
                    objectFit={"contain"}
                  />
                </Td>
                <Td>
                  <Text noOfLines={2} textAlign={"left"}>
                    {item.product.title}
                  </Text>
                </Td>
                <Td>
                  <VStack w="110px" marginX={"auto"}>
                    <Text fontSize={"xl"}>
                      {formatPrice(
                        calculateDiscountPrice(
                          item.product.price,
                          item.product.discountPercentage
                        )
                      )}
                    </Text>
                    <HStack>
                      <Text
                        fontSize={"sm"}
                        textDecoration={"line-through"}
                        color={"gray.500"}
                      >
                        {formatPrice(item.product.price)}
                      </Text>
                      <Text fontSize={"sm"}>
                        -{item.product.discountPercentage}%
                      </Text>
                    </HStack>
                  </VStack>
                </Td>
                <Td>
                  <Text>{item.quantity}</Text>
                </Td>
                <Td>
                  <Text fontSize={"xl"} textAlign={"right"}>
                    {formatPrice(
                      calculateDiscountPrice(
                        item.product.price,
                        item.product.discountPercentage
                      ) * item.quantity
                    )}
                  </Text>
                </Td>
              </Tr>
            ) : null
          )}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
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
                {!error &&
                  (false ? (
                    <Spinner />
                  ) : (
                    formatPrice(getCartTotalPrice(cartDetails))
                  ))}
              </Text>
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default CheckoutList;
