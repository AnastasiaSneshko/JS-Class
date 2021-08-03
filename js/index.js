'use strict'

BONUS_PERCENT = 1.25;

class Worker {
  constructor(firstName, lastName, daysAtWork, oneDaySalary, workBonus){
    if(typeof firstName !== "string"){
      throw new TypeError ("Fisrt name must be string");
    };
    if(firstName.trim() === ""){
      throw new Error ("Fisrt name must be full string");
    };
    
    if(typeof lastName !== "string"){
      throw new TypeError ("Last name must be string");
    };
    if(lastName.trim() === ""){
      throw new Error ("Last name must be full string");
    };

    if(isNaN(daysAtWork) || typeof daysAtWork !== 'number'){
      throw new TypeError ("Days at work must be number");
    };
    if(daysAtWork < 0){
      throw new RangeError("Days at work must be positive number")
    };

    if(isNaN(oneDaySalary) || typeof oneDaySalary !== 'number'){
      throw new TypeError ("One day salary must be number");
    };
    if(oneDaySalary < 0){
      throw new RangeError("One day salary must be positive number")
    };

    this.firstName = firstName;
    this.lastName = lastName;
    this.daysAtWork = daysAtWork;
    this.oneDaySalary = oneDaySalary;
    this.workBonus = workBonus;
  };

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  };

  getSalary() {
    return this.daysAtWork * this.oneDaySalary;
  }

  getBonus() {
    if(this.workBonus){
      return this.daysAtWork * this.oneDaySalary * BONUS_PERCENT;
    }
  }
}

const anna = new Worker("Anna", "Ivanova", 20, 400, true);
const petr = new Worker("Peter", "Sidorov", 10, 250, false);
const ivan = new Worker("Ivan", "Alexeev", 15, 500, true);
