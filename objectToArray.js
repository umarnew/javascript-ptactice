function objectToArray(data) {
  var resultArray = Object.entries(data);
  return resultArray;
}

myData = {
  D: 1,
  B: 2,
  C: 3,
};

myResultArray = objectToArray(myData);
console.warn(myResultArray);
