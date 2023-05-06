//  class Person {



//   constructor(firstName, lastName, country = "Azerbaijan", city, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.country = country;
//     this.city = city;
//     this.age = age;
//   }
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person1 = new Person("Name", "Surname", undefined, "Baku", 129);
// const person2 = new Person("Name2", "Surname2", "Turkey", "Baku", 129);
// const person3 = new Person("Name3", "Surname3");

// console.log(person1.getFullName());
// console.log(person2.lastName);
// console.log(person3.lastName);


class Animals {
  constructor (name, age, color, legs, wild , size , gender ,voise){
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.wild = wild;
    this.size = size;
    this.gender = gender;
    this.voise  = voise;   
  }
  wildAnimals() {
    const whatIsWildAnimal =  ` Wild animals is difference other animal's theree is ${wild}  and ${size} `;
    return whatIsWildAnimal;
  }
}

class Dog extends Animals{
  howHowDogs(){
    return  `${this.name} ve  yirticidir ${this.wild} olan it  is voise ${this.voise}`
  }
}
class Cat extends Animals{
  constructor (name, age, color, legs, wild , size , gender ,voise ,isHaveBaby){
    super(name, age, color, legs, wild , size , gender ,voise )
    this.isHaveBaby = isHaveBaby;
  }
  moauv(){
    return `cat is name ${this.name} and is color ${this.color} avn is voise ${this.voise} she have 4 ${this.isHaveBaby} `
  }
}

const myNewDog = new Dog("Alabas", 3 , 'black' , 4 , true , 'big' , 'm', 'howhow')
const myNewCat = new Cat('junior', 2 , 'yellow'  , 4 , false , 'small' , 'w' , 'miaauu' ,'lolo')
console.log(myNewCat.moauv())

// task 2
class Statistics {
  // 
  constructor(number){
    this.number = number;
  }
// 
  count(){    return this.number.length;  }
  sum(){  return this.number.reduce((total, num) => total + num, 0);  }
  min(){    return Math.min(...this.number);  }
  max(){    return Math.max(...this.number)   }
  range(){  return this.max() - this.min();   }
  mean(){   return  this.max() / this.min();   }
  median() {
    const sortedData = this.number.sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
    if(sortedData.length % 2 === 0){
      return (sortedData[mid - 1] + sortedData[mid]) / 2
    }  else{
      return sortedData[mid];
    }   
  }
  mode() {
    const freqMap = new Map();
    for (const num of this.number) {
      freqMap.set(num, freqMap.get(num) + 1 || 1);
    }
    let mode = null;
    let count = 0;
    for (const [num, freq] of freqMap) {
      if (freq > count) {
        mode = num;
        count = freq;
      }
    }
    return { mode, count };
  }
  var() {
    const mean = this.mean();
    const deviations = this.number.map((num) => num - mean);
    const squaredDeviations = deviations.map((dev) => dev ** 2);
    const sumSquaredDeviations = squaredDeviations.reduce(
      (total, num) => total + num,
      0
    );
    return sumSquaredDeviations / (this.count() - 1);
  }

  std() {
    return Math.sqrt(this.var());
  }

  freqDist() {
    const freqMap = new Map();
    for (const num of this.number) {
      freqMap.set(num, freqMap.get(num) + 1 || 1);
    }
    const freqDist = Array.from(freqMap, ([num, freq]) => [freq / this.count() * 100, num]);
    freqDist.sort((a, b) => b[0] - a[0]);
    return freqDist;
  }

  describe() {
    return `
    Count: ${this.count()}
    Sum: ${this.sum()}
    Min: ${this.min()}
    Max: ${this.max()}
    Range: ${this.range()}
    Mean: ${this.mean()}
    Median: ${this.median()}
    Mode: (${this.mode().mode}, ${this.mode().count})
    Variance: ${this.var()}
    Standard Deviation: ${this.std()}
    Frequency Distribution: ${JSON.stringify(this.freqDist())}`;
  }
}

// Example usage
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);


console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]