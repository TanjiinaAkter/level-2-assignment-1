//=========================
//  problem - 1
//=========================
const sumArray = (input: number[]): number => {
  return input.reduce((acc, total) => acc + total, 0);
};
const arr = [1, 2, 3, 4, 5];
const finalResult = sumArray(arr);
console.log(finalResult);
