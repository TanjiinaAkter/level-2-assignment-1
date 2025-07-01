//=========================
//  problem - 2
//=========================
const removeDuplicates = (array: number[]): number[] => {
  const newArray: number[] = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};
const givenArr = [1, 2, 2, 3, 4, 4, 5];
const finalResult2 = removeDuplicates(givenArr);
console.log(finalResult2);
