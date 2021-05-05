export const recipePercentValue = (allValues, groceryValue) => {
  const sumAllValues = allValues.proteins + allValues.carbons + allValues.fats;
  if (sumAllValues === 0 || sumAllValues === null) return 0;
  else return ((groceryValue * 100) / sumAllValues).toFixed();
};
