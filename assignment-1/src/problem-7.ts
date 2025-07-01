//=========================
//  problem - 7
//=========================
class Car {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getCarAge() {
    const currentYear = new Date().getFullYear() - this.year;
    return currentYear;
  }
}
const result = new Car("Honda", "CBR", 2018);
console.log(result.getCarAge());
