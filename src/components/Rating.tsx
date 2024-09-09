import { StarIcon } from "@chakra-ui/icons";
import { Box, Icon } from "@chakra-ui/react";

function Rating({ rating, size }: { rating?: number; size?: number }) {
  const roundedRating = rating ? Math.round(rating) : 0;

  return (
    <Box display="flex" alignItems="center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          as={StarIcon}
          boxSize={size ? size : 5}
          color={star <= Math.round(roundedRating) ? "yellow.400" : "gray.300"}
        />
      ))}
    </Box>
  );
}

export default Rating;
