var express = require("express");
var router = express.Router();

const colors = require("../data/colors.json");

/* GET home page. */
router.get("/", function (req, res) {
  
  // 1 - get first ten
  const selectedColors = colors.slice(0, 10);
  // console.log(selectedColors);

  // 1a - set a new property on each record called isPrimary. If the color is red, blue, or yellow
  // is primary should be true, othrwise , false

  // 2 - build the id arrray with the ids of all selectedColors
  // const selectedIds = generateIdArray(selectedColors);

  // 3 - set the isPrimary key to true or false
  // selectedColors = setIsPrimary(selectedColors);

  // 4 - find count, as an integer, of records with disposition:closed and isPrimary:true
  // const closedPrimary = getClosedPrimaryCount(selectedColors);

  // 5 - filter through selectedColors, selected only those with "disposition": "open"
  // selectedColors = selectedColors.filter(colorObj => colorObj.disposition == "open");

  selectedColors = selectedColors.filter((colorObj) => {
    colorObj.disposition === "open";
  });

  const selectedIds = [];
  for(colorObj of selectedColors) {
    selectedIds.push(colorObj.id);
  }

  // const closedPrimary = getClosedPrimaryCount(selectedColors);
  let closedPrimary = 0;

for(let colorObj of selectedColors) {
  if (colorObj.isprimary && colorObj.disposition === 'closed')
    closedPrimary += 1;
}

  // filter through selectedColors, selected only those wirh 'disposition':  'open'

  conseol.log(selectedColors); // should have ten records with the isPrimary

  // set a new property on each record called isPrimary. If the color is red, blue, or yellow
  // is primary should be true, othrwise , false

  const setIsPrimary = (selectedColors) => {
    const primaryColors = ["red", "blue", "yellow"];
    for (const colorObj of selectedColors) {
      if (primaryColors.includes(colorObj.color)) {
        colorObj.isPrimary = true;
      } else {
        colorObj.isPrimary = false;
      }
    }
    return selectedColors;
  };

  let data = {
    previousPage: null,
    nextPage: 2,
    ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    open: [
      { id: 2, color: "yellow", disposition: "open", isPrimary: true },
      { id: 4, color: "brown", disposition: "open", isPrimary: false },
      { id: 6, color: "blue", disposition: "open", isPrimary: true },
      { id: 8, color: "green", disposition: "open", isPrimary: false },
      { id: 10, color: "red", disposition: "open", isPrimary: true },
    ],
    closedPrimaryCount: 1,
  };

  res.json(data);
});

module.exports = router;
