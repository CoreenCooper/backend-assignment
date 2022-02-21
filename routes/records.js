var express = require("express");
var router = express.Router();
const { isPrimary, closedPrimaryCount } = require("../utils/helperFunctions");

// const colors = require("../data/colors.json"); // (helperFuntion.js)

// 1 - get first ten records as an array of objects (helperFuntion.js)
// const selectedColors = colors.slice(0, 10);

// 3 - build the id arrray with the ids of all selectedColors
const getIds = isPrimary.map((selectedColor) => selectedColor.id);

// 5 - return array of selectedColors where disposition is open
const openDisposition = isPrimary.filter(
  (color) => color.disposition === "open"
);

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
