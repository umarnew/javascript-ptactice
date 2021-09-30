function capitalizeFirstLetter(arr) {
  resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    const str_first_char = arr[i].charAt(0).toUpperCase();
    let remaining_string = arr[i].slice(1);

    result_string = str_first_char + remaining_string;
    resultArray.push(result_string);
  }
  return resultArray;
}

testArr1 = capitalizeFirstLetter(["samuel", "MABELLE", "letitia", "meridith"]);

console.warn(testArr1);
