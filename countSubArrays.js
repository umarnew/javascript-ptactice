function countSubArrays(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      count++;
      let subArrayCount = countSubArrays(arr[i]);
      count = count + subArrayCount;
    }
  }
  return count;
}

myArray = [[1], [2, 2], [2, 2]];
myArray2 = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [[1], [[2], [3]], [4]],
];

let arrCount = countSubArrays(myArray);
let arrCount2 = countSubArrays(myArray2);

console.warn(arrCount);
console.warn(arrCount2);
