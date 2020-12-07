export const handleUnitType = unit => {
  if (unit === 'g' || unit === 'ml') {
    return '100';
  } else return '1';
};
