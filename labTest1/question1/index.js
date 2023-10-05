// Q1
// Negin Heidari, ID: 101369421

// input
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

// lowerCaseWords function:
const lowerCaseWords = (array) => {
  // promise function
  return new Promise((resolve, reject) => {
    if (array.length > 0) {
      // filtering the non-strings
      const filteredArray = array.filter((item) => typeof item === "string");
      // lower case the remaining words
      const lowerCaseArray = filteredArray.map((item) => item.toLowerCase());
      resolve(lowerCaseArray);
    } else {
      reject("Your input is an empty array!");
    }
  });
};

// output
lowerCaseWords(mixedArray)
  .then((result) => console.log(result))
  .catch((error) => console.log("ERROR"+error));
