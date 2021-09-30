function union(arr1, arr2) {
  let resultArr = [];

  //for array 1
  for (let i = 0; i < arr1.length; i++) {
    if (resultArr.indexOf(arr1[i]) === -1) {
      resultArr.push(arr1[i]);
    }
  }

  //for array 2
  for (let i = 0; i < arr2.length; i++) {
    if (resultArr.indexOf(arr2[i]) === -1) {
      resultArr.push(arr2[i]);
    }
  }

  return resultArr;
}
function intersection(arr1, arr2) {
  let resultArr = [];

  //   let longArray = arr1;
  //   let shortArray = arr2;

  let longArray = arr1.length > arr2.length ? arr1 : arr2;
  let shortArray = arr1.length < arr2.length ? arr1 : arr2;

  //   console.log(`longArray`, longArray);
  //   console.log(`shortArray`, shortArray);

  for (let i = 0; i < longArray.length; i++) {
    if (
      shortArray.indexOf(longArray[i]) != -1 &&
      resultArr.indexOf(longArray[i]) === -1
    ) {
      //if they are equal
      resultArr.push(longArray[i]);
    }
  }
  return resultArr;
}

function unionIntersection(arr1, arr2) {
  let resultArr = [];
  resultArr.push(union(arr1, arr2));
  resultArr.push(intersection(arr1, arr2));
  return resultArr;
}

testArr1 = unionIntersection([1, 2, 3, 4, 4], [4, 5, 9]);

console.warn(testArr1);
