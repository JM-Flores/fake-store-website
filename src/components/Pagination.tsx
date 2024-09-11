import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { HStack, Button, Text, Box, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const [pages, setPages] = useState<(number | string)[]>([]);

  const maxVisiblePage = 5;

  useEffect(() => {
    const newPages: (number | string)[] = [];

    const startPage =
      currentPage - Math.floor(maxVisiblePage / 2) < 1 ? 1 : currentPage - 2;
    for (let i = 0; i < maxVisiblePage; i++) {
      const page = startPage + i;
      if (page >= 1 && page <= totalPages) {
        newPages.push(page);
      }
    }

    if (typeof newPages[0] === "number" && newPages[0] >= 2) {
      if (newPages[0] >= 3) newPages.unshift("...");
      newPages.unshift(1);
    }

    const lastPage = newPages.at(-1);

    if (typeof lastPage === "number" && lastPage <= totalPages - 1) {
      if (lastPage <= totalPages - 2) newPages.push("...");
      newPages.push(totalPages);
    }

    setPages(newPages);
  }, [currentPage, totalPages, maxVisiblePage]);

  return (
    <HStack spacing={2} py={4} justifyContent="center">
      <IconButton
        aria-label="Previous Page"
        icon={<ChevronLeftIcon />}
        onClick={() => handlePageChange(currentPage - 1)}
        isDisabled={currentPage === 1 || pages.length <= 0}
        variant="outline"
        size="sm"
        colorScheme="gray"
      >
        Previous
      </IconButton>

      {pages.map((page, index) =>
        page === "..." ? (
          <Box key={index} px={2}>
            <Text>...</Text>
          </Box>
        ) : (
          <Button
            key={index}
            onClick={() => handlePageChange(page as number)}
            colorScheme={currentPage === page ? "teal" : "gray"}
            size="sm"
            variant={currentPage === page ? "solid" : "outline"}
          >
            {page}
          </Button>
        )
      )}

      <IconButton
        aria-label="Next Page"
        icon={<ChevronRightIcon />}
        onClick={() => handlePageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages || pages.length <= 0}
        variant="outline"
        size="sm"
        colorScheme="gray"
      >
        Next
      </IconButton>
    </HStack>
  );
};

export default Pagination;
