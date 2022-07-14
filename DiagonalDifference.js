function diagonalDifference(arr) {
  // Write your code here
  const len = arr.length;
  let sum = 0, i;
  for (i=0; i<len; i++) {
    sum += arr[i][i];
  }
  for (i=0; i<len; i++) {
    sum -= arr[i][len-1-i];
  }
  if (sum < 0) {
    sum *= -1;
  }
  return sum;
}