let numone = 3
let numtwo = 3
console.log(numone == numtwo)

let js = 'Javascript'
let py = 'Python'
console.log(js==py)

let str = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
console.log(str)
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten = '10'
console.log((typeof ten)) //is string
console.log(Number(ten)==10)

console.log(Math.ceil(parseFloat(9.8))==10)
console.log(str.includes('is'))

const strS = "JavaScript";
const randomIndex = Math.floor(Math.random() * strS.length);
const randomChar = strS.charAt(randomIndex);

console.log(`Random character at index ${randomIndex}: ${randomChar}`);

// 
const randomNumber = Math.floor(Math.random() * 101); // Generates a random number between 0 and 100 (inclusive)
console.log(randomNumber);

