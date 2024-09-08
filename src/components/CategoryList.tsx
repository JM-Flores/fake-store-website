import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import useProductQueryStore from "../store/productQueryStore";

const CategoryList = () => {
  const { data: categories, error, isLoading } = useCategories();
  const selectedCategory = useProductQueryStore((s) => s.productQuery.category);
  const setCategory = useProductQueryStore((s) => s.setCategory);

  if (error) throw error;
  if (isLoading) return <Spinner />;
  return (
    <List paddingLeft={5}>
      <ListItem>
        <Button
          variant={"link"}
          onClick={() => setCategory("")}
          fontWeight={selectedCategory === "" ? "bold" : "normal"}
        >
          All Products
        </Button>
      </ListItem>
      {categories?.map((category) => (
        <ListItem key={category.slug}>
          <Button
            variant={"link"}
            onClick={() => setCategory(category.slug)}
            fontWeight={selectedCategory === category.slug ? "bold" : "normal"}
          >
            {category.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
