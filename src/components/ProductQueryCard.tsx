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
    <Link to={getLinkWithParams("/products", query)}>
      <Card
        height={300}
        padding={5}
        borderRadius={0}
        _hover={{
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        <Heading fontSize={"2xl"} marginBottom={3}>
          {title}
        </Heading>
        <CardBody background={"gray.100"}></CardBody>
      </Card>
    </Link>
  );
};

export default ProductQueryCard;
