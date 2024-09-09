import { Card, CardBody, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import getLinkWithParams from "../services/getLinkWithParams";
import { ProductQuery } from "../store/productQueryStore";

interface Props {
  title: string;
  query: ProductQuery;
}

const ProductQueryCard = ({ title, query }: Props) => {
  return (
    <Card>
      <Link to={getLinkWithParams("/products", query)}>
        <Heading>{title}</Heading>
        <CardBody></CardBody>
      </Link>
    </Card>
  );
};

export default ProductQueryCard;
