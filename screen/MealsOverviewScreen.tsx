import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Meal from "../models/meals";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }: any) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === categoryId);
    const categoryTitle = category ? category.title : "Category";

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  function renderMealItem(itemData: { item: any }) {
    const item = itemData.item;

    const mealItemProps = new Meal(
      item.id,
      item.categoryIds,
      item.title,
      item.affordability,
      item.complexity,
      item.imageUrl,
      item.duration,
      item.ingredients,
      item.steps,
      item.isGlutenFree,
      item.isVegan,
      item.isVegetarian,
      item.isLactoseFree
    );
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
