import { IsGroceryUnitPerGlassHandfulAndPinch } from './IsGroceryUnitPerGlassHandfulAndPinch';

export const countFats = (item, updatedGramValue, defaultFatsValue) =>
  IsGroceryUnitPerGlassHandfulAndPinch(item)
    ? updatedGramValue * defaultFatsValue
    : (updatedGramValue * defaultFatsValue) / 100;
