function countDuplicate(numbers) {
  // Write your code here
  let count = 0;
  let numRept = [];
  let numCount = [];

  numbers.forEach((number) => {
    if (numRept.includes(number)) {
      if (!numCount.includes(number)) {
        numCount.push(number);
        count++;
      }
    } else {
      numRept.push(number);
    }
  });
  return count;
}




function mergeArrays(a, b) {
  // Write your code here
  const mergeArray = a.concat(b);
  mergeArray.sort((a, b) => {
    return a - b;
  });
  return mergeArray;
}