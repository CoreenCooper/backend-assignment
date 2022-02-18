var express = require("express");
var router = express.Router();

const colors = require("../data/colors.json");

// 1 - get first ten records as an array of objects
const selectedColors = colors.slice(0, 10);
// console.log(selectedColors);

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

const isPrimary = setIsPrimary(selectedColors)
// console.log(isPrimary);

// const setIsPrimary = (selectedColors) => {
//   const primaryColors = ["red", "blue", "yellow"];
//   selectedColors.forEach((selectedColor) => {
//     // cannot use bracket notation here ???
//     selectedColor.isPrimary = primaryColors.includes(selectedColor.color);
//   });
//   return selectedColors;
// };
// console.log(setIsPrimary(selectedColors));

// 3 - build the id arrray with the ids of all selectedColors
const getIds = isPrimary.map((selectedColor) => selectedColor.id);
// console.log(getIds);

// 4 - return the number of all records where disposition is closed and isPrimary is true
const countClosedPrimary = (isPrimary) => {
  let count = 0;
  for (const color of isPrimary) {
    if (color.disposition === 'closed' && color.isPrimary) {
      count ++;
    }
  }
  return count;
};

const closedPrimaryCount = countClosedPrimary(isPrimary);

// console.log(isPrimary);
// console.log(closedPrimaryCount);


// 5 - return array of selectedColors where disposition is open
const openDisposition = isPrimary.filter((color) => color.disposition === 'open');

// console.log(openDisposition);


/* GET home page. */
router.get("/", function (req, res) {
  const data = {
    previousPage: null,
    nextPage: 2,
    ids: getIds,
    open: openDisposition,
    closedPrimaryCount: closedPrimaryCount,
  };

  res.json(data);
});

module.exports = router;
