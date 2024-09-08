import { Button, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import Product from "../entities/Product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card
      borderRadius={5}
      overflow={"hidden"}
      boxShadow="none" // No shadow by default
      _hover={{
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Image
        height={200}
        width={"100%"}
        objectFit={"contain"}
        src={product.images[0]}
      />
      <CardBody>
        <Heading fontSize={"lg"} fontWeight={"md"}>
          {product.title}
        </Heading>
        <Text fontSize={"2xl"}>${product.price}</Text>
        <Button
          background={"yellow.300"}
          fontSize={12}
          height={"auto"}
          padding={2}
        >
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
