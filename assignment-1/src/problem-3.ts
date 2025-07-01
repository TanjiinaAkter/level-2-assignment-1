//=========================
//  problem - 3
//=========================
const countWordOccurrences = (param1: string, param2: string): number => {
  const sentence = param1.toLowerCase();
  const singleWord = param2.toLowerCase();
  const words = sentence.split(" ");
  let count = 0;
  for (const word of words) {
    if (word === singleWord) {
      count++;
    }
  }
  return count;
};
const finalResult3 = countWordOccurrences("I love typescript ", "typescript");
console.log(finalResult3);
