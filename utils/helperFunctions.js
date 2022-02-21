const colors = require("../data/colors.json");

// 1 - get first ten records as an array of objects
const selectedColors = colors.slice(0, 10);

// 2 - set a new property(key) on each record called isPrimary
// If the color is a primary color (red, blue, or yellow)
// set primary(value) to true otherwise set to false
const setIsPrimary = (selectedColors) => {
  const primaryColors = ["red", "blue", "yellow"];
  selectedColors.forEach((selectedColor) => {
    // cannot use bracket notation here ???
    selectedColor.isPrimary = primaryColors.includes(selectedColor.color);
  });
  return selectedColors;
};

const isPrimary = setIsPrimary(selectedColors);

// 4 - return the number of all records where disposition is closed and isPrimary is true
const countClosedPrimary = (isPrimary) => {
  let count = 0;
  for (const color of isPrimary) {
    if (color.disposition === "closed" && color.isPrimary) {
      count++;
    }
  }
  return count;
};

const closedPrimaryCount = countClosedPrimary(isPrimary);

module.exports = { isPrimary, closedPrimaryCount };
