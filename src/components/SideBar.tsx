import { Heading, theme, VStack } from "@chakra-ui/react";
import CategoryList from "./CategoryList";
import SortSelector from "./SortSelector";

const SideBar = () => {
  return (
    <VStack
      alignItems={"baseline"}
      padding={5}
      borderRight={`1px solid ${theme.colors.gray[200]}`}
    >
      <Heading fontSize={"md"}>Sort</Heading>
      <SortSelector />
      <Heading fontSize={"md"}>Categories</Heading>
      <CategoryList />
    </VStack>
  );
};

export default SideBar;
