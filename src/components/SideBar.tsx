import { Heading, VStack } from "@chakra-ui/react";
import CategoryList from "./CategoryList";

const SideBar = () => {
  return (
    <VStack alignItems={"baseline"} padding={5}>
      <Heading fontSize={"xl"}>Categories</Heading>
      <CategoryList />
    </VStack>
  );
};

export default SideBar;
