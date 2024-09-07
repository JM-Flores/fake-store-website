import { Button, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import Product from "../entities/Product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card variant="outline" borderRadius={5} overflow={"hidden"}>
      <Image
        height={200}
        width={"100%"}
        objectFit={"cover"}
        src={product.images[0]}
      />
      <CardBody>
        <Heading fontSize={"lg"}>{product.title}</Heading>
        <Text fontSize={"2xl"}>${product.price}</Text>
        <Button>Add to Cart</Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
