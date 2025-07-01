//=========================
//  problem - 8
//=========================
const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
  return keys.every((key) => key in obj);
};
const person1 = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};
console.log(validateKeys(person1, ["name", "age"]));
