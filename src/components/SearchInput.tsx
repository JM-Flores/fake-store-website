import { SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import useUpdateURLQuery from "../hooks/useUpdateURLQuery";
import useProductQueryStore from "../store/productQueryStore";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const storeSearchText = useProductQueryStore(
    (s) => s.productQuery.searchText
  );
  useEffect(() => {
    if (ref.current && !storeSearchText) {
      ref.current.value = "";
    }
  }, [storeSearchText]);

  const { updateSearchParams } = useUpdateURLQuery();
  const updateSearchText = (searchText: string) => {
    updateSearchParams({ searchText: searchText });
  };

  const navigate = useNavigate();

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          navigate("/products");
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
