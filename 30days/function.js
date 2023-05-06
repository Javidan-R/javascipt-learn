// function hi(){
//     console.log('Welcome Back Mr Javidan')
// }
// hi()

// function square(){
//     let num = 11
//     let sq = num * num
//     console.log('Ededin kvadrati : ', sq)
// }
// square()
// function addTwoNumbers(){
//     let num1 = 122 , 
//         num2 = 244
//     let add = num1 +num2
//     console.log('Iki ededin cemi ', add)
// } addTwoNumbers()
// function printFullName(){
//     let name = "Javidan" , 
//         surname = "Rajabli" , 
//         space =  ' '
//     let fullName = name + space + surname
//     console.log(fullName)
// }
// printFullName()
// Function return value

// function printUserName() {
//     let name = "Name" , 
//         surname = "Surname" , 
//         birthday = "Birthday" , 
//         space = ' '
//     let getUser = name + space + surname + space + birthday
//     return getUser
// }
// console.log(printUserName())
// function addTwoNum() {
//     let num1 = 22 , 
//         num2 = 33
//     let total = num1 + num2
//     return total
// }
// console.log(addTwoNum())

// Function wirh parameter

// function areaOfCircle(r){
//     let area = Math.PI * r * r
//     return area
// }
// console.log(areaOfCircle(2))

// function square2(number){
//     return number * number
// }
// console.log(square2(10))
// function fullName(name , surname){
//     return `${name} ${surname}`
// }
// console.log(fullName('elnur','bagirov'))
// function sumNumber(num1 , num2){
//     return (num1 + num2)
// }
// console.log(sumNumber(10 , 20))

// let numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
// function sumArrayValues(array){
//     let sum  = 0
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum
// }
// console.log(sumArrayValues(numbers))

// function sumArg() {
//     let total = 1
//     for (let i = 1; i < arguments.length; i++) {
//         total *= arguments[i];
//     }
//     return total
// }
// console.log(sumArg(2, 4, 6, 8, 10, 12, 14, 16, 18, 20))
//Anonymous Function
// const anonymousFun = function(name , surname ='Rajabli') {
//     return `Hello ${name} ${surname}`
// }
// console.log(anonymousFun('Javidan'))
// let squareNum = (function(n) {
//     return n * n
// })(19)
// console.log(squareNum)

//Arrow Function
// const sumArrow = (num1, num2) => (num1 + num2)
// console.log(sumArrow(12, 22))
// const userArrow = (name , surname) => `Hello ${name} ${surname}`
// console.log(userArrow('Tayfun' , 'Erbilen'))
// const sumRest = (...numbers)=>{
//     let total = 0
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total
// }
// console.log(sumRest(12, 43, 355, 46))
// const sumRest2 = (...numbers)=>{
//     return numbers
// }
// console.log(sumRest2(12, 43, 355, 46))


// ----------------------------------------------------------------------------------------

// Exercises: Level 1
// Declare a function fullName and it print out your full name.
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(){
    let name = "Javidan" ,
        surname = "Rajabli" , 
        space = ' '
    let getFullName = name + space + surname
    return getFullName
} 
console.log('Tam ad: ' , fullName())

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2){
    return (num1 + num2)
}
console.log('iki ededin cemi: ' , addNumbers(12, 21))
// 
function  areaOfRectangle(length , width){
    let area = length * width
    return area
}
console.log('Erazi: ', areaOfRectangle(6 , 12))
// 
function perimeterOfRectangle(length , width){
    let perimert = 2 * (length + width)
    return perimert
}
console.log('Duzbucaqlinin perimetri ' , perimeterOfRectangle(7 , 14 ))
// 
function volumeOfRectPrism(length , width , height){
    let volume = length * width * height
    return volume
}
console.log('Ucbucagin sahesi ' ,volumeOfRectPrism( 11 , 10 , 9))
// 
function bmiFormula(mass , height){
    let bmi = Math.ceil(mass / ((height **2)))
    if (bmi <= 18.5) {
        console.log('Underweight : ' , bmi)
    } else if(18.6 <bmi < 24.9   ) {
        console.log('Normal weight : ' , bmi) 
    } else if(25 <= bmi <= 29.9){
        console.log('Overweight : ')
    } else if (bmi >= 30){
        console.log('Obese : ' , bmi)
    } 
}
bmiFormula(70 , 1.8)

let weight = +prompt("Cekninizi daxil edin")
let height = +prompt("boyunuzu daxil edin")
function calcBmi(weight , height){
    let bmi  = ( weight / (height **2 )) *100
    return  bmi.toFixed(3)*100
}
let saybmi = calcBmi(weight , height)
if (saybmi <= 18.5) {
    console.log(`sizin BMI indexiniz ${saybmi}-dir ve bu Underweight`)
} else if(saybmi <25){
    console.log(`sizin BMI indexiniz ${saybmi}-dir ve bu Normal weight`)
} else if(saybmi <29.9){
    console.log(`sizin BMI indexiniz ${saybmi}-dir ve bu Overweight`)
}else if(saybmi >30){
    console.log(`sizin BMI indexiniz ${saybmi}-dir ve bu Obese`)
} else{
    console.log('proqramda sazlamalar gedir')
}

// 
function checkSeason(){
    let month = [
        "Yanvar" ,
        "Fevral" ,
        "Mart" ,
        "Aprel" , 
        "May" ,
        "Iyun" ,
        "Iyul" ,
        "Avqust" ,
        "Sentyabr" ,
        "Oktyabr" ,
        "Noyabr" ,
        "Dekabr"
    ]
    let season = [
        "Spring" ,
        "Summer",
        "Autumn" ,
        "Winter" ,
    ]
     function monthIndex(n){
        return month.indexOf(month[n])
    }
    function seasonIndex(x){
        return month.indexOf(season[x])
    }

    if (monthIndex(2) <= month < monthIndex(5)) {
        console.log('Season is ',season[0])
    } else if(monthIndex(5) <= month < monthIndex(8)){
        console.log('Season is ',season[1])
    } else if(monthIndex(8) <= month < monthIndex(11)){
        console.log('Season is ',season[2])
    } else{
        console.log('Season is ',season[3])
    }
}
checkSeason()

// arrow function
const kube=n=>{
    return n**3
}
console.log(kube(3))
const square = x => x**2
console.log(square(5))
// 
const changeUpperCase = arr=>{
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}
// 
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeUpperCase(countries))
//  
const firstName = ['Javidan']
const lastName = ['Rajabli']
const printFullName = (firstName, lastName)=>`${changeUpperCase(firstName)} ${lastName}`

console.log(printFullName(firstName, lastName))
// 
const sum = (...arr1)=>{
   let newArr1 = []
   for (let index = 0; index < arr1.length; index++) {
   newArr1 += arr1[index]
    
   }
   return  newArr1
   
}
console.log(sum('Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'))

// 
const formalMeet = (name, gender) => {
 gender === 'm' ? console.log(`Mr.${name}`) : console.log(`Mr.${name}`)
}
formalMeet('Cavidan' ,'m')
function checkSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Spring"
    } else  if(month >= 6 && month <= 8){
        return "Summer"
    }else  if(month >= 9 && month <= 11){
        return "Autumn"
    }else {
        return "Winter"
    } 
}
checkSeason(11)

function findMax(a, b, c) {
    let max = a;
    if (b > max)  max = b;
    if (c > max)  max = c;
    return max;
  }
  console.log(findMax(212,34,-34))