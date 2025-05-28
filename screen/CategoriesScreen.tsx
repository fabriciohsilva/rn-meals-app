import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategorieGridTile from "../components/CategoriGridTile";

function CategoriesScreen({ navigation }: any) {
  function renderCategoryItem(itemData: any) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategorieGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
