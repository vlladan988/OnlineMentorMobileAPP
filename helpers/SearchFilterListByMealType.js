export const searchFilterListByMealType = (list, type) =>
  list.filter(recipe => recipe.recipe_type === type);
