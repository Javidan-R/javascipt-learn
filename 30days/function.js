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
//     let total = 0
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
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

function  areaOfRectangle(length , width){
    let area = length * width
    return area
}
console.log('Erazi: ', areaOfRectangle(6 , 12))

function perimeterOfRectangle(length , width){
    let perimert = 2 * (length + width)
    return perimert
}
console.log('Duzbucaqlinin perimetri ' , perimeterOfRectangle(7 , 14 ))

function volumeOfRectPrism(length , width , height){
    let volume = length * width * height
    return volume
}
console.log('Ucbucagin sahesi ' ,volumeOfRectPrism( 11 , 10 , 9))

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