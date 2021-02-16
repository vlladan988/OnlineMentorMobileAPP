export const IsInMealRecipe = (mealRecipeList, recipe) =>
  mealRecipeList.some(item => item.id === recipe.id);
