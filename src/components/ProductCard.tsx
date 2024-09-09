import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import Product from "../entities/Product";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import formatPrice from "../services/formatPrice";
import DiscountBadge from "./DiscountBadge";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card
      padding={3}
      borderRadius={5}
      overflow={"hidden"}
      boxShadow="none"
      _hover={{
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <Link to={`/products/${product.id}`}>
        <Image
          height={200}
          width={"100%"}
          objectFit={"contain"}
          src={product.thumbnail}
        />
        <CardBody padding={0} paddingTop={3}>
          <Heading fontSize={"lg"} fontWeight={"md"}>
            {product.title}
          </Heading>
          <HStack align={"center"}>
            <Text fontSize={"2xl"}>{formatPrice(product.price)}</Text>
            <Box paddingTop={"1px"}>
              <DiscountBadge discount={product.discountPercentage} />
            </Box>
          </HStack>
          <Rating rating={product.rating} />
          <Button
            background={"yellow.300"}
            fontSize={12}
            height={"auto"}
            padding={2}
            marginTop={2}
          >
            Add to Cart
          </Button>
        </CardBody>
      </Link>
    </Card>
  );
};

export default ProductCard;
