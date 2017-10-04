var torn_clothes = [
  "knit swe/ater",
  "tu/be socks",
  "blue je/ans",
  "whit/e blouse"
];

/* YOUR CODE HERE */
function mend(clothing_item){
    var mended_clothing_item = torn_clothes.replace('/', '');
    return mended_clothing_item;
}

function mend("knit swe/ater");

/* PRINT RESULT */
console.log("--> Finished running mend.js");
