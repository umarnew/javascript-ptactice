function removeDuplicate(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (resultArr.indexOf(arr[i]) === -1) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}

testArr1 = removeDuplicate([
  "samuel",
  "samuel",
  "MABELLE",
  "letitia",
  "meridith",
]);

console.warn(testArr1);
