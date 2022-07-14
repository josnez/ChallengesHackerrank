function findMedian(arr) {
  // Write your code here
  arr.sort((a, b) => {
    return a-b;
  });
  const median = arr[Math.floor(arr.length/2)];
  return median;
}