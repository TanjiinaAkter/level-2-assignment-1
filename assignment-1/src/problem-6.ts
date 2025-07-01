//=========================
//  problem - 6
//=========================
interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (
  original: Profile,
  updates: Partial<Profile>
): Profile => {
  //If the original and updates objects have the same key, the value from the updates object will override the original.
  return { ...original, ...updates };
};
const myProfile: Profile = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};
console.log(updateProfile(myProfile, { age: 26 }));
