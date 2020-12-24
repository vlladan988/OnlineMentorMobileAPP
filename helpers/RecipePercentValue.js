export const recipePercentValue = (allValues, groceryValue) => {
  const sumAllValues = allValues.proteins + allValues.carbons + allValues.fats;
  return ((groceryValue * 100) / sumAllValues).toFixed();
};
