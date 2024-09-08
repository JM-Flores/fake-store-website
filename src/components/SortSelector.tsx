import { Select, VStack } from "@chakra-ui/react";
import sortOptions from "../entities/SortOptions";
import useProductQueryStore from "../store/productQueryStore";

const SortSelector = () => {
  const setSortBy = useProductQueryStore((s) => s.setSortBy);
  const setSortOrder = useProductQueryStore((s) => s.setSortOrder);

  return (
    <VStack paddingLeft={3}>
      <Select
        defaultValue={sortOptions[0][0]}
        onChange={(event) => setSortBy(event.target.value)}
      >
        {sortOptions.map((option) => (
          <option value={option[0]}>{option[1]}</option>
        ))}
      </Select>
      <Select
        defaultValue={"desc"}
        onChange={(event) => setSortOrder(event.target.value as "asc" | "desc")}
      >
        <option value={"desc"}>Descending</option>
        <option value={"asc"}>Ascending</option>
      </Select>
    </VStack>
  );
};

export default SortSelector;
