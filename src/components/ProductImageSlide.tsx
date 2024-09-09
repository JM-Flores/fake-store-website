import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Image, VStack } from "@chakra-ui/react";
import { useState } from "react";

const ProductImageSlide = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const maxVisibleImages = 2;

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
              onClick={() => setCurrentImage(src)}
            >
              <Image
                src={src}
                alt={`Image ${index}`}
                boxSize="100px"
                objectFit="cover"
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
