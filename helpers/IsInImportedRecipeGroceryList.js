export const isInImportedRecipeGroceryList = (importedList, grocery) =>
  importedList.some(importedItem => importedItem.name === grocery.name);
