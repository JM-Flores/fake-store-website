import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchInput = () => {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Search input submitted");
        }}
      >
        <InputGroup>
          <Input variant="Filled" placeholder="Search Products" />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              variant="solid"
              type="submit"
            />
          </InputRightElement>
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
