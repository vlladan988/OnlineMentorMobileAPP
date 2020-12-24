/* eslint-disable indent */
import { countProteins } from './CountProteins';
import { countCarbs } from './CountCarbs';
import { countFats } from './CountFats';
import { countCalories } from './CountCalories';

export const updateGroceryByIncrementDecrement = (
  renderData,
  grocery,
  isIncrement
) =>
  renderData.map(
    item =>
      item.id == grocery.id
        ? {
            ...item,
            unit_type: +item.unit_type + isIncrement,
            proteins: countProteins(
              item,
              +item.unit_type + isIncrement,
              grocery.default_proteins
            ).toFixed(),
            carbons: countCarbs(
              item,
              +item.unit_type + isIncrement,
              grocery.default_carbons
            ).toFixed(),
            fats: countFats(
              item,
              +item.unit_type + isIncrement,
              grocery.default_fats
            ).toFixed(),
            calories: countCalories(
              countProteins(
                item,
                +item.unit_type + isIncrement,
                grocery.default_proteins
              ),
              countCarbs(
                item,
                +item.unit_type + isIncrement,
                grocery.default_carbons
              ),
              countFats(
                item,
                +item.unit_type + isIncrement,
                grocery.default_fats
              )
            ).toFixed()
          }
        : item
  );
