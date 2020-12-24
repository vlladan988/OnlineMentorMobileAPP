export const removeItemFromArrayById = (renderArray, item) =>
  renderArray.filter(arrayItem => arrayItem.id !== item.id);
