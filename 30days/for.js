
const names = ['adam', 'proqramlama', 'oxumaq','isteyir']

for (let i = 0; i < names.length; i++) {
    console.log(names[i])   
    
}

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

    // Iterate 0 to 10 using for loop, do the same using while and do while loop
let ten = 10
for (let i = 0; i <= ten; i++) {
    console.log(i)  
}
    //Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = ten; i > 0; i--) {
    console.log(i)   
}
    // Iterate 0 to n using for loop
let n = 100
for (let i = 0; i < n; i++) {
    console.log(i)
}
    // Write a loop that makes the following pattern using console.log():
let hastag = " "
for (let i = 0; i < ten; i++) {
    hastag += "#"
    console.log(hastag)   
}
    // Using loop print the following pattern
for (let i = 0; i <= ten; i++) {
    console.log(`${i} x ${i} = ${i*i} `)
}

    // Using loop print the following pattern
for (let i = 1; i <= ten; i++) {
    console.log(`${i} ${i**2} ${i**3}`)
}
    //Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= n; i++) {
    if (i % 2 ==0 ) {
        console.log(i)
    }   
}
    //Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= n; i++) {
    if (i % 2 == 1 ) {
        console.log(i)
    }   
}
    //Use for loop to iterate from 0 to 100 and print the sum of all numbers.
var sum = 0
for (let i = 1; i <= 100; i++) {
    sum +=i
}
console.log(sum) 
    //Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
    // sum of all evens
let sumEvens = 0
for (let i = 1; i <= 100; i++) {
    if ((i % 2 )== 0) {
        sumEvens +=i
    }    
}
console.log(sumEvens) 
    // sum of all odds.
let sumOdds = 0
for (let i = 1; i <= 100; i++) {
    if ((i % 2 )== 1) {
        sumOdds +=i 
    }    
}
console.log(sumOdds) 
    //Develop a small script which generate array of 5 random numbers
var arr = [];
for (var i=0, t=5; i<t; i++) {
    arr.push(Math.round(Math.random() * t))
}
console.log(arr);
    //Develop a small script which generate array of 5 random numbers and the numbers must be unique
var arr = [];
while(arr.length < 8){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);