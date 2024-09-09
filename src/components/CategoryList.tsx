import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import useUpdateURLQuery from "../hooks/useUpdateURLQuery";
import useProductQueryStore from "../store/productQueryStore";

const CategoryList = () => {
  const { data: categories, error, isLoading } = useCategories();
  const selectedCategory = useProductQueryStore((s) => s.productQuery.category);

  const { updateSearchParams } = useUpdateURLQuery();

  const updateCategory = (category: string) => {
    updateSearchParams({ category: category });
  };

  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <List paddingLeft={3}>
      <ListItem>
        <Button
          variant={"link"}
          onClick={() => updateCategory("")}
          fontWeight={!selectedCategory ? "bold" : "normal"}
        >
          All Products
        </Button>
      </ListItem>
      {categories?.map((category) => (
        <ListItem key={category.slug}>
          <Button
            variant={"link"}
            onClick={() => updateCategory(category.slug)}
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
