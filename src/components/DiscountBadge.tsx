import { Badge } from "@chakra-ui/react";

const DiscountBadge = ({ discount }: { discount: number }) => {
  if (!discount) return null;

  return (
    <Badge
      variant={"outline"}
      colorScheme={"yellow"}
      fontSize={"xs"}
      paddingX={2}
      borderRadius={"4px"}
    >
      {discount}% off!
    </Badge>
  );
};

export default DiscountBadge;
