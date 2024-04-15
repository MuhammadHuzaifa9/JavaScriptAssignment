let city=prompt('Enter City Name').toLowerCase();
if(city=='karachi'){
    document.write('Welcome to the City of Lights')
};

//Question2//
let gender = prompt('Enter your gender (male/female):').toLowerCase();

if (gender === 'male') {
    alert('Good Morning Sir.');
} else if (gender === 'female') {
    alert('Good Morning Ma’am.');
}

//Question3//
let signalColor = prompt('Enter the color of the road traffic signal (red/yellow/green):').toLowerCase(); // Convert input to lowercase for case-insensitivity

if (signalColor === 'red') {
    alert('Must Stop');
} else if (signalColor === 'yellow') {
    alert('Ready to move');
} else if (signalColor === 'green') {
    alert('Move now');
}

//Question4//
let remainingFuel = prompt('Enter the remaining fuel in your car (in liters):');

if (remainingFuel < 0.25) {
    alert('Please refill the fuel in your car');
} else {
    alert('You have enough fuel in your car');
}


//Question5//
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}

//Question6//
let marks=+prompt('Marks Obtained in 3 subects')
let totalMarks=+prompt('Total Marks')
let percentage=(marks/totalMarks)*100;
let grade;
if (percentage>=80){
    grade='A-1'
}
if (percentage>=70){
    grade='A'
}
if (percentage>=60){
    grade='B'
}
if (percentage<60){
    grade='F'
}
document.write('<h1>Mark Sheet</h1><br><br><h5>Total Marks: </h5>'+totalMarks+'<br><h5>Obtained Marks: </h5>'+marks+'<br><h5>Percentage: </h5>'+percentage+'<br><h5>Grade: </h5>'+grade+'<br>');
if(grade=='A-1'){
    document.write('<h5>Remkarks: WellDone!</h5>')
}else{
    document.write('<h5>Remkarks: You need to improve!</h5>')
};


//Question7//
let secretNumber = 9
let userGuess = +prompt('Guess the secret number (between 1 and 10):');
if (userGuess === secretNumber) {
    alert('Bingo! Correct answer');
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert('Close enough to the correct answer');
}

//Question8//
let numberdiv = +prompt('Enter a number to check if it is divisible by 3:');
if (numberdiv % 3 === 0) {
    alert(numberdiv + ' is divisible by 3');
} else {
    alert(numberdiv + ' is not divisible by 3');
}


//Question9//
let number = +prompt('Enter a number to check if it is even or odd:');

if (number % 2 === 0) {
    alert(number + ' is even');
} else {
    alert(number + ' is odd');
}


//Question10//
let temperature = parseFloat(prompt('Enter the temperature:'));

if (temperature > 40) {
    alert('It is too hot outside.');
} else if (temperature > 30) {
    alert('The Weather today is Normal.');
} else if (temperature > 20) {
    alert('Today’s Weather is cool.');
} else if (temperature > 10) {
    alert('OMG! Today’s weather is so Cool.');
} else {
    alert('Temperature is below 10 degrees.');
}


//Question11//
let firstNumber = +prompt('Enter the first number:');
let secondNumber = +prompt('Enter the second number:');
let operation = prompt('Enter the operation (+, -, *, /, %):');

let result;

if (operation === '+') {
    result = firstNumber + secondNumber;
    alert('Result: ' + result);
} else if (operation === '-') {
    result = firstNumber - secondNumber;
    alert('Result: ' + result);
} else if (operation === '*') {
    result = firstNumber * secondNumber;
    alert('Result: ' + result);
} else if (operation === '/') {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
        alert('Result: ' + result);
    } else {
        alert('Error: Division by zero');
    }
} else if (operation === '%') {
    result = firstNumber % secondNumber;
    alert('Result: ' + result);
    
}