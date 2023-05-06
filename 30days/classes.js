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