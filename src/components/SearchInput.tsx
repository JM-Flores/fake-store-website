import { SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import useUpdateURLQuery from "../hooks/useUpdateURLQuery";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const { updateSearchParams } = useUpdateURLQuery();

  const updateSearchText = (searchText: string) => {
    updateSearchParams({ searchText: searchText });
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) updateSearchText(ref.current.value);
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
