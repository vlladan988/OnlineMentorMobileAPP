export const sumRecipeGrocery = recipeGrocery => {
  console;
  let proteinSum = [];
  let carbSum = [];
  let fatSum = [];
  let calorieSum = [];
  recipeGrocery.forEach(element2 => {
    proteinSum.push(parseInt(element2.proteins));
    carbSum.push(parseInt(element2.carbons));
    fatSum.push(parseInt(element2.fats));
    calorieSum.push(parseInt(element2.calories));
  });
  return {
    proteins: proteinSum.reduce((a, b) => a + b, 0),
    carbons: carbSum.reduce((a, b) => a + b, 0),
    fats: fatSum.reduce((a, b) => a + b, 0),
    calories: calorieSum.reduce((a, b) => a + b, 0)
  };
};
