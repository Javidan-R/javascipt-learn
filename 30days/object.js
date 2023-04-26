const rectangle = {
    lenght: 180,
    width: 78
}
console.log(rectangle)
const user = {
    name: "Javidan",
    surname: "Rajabli",
    age: 26,
    country: "Azerbaijan",
    city: "Baku",
    jobs: "Developer",
    address : {
        street: 'Aide Imamquluyev',
        pobox: 2020,
        city: 'Ganja'
    },
    skills: [
        'HTML',
        'CSS',
        'Bootsrap',
        'JavaScript',
        'PHP',
        'MySQL',
        'Laravel'
    ],
    isMaried: false,
    getFullName: function() {
        return `istifadeci adi: ${this.name} ${this.surname}`
    },
    'phone number': '+994775878588'
}
//values
console.log(user.getFullName())
//keys
console.log(user['jobs'])
console.log(user['phone number'])
let keyName = 'age'
console.log(user[keyName])
// // add new keys
// user.jobs = 'Programmer'
// console.log(user)

// user.skills.push('Meteor')
// user.skills.push('SasS')

// user.getUserInfo = function() {
//     let skillsWithoutLastSkill = this.skills
//       .splice(0, this.skills.length - 1)
//       .join(', ')
//     let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
//     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//     let fullName = this.getFullName()
//     let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//     return statement
//   }
//   console.log(user)
//   console.log(user.getUserInfo())  
  
// const copyPerson = Object.assign({}, user)
// console.log(copyPerson) 
//   const keys = Object.keys(copyPerson)
// console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
// const address = Object.keys(copyPerson.address)
// console.log(address) //['street', 'pobox', 'city']
//   console.log(keys)

for (let [key, val] of       Object.entries(user)) {
    console.log(key, val)
}
const dog ={
    name: "Jack",
    age: 3,
    color: "Black",
    isPredator: false,
    bark : dogWoof = noise=>  `woof ,woof`,
    getDogInfo: function(){
        let dogWeight = 60
        let dogHeight = 45
        return `I have a dog its name is ${this.name} and its age is ${this.age} ,
         color is ${this.color} its voise is ${this.bark()} , 
         its weight ${dogWeight} and its height ${dogHeight}`
       
    },
    breed: "man"
}
console.log(dog.getDogInfo())

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  let newUsers = []

  const skillsresult = Object.fromEntries([
    Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
  ]);
  
console.log(skillsresult);
const pointsResult = Object.fromEntries([
    Object.entries(users).sort((a, b) => a[1].points - b[1].points)[0]
]);
console.log(pointsResult)



const keys = Object.value
s(users)
console.log(keys)
