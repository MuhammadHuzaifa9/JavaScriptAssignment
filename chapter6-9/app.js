document.write('<h1>Question1</h1>')
let a=10;
document.write("The value of a is " +a);
document.write('<br> Now the vaue of ++a is '+ ++a);
document.write('<br> Now the vaue of a is '+ a);

document.write('<br> Now the vaue of a++ is '+ a++);
document.write('<br> Now the vaue of a is '+ a);

document.write('<br> Now the vaue of --a is '+ --a);
document.write('<br> Now the vaue of a is '+ a);

document.write('<br> Now the vaue of a-- is '+ a--);
document.write('<br> Now the vaue of a is '+ a);

//Question 2//
document.write('<h1>Question2</h1>')
var b = 2, c = 1;
var result = --b - --c + ++c + c--;

document.write("<br>Value of b is " + b);
document.write('<br>Value of c is ' + c);
document.write('<br>Result is '+ result);

//Question 3//
document.write('<h1>Question3</h1>')
let username=prompt('Enter your Name: ');
document.write('<br>Welcome '+ username);

//Question5//

document.write('<h1>Table</h1>');
let tableOf=+prompt("Enter a Number: ",5);
document.write('<br>'+ tableOf +' x 1 is ' +(tableOf*1) );
document.write('<br>'+ tableOf +' x 2 is ' +(tableOf*2) );
document.write('<br>'+ tableOf +' x 3 is ' +(tableOf*3) );
document.write('<br>'+ tableOf +' x 4 is ' +(tableOf*4) );
document.write('<br>'+ tableOf +' x 5 is ' +(tableOf*5) );
document.write('<br>'+ tableOf +' x 6 is ' +(tableOf*6) );
document.write('<br>'+ tableOf +' x 7 is ' +(tableOf*7) );
document.write('<br>'+ tableOf +' x 8 is ' +(tableOf*8) );
document.write('<br>'+ tableOf +' x 9 is ' +(tableOf*9) );
document.write('<br>'+ tableOf +' x 10 is ' +(tableOf*10) );

//Question 6//
document.write('<h1>Question6</h1>')
let subject1 = prompt('Enter the first subject name:');
let subject2 = prompt('Enter the second subject name:');
let subject3 = prompt('Enter the third subject name:');


const totalMarks = 100;


let obtainedMarks1 = +prompt(`Enter obtained marks for ${subject1}:`);


let obtainedMarks2 = +prompt(`Enter obtained marks for ${subject2}:`);
let obtainedMarks3 = +prompt(`Enter obtained marks for ${subject3}:`);


let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write('<table border="1">');
document.write('<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th>')
document.write('<tr><td>'+subject1+'</td><td>'+totalMarks+'</td><td>'+obtainedMarks1+'</td><td>'+((obtainedMarks1/totalMarks)*100)+'</td>');
document.write('<tr><td>'+subject2+'</td><td>'+totalMarks+'</td><td>'+obtainedMarks2+'</td><td>'+((obtainedMarks2/totalMarks)*100)+'</td>');
document.write('<tr><td>'+subject3+'</td><td>'+totalMarks+'</td><td>'+obtainedMarks3+'</td><td>'+((obtainedMarks3/totalMarks)*100)+'</td>');
document.write('<tr><td>Total</td><td>'+(totalMarks*3)+'</td><td>'+totalObtainedMarks+'</td><td>'+percentage+'</td>');
