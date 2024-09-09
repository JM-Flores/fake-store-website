import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  border,
  Box,
  Divider,
  HStack,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

const ProductImageSlide = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const maxVisibleImages = 3;

  // Calculate the maximum number of images to show
  const visibleImages = images.slice(
    currentIndex,
    currentIndex + maxVisibleImages
  );
  const showLeftArrow = currentIndex > 0;
  const showRightArrow =
    images.length > maxVisibleImages &&
    currentIndex + maxVisibleImages < images.length;

  const handlePrev = () => {
    if (showLeftArrow) {
      setCurrentIndex((prev) => Math.max(prev - maxVisibleImages, 0));
    }
  };

  const handleNext = () => {
    if (showRightArrow) {
      setCurrentIndex((prev) =>
        Math.min(prev + maxVisibleImages, images.length - maxVisibleImages)
      );
    }
  };

  return (
    <>
      <Image src={currentImage} />
      <Divider />
      <HStack spacing={4} align="center">
        {showLeftArrow && (
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={handlePrev}
            aria-label="Previous"
          />
        )}
        <HStack spacing={2} overflow="hidden" flex={1}>
          {visibleImages.map((src, index) => (
            <Box
              key={index}
              flex="1 0 auto"
              border="1px solid"
              borderColor="gray.200"
              onClick={() => setCurrentImage(src)}
              _hover={{
                borderColor: "gray.600",
                transition: "border-color 0.2s ease-in-out",
              }}
            >
              <Image
                src={src}
                alt={`Image ${index}`}
                boxSize={20}
                objectFit="contain"
              />
            </Box>
          ))}
        </HStack>
        {showRightArrow && (
          <IconButton
            icon={<ChevronRightIcon />}
            onClick={handleNext}
            aria-label="Next"
          />
        )}
      </HStack>
    </>
  );
};

export default ProductImageSlide;
