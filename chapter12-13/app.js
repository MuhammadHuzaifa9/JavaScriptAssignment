//Question1//
let character = prompt('Enter a character (number or letter):');
let charCode = character.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    alert(character + ' is a number');
} else if (charCode >= 65 && charCode <= 90) {
    alert(character + ' is an uppercase letter');
} else if (charCode >= 97 && charCode <= 122) {
    alert(character + ' is a lowercase letter');
} else {
    alert(character + ' is not a number or letter');
}


//Question2//
let num1 = +prompt('Enter the first integer:');
let num2 = +prompt('Enter the second integer:');
if (num1 > num2) {
    alert('The larger integer is: ' + num1);
} else if (num2 > num1) {
    alert('The larger integer is: ' + num2);
} else {
    alert('Both integers are equal: ' + num1);
}


//Question3//
let number = +prompt('Enter a number:');

if (number > 0) {
    alert(number + ' is a positive number');
} else if (number < 0) {
    alert(number + ' is a negative number');
} else {
    alert('The number is zero');
}


//Question4//
let characterr = prompt('Enter a character (single character):').toLowerCase();
if (
    characterr === 'a' ||
    characterr === 'e' ||
    characterr === 'i' ||
    characterr === 'o' ||
    characterr === 'u'
) {
    alert('The character ' + characterr + ' is a vowel');
} else {
    alert('The character ' + characterr + ' is not a vowel');
}


//Question5//

let correctPassword = 'correctPassword';
let enteredPassword = prompt('Enter your password:');
if (!enteredPassword) {
    alert('Please enter your password');
} else if (enteredPassword === correctPassword) {
    alert('Correct! The password you entered matches the original password');
} else {
    alert('Incorrect password');
}


//Question6//
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
};

//Question7//
let time=+prompt('Time in 24 hour format without : :');
if (time>=0 && time<1200){
    alert('Good Morning!')
};
if (time>=1200 && time<1700){
    alert('Good Afternoon!')
}
if (time>=1700 && time<2100){
    alert('Good Evening!')
}
if (time>=2100 && time<2400){
    alert('Good Night!')
}