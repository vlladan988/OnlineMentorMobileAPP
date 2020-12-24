import { IsGroceryUnitPerGlassHandfulAndPinch } from './IsGroceryUnitPerGlassHandfulAndPinch';

export const countProteins = (item, updatedGramValue, defaultProteinValue) =>
  IsGroceryUnitPerGlassHandfulAndPinch(item)
    ? updatedGramValue * defaultProteinValue
    : (updatedGramValue * defaultProteinValue) / 100;
