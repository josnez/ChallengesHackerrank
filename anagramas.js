const input1 = ["poke", "pkoe", "okpe", "koep", "poke"];
const input2 = ["anagrama", "cisco", "ocsic", "zisco", "cisco", "bola"];
const input3 = ["aaa", "bbb", "ccc", "ddd", "ccc"];

const anagram = (input) => {
  input.forEach((e) => {
    input.forEach((p) => {
      let aux = comparate(e, p);
      if (aux) {
        aux = input.indexOf(aux);
        input[aux] = false;
      }
    });
  });
  return input.filter((v, i) => input.indexOf(v) === i && v);
};

const comparate = (pal1, pal2) => {
  if (pal1 === pal2) return false;
  const palNew1 = Array.from(pal1).sort().join("");
  const palNew2 = Array.from(pal2).sort().join("");
  if (palNew1.length != palNew2.length) return false;
  else return palNew1 === palNew2 ? pal2 : false;
};

console.log(anagram(input1));
console.log(anagram(input2));
console.log(anagram(input3));