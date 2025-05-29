import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meals";
import MealsList from "../components/MealsList/MealsList";

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

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
