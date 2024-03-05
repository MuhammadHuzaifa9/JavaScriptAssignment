//Question1//

/*let a=+prompt('Enter first number');
let b=+prompt("enter second number");
let sum=a+b;
document.write('Sum of '+a+' and '+b+' is '+sum);

//Question2//

//Subtraction//
let a=+prompt('Enter first number');
let b=+prompt("enter second number");
let subtract=a-b;
document.write('Subtraction of '+a+' and '+b+' is '+subtract);
//Multiply//
let a=+prompt('Enter first number');
let b=+prompt("enter second number");
let mul=a*b;
document.write('Multiplication of '+a+' and '+b+' is '+mul);
//Divide//
let a=+prompt('Enter first number');
let b=+prompt("enter second number");
let div=a/b;
document.write('Division of '+a+' and '+b+' is '+div);
//Modulus//
let a=+prompt('Enter first number');
let b=+prompt("enter seconf number");
let mod=a%b;
document.write('Mod of '+a+' and '+b+' is '+mod);*/

//Question3//

let a;
document.write('Value after variable declaration is: ' +a );
a=5;
document.write('<br>Inital value is: ' +a );
a++;
document.write('<br>Value after increment is: ' +a );
a=a+7;
document.write('<br>Value after adding 7 is: ' +a );
a--;
document.write('<br>Value after decrement is: ' +a );
a=a%3;
document.write('<br>Remainder of a/3 is: ' +a );

//Question4//

let ticketPrice=600;
document.write('<br>Total cost to buy 5 tickets of a movie is: ' +(ticketPrice*5) );

//Question5//

document.write('<h1>Table of 4</h1>');
let tableOf=4;
document.write('<br>4 x 1 is ' +(tableOf*1) );
document.write('<br>4 x 2 is ' +(tableOf*2) );
document.write('<br>4 x 3 is ' +(tableOf*3) );
document.write('<br>4 x 4 is ' +(tableOf*4) );
document.write('<br>4 x 5 is ' +(tableOf*5) );
document.write('<br>4 x 6 is ' +(tableOf*6) );
document.write('<br>4 x 7 is ' +(tableOf*7) );
document.write('<br>4 x 8 is ' +(tableOf*8) );
document.write('<br>4 x 9 is ' +(tableOf*9) );
document.write('<br>4 x 10 is ' +(tableOf*10) );

//Question6//

document.write('<br><h1>Temperature Conversion</h1>' );
let tempinCelcius=25;
document.write('<br>25oC is ' +((tempinCelcius*(9/5)+32))+'oF.' );
let tempinFarenheit=70;
document.write('<br>70oF is ' +((tempinFarenheit-32)*(5/9))+'oC.' );

//Question7//

let item1=650,item2=100;quantity1=3,quantity2=7,shipCharges=100;

document.write('<h1>Shopping Cart</h1>')
document.write('<br>Price of item 1 is: '+item1 );
document.write('<br>Quantity of item 1 is: '+quantity1 );
document.write('<br>Price of item 2 is: '+item2 );
document.write('<br>Price of item 2 is: '+quantity2 );
document.write('<br>Shipping Charges: '+shipCharges );
document.write('<br>Total cost of your order is: '+((item1*quantity1)+(item2*quantity2)+shipCharges) );

//Question8//

document.write('<h1>Marks Sheet</h1>');
let totalMark=980,obtainedMark=804;
document.write('<br>Total Marks: '+totalMark );
document.write('<br>Obtained Marks: '+obtainedMark );
document.write('<br>Percentage: '+((obtainedMark/totalMark)*100));

//Question9//

document.write('<h1>Currency in PKR</h1>');
let usDollar=10,saudiRiyal=25;
document.write('<br>Total Currency in PKR: '+((usDollar*104.80)+(saudiRiyal*28)) );

//Question10//

document.write('<h1>Useless Arithmetic</h1>');
let someVariable=10;
document.write('<br>Adding 5 in 10 then multiply by 10 then divide by 2: '+((someVariable+5)*10)/2 );

//Question11//

document.write('<h1>Age Calculator</h1>');
let currentYear=2024,birthYear=2002;
document.write('<br>Your age is either: '+(currentYear-birthYear)+' or '+(currentYear-birthYear-1) );

//Question12//

document.write('<h1>The Geometrizer</h1>');
let radius=10;
document.write('<br>Circumference of the Circle is: '+(2*radius*3.142) );
document.write('<br>Area of the Circle is: '+(3.142*(radius*radius)));

//Question13//

document.write('<h1>Lifetime Supply Calculator</h1>');
let snack='Biryani',age=21,estimatedAge=75,perDay=2;
document.write('<br>Favourite Snack: '+snack);
document.write('<br>Current Age: '+age);
document.write('<br>Estimated Lifetime: '+estimatedAge);
document.write('<br>Snack needed per day: '+perDay);
document.write('<br><br>Total Biryani needed to last till age of '+estimatedAge+' is: '+(((estimatedAge-age)*365)*perDay) );