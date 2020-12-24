export const IsGroceryNameUniqueValidation = (groceryList, payload) =>
  groceryList.some(grocery => grocery.name === payload.name);
