import { Select, VStack } from "@chakra-ui/react";
import sortOptions from "../entities/SortOptions";

const SortSelector = () => {
  return (
    <VStack paddingLeft={3}>
      <Select defaultValue={sortOptions[0][0]}>
        {sortOptions.map((option) => (
          <option value={option[0]}>{option[1]}</option>
        ))}
      </Select>
      <Select defaultValue={"desc"}>
        <option value={"desc"}>Descending</option>
        <option value={"asc"}>Ascending</option>
      </Select>
    </VStack>
  );
};

export default SortSelector;
