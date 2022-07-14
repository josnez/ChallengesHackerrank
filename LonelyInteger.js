function lonelyinteger(a) {
  // Write your code here
  const individualNumbers = [];
  a.sort((a, b) => {
    return a-b;
  });
  let numRep = null, count = 0, i;
  for (i = 0; i < a.length; i++) {
    if(num != numRep) {
      if (count == 1) return numRep;
      numRep = num;
      count = 0;
    }
    count++;
  }
}