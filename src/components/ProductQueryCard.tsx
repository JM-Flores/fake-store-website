import { Card, CardBody, Heading } from "@chakra-ui/react";
import { ProductQuery } from "../store/productQueryStore";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  query: ProductQuery;
}

const ProductQueryCard = ({ title, query }: Props) => {
  return (
    <Card>
      <Link to="/products">
        <Heading>{title}</Heading>
        <CardBody></CardBody>
      </Link>
    </Card>
  );
};

export default ProductQueryCard;
