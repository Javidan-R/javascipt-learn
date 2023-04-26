// Callback Function
const fun = number => number**2
function cube(fun, number){
        return fun(number) * number
}
console.log(cube(fun,3)) 

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
    let sum = 0
    arr.forEach(function(element){
        sum += element
    })
    return sum
}
console.log(sumArray(numbers))


let a  = numbers
console.log(a)