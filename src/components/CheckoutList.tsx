import {
  Box,
  Heading,
  HStack,
  Image,
  Spinner,
  Stack,
  StackDivider,
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
  return (
    <Stack divider={<StackDivider borderColor="gray.200" />}>
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
              <Th>Total Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartDetails.map((item) =>
              item.selected ? (
                <Tr>
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
                    <Text fontSize={"xl"}>
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
              <Th>Total</Th>
              <Th>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
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
    </Stack>
  );
};

export default CheckoutList;
