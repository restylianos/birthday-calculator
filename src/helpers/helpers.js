export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const animalToHumanAge = {
  parrot: (age) => age * 10,
  goldfish: (age) => age * 3,
  dog: (age) => (age > 1 ? age * 5 + 15 : 15),
  cat: (age) => (age > 1 ? (age > 2 ? age * 4 + 15 + 9 : 15 + 9) : 15),
};

export const validateAge = (age) => {
  if (!Number.isInteger(Number(age))) return false;
  return typeof ~~age === 'number' && ~~age > 0 && age < 500 ? true : false;
};
