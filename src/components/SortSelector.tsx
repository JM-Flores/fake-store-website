import { Select, VStack } from "@chakra-ui/react";
import sortOptions from "../entities/SortOptions";
import useUpdateURLQuery from "../hooks/useUpdateURLQuery";
import useProductQueryStore, { SortOrder } from "../store/productQueryStore";

const SortSelector = () => {
  const selectedSortBy = useProductQueryStore((s) => s.productQuery.sortBy);
  const selectedSortOrder = useProductQueryStore(
    (s) => s.productQuery.sortOrder
  );

  const { updateSearchParams } = useUpdateURLQuery();

  const updateSortBy = (sortBy: string) => {
    updateSearchParams({ sortBy: sortBy });
  };
  const updateSortOrder = (sortOrder: SortOrder) => {
    updateSearchParams({ sortOrder: sortOrder });
  };

  return (
    <VStack paddingLeft={3}>
      <Select
        value={selectedSortBy || sortOptions[0][0]}
        onChange={(event) => updateSortBy(event.target.value)}
      >
        {sortOptions.map((option) => (
          <option value={option[0]} key={option[0]}>
            {option[1]}
          </option>
        ))}
      </Select>
      <Select
        value={selectedSortOrder || "desc"}
        onChange={(event) =>
          updateSortOrder(event.target.value as "asc" | "desc")
        }
      >
        <option value={"desc"}>Descending</option>
        <option value={"asc"}>Ascending</option>
      </Select>
    </VStack>
  );
};

export default SortSelector;
