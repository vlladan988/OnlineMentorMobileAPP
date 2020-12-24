import { IsGroceryUnitPerGlassHandfulAndPinch } from './IsGroceryUnitPerGlassHandfulAndPinch';

export const countCarbs = (item, updatedGramValue, defaultCarbsValue) =>
  IsGroceryUnitPerGlassHandfulAndPinch(item)
    ? updatedGramValue * defaultCarbsValue
    : (updatedGramValue * defaultCarbsValue) / 100;
