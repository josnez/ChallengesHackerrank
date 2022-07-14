function miniMaxSum(arr) {
  // Write your code here
  arr.sort();
  let sum = 0;
  let response = "";
  for(let i = 0; i < 4; i++) {
    sum += arr[i];
  }
  response += sum;
  sum = 0;
  for(let i = 4; i > 0; i--) {
    sum += arr[i];
  }
  response += " " +sum;
  process.stdout.write(response);
}