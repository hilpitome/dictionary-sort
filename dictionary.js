
var Dictionary = {              // creating a javascript Dictionary object/hash
34: "thirty-four", 
90: "ninety",
91: "ninety-one",
21: "twenty-one",
61: "sixty-one", 
9: "nine",
2: "two", 
6: "six", 
3: "three",
8: "eight", 
80: "eighty", 
81:"eighty-one",
ninetyNine: 99, 
nineHundred: 900,
};


var KeyArr = [];               
for (key in Dictionary) {
  KeyArr.push(key);
}                              // creating an array of the Dictionary object keys


var sortedKeyArr = KeyArr.sort(function(a,b) {
  if (isNaN(a) || isNaN(b)) {
    return a > b ? 1 : -1;
  }
  return a - b;
});                            // sorting both the alpha and numeric keys in the KeyArr in ascending order

var sortedDictionary = [];

var j = 0;

for (j = 0; j < sortedKeyArr.length; j ++) {
	sortedDictionary.push(sortedKeyArr[j] + " : " + Dictionary[sortedKeyArr[j]]);
}                              // creating a key:value combination in a new array
 
console.log(sortedDictionary)  //logging the output to the browser console