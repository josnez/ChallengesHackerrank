function plusMinus(arr) {
  // Write your code here
  let len = arr.length;
  let sumNeg = 0;
  let sumZeros = 0;
  let sumPos = 0;
  arr.forEach(num => {
    if (num < 0) sumNeg++;
    else if (num == 0) sumZeros++;
    else if (num > 0) sumPos++;
    
  });
  sumNeg = sumNeg / len;
  sumZeros /= len;
  sumPos /= len;
  process.stdout.write(String(String(sumPos.toFixed(6)) + "\n" + sumNeg.toFixed(6)) +
                       "\n" + String(sumZeros.toFixed(6)));
}