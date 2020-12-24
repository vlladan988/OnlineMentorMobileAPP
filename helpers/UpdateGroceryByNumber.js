/* eslint-disable indent */
import { countProteins } from './CountProteins';
import { countCarbs } from './CountCarbs';
import { countFats } from './CountFats';
import { countCalories } from './CountCalories';

export const updateGroceryByNumber = (renderData, grocery, number) =>
  renderData.map(
    item =>
      item.id == grocery.id
        ? {
            ...item,
            unit_type: number,
            proteins: countProteins(
              item,
              number,
              grocery.default_proteins
            ).toFixed(),
            carbons: countCarbs(
              item,
              number,
              grocery.default_carbons
            ).toFixed(),
            fats: countFats(item, number, grocery.default_fats).toFixed(),
            calories: countCalories(
              countProteins(item, number, grocery.default_proteins),
              countCarbs(item, number, grocery.default_carbons),
              countFats(item, number, grocery.default_fats)
            ).toFixed()
          }
        : item
  );
