import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import useProductQueryStore from "../store/productQueryStore";

const CategoryList = () => {
  const { data: categories, error, isLoading } = useCategories();

  const setCategory = useProductQueryStore((s) => s.setCategory);

  if (error) throw error;
  if (isLoading) return <Spinner />;
  return (
    <List paddingLeft={5}>
      {categories?.map((category) => (
        <ListItem key={category.slug}>
          <Button variant={"link"} onClick={() => setCategory(category.slug)}>
            {category.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
