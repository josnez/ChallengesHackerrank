const getSum = (arr) => {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[i];
  }
  return sum;
};

function flippingMatrix(matrix) {
  // Write your code here
  let len = matrix.length / 2;
  console.log(matrix[0]);
  let sum = 0,
    tempSum, tempSumRev;
  for (let i = 0; i < len; i++) {
    tempSum = getSum(matrix[i]);
    tempSumRev = getSum(matrix[i].reverse());
    if (tempSum > tempSumRev) {
      sum += tempSum;
    } else {
      sum += tempSum;
    }
  }

}

function flippingMatrix2(matrix) {
  let sum = 0;

  //Divide size by 2 to get quadrant size
  let quadSize = matrix.length / 2;


  //Now for each cell in the upper quadrant, get the max value that could be flipped leto that cell
  //
  //Iterate all rows in quadrant
  for (let r = 0; r < quadSize; r++) {
    //Iterate all columns in quadrant
    for (let c = 0; c < quadSize; c++) {
      //Grab the 4 possible values that could wind up in this location of the upper quadrant
      let p1 = matrix.at(r).at((2 * quadSize) - c - 1);
      let p2 = matrix.at(r).at(c);
      let p3 = matrix.at((2 * quadSize) - r - 1).at(c);
      let p4 = matrix.at((2 * quadSize) - r - 1).at((2 * quadSize) - c - 1);

      //Get the highest value possible in this cell
      sum += Math.max(p1, Math.max(p2, Math.max(p3, p4)));
    }
  }
  return sum;
}

const arr = [
  [1, 2, 5, 6],
  [3, 4, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(flippingMatrix2(arr));