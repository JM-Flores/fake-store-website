import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import useProductQueryStore from "../store/productQueryStore";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useProductQueryStore((s) => s.setSearchText);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) setSearchText(ref.current.value);
        }}
      >
        <InputGroup>
          <Input variant="Filled" placeholder="Search Products" ref={ref} />
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
