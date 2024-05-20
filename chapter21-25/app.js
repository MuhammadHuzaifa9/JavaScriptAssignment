//Question1//
fName=prompt('Enter your FirsT Name:');
lName=prompt('Enter your Last Name:');
fullName=`${fName} ${lName}`
prompt(`Greetings: ${fullName}`);
//Question2//
favPhone=prompt('Enter your favourite Phone');
document.write(`My favouritephone is: ${favPhone}<br>Length of string is ${favPhone.length}`)
//Question3//
let country='Pakistani'
index=country.indexOf('n')
document.write(`<br>String: ${country}<br>Index of n: ${index}`)
//Question4//
let strings='Hello World'
document.write(`<br>String: ${strings}<br>Last Index of I: ${strings.lastIndexOf('l')}`);
//Question5//
let word = "Pakistani";
let charAtIndex3 = word.charAt(3);
document.write(`<br>String:${word}<br>The character at 3rd index is: ${charAtIndex3}<br>`);
//Question6//
concatfullName=fName.concat(' ',lName);
document.write(concatfullName);
//Question7//
let city='Hyderabad';
city2=city.replace('Hyder','Islam');
document.write(`<br>Original: ${city}<br>Replaced: ${city2}`);
//Question8//
var message = 'Ali and Sami are best friends. They play cricket and football together.';
document.write('<br>'+message.replace(/and/g,'&'))
//Question9//
let numb='472';
document.write(`<br>Value=${numb}<br>Type=${typeof(numb)}`)
document.write(`<br>Value=${parseInt(numb)}<br>Type=${typeof(parseInt(numb))}`)
//Question10//
let dryFruit=prompt('Enter a dryfruit name:');
document.write(`<br>User Input: ${dryFruit}<br>Upper Case: ${dryFruit.toUpperCase()}`)
//Question11//

function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
let userInput = prompt("Enter something:");
document.write(`<br>User Input: ${userInput}<br>Title Case: ${toTitleCase(userInput)}`);

//Question1//
//Question1//
//Question1//
//Question1//
//Question1//
//Question1//
//Question1//