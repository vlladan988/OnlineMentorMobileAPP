export const searchFilterListByName = (list, letter) =>
  list.filter(
    item => item.name.toLowerCase().indexOf(letter.toLowerCase()) !== -1
  );
