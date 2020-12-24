export const IsGroceryUnitPerGlassHandfulAndPinch = item =>
  item.unit === 'Handful' || item.unit === 'Glass' || item.unit === 'Pinch';
