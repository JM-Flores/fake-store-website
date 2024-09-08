import { StarIcon } from "@chakra-ui/icons";
import { Box, Icon } from "@chakra-ui/react";

function Rating({ rating }: { rating: number }) {
  return (
    <Box display="flex" alignItems="center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          as={StarIcon}
          boxSize={5}
          color={star <= Math.round(rating) ? "yellow.400" : "gray.300"}
        />
      ))}
    </Box>
  );
}

export default Rating;
