export const removeItemFromArrayByName = (renderArray, item) =>
  renderArray.filter(arrayItem => arrayItem.name !== item.name);
