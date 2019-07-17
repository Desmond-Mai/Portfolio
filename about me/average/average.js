// Ask the user for a number

var num1 = prompt("Enter a number")

// Convert number type

num1 = Number(num1)

//Ask for second number

 var num2 = prompt("enter your second number")

//Convert second number
num2 = Number(num2)
// Use a function to calculate the the average of the two numbers
function average(num1,num2){
//console.log the average of the two numbers
var avg = (num1 + num2) / 2
console.log(avg)
//prompt("the average of the two numbers" + numAvg);
}

average(num1,num2)