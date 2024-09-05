import { Button, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import Product from "../entities/Product";
import getImageUrl from "../services/imageUrl";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  console.log(getImageUrl(product.images[0]));
  return (
    <Card>
      <CardBody>
        <Image
          height={200}
          width={"100%"}
          objectFit={"cover"}
          src={getImageUrl(product.images[0])}
        />
        <Heading fontSize={"lg"}>{product.title}</Heading>
        <Text>${product.price}</Text>
        <Button>Add to Cart</Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
