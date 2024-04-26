//Question1//
let studentName=[];

//Question2//
let studentsName=new Array();
//Question3//
let strings=['apple','banana','oranges'];
//Question4//
let numbers=[1,2,3,4,5];
//Question5//
let booleans=[true,false,true];
//Question6//
let mixedArray=['string',1,true];
//Question7//
let education=['SSC','HSC',"BSC",'BS','BCOM','MS','M.Phil','PhD']
document.write(`Qualifications <br><br> 1)${education[0]}<br>2)${education[1]}<br>3)${education[2]}<br>4)${education[3]}<br>5)${education[4]}<br>6)${education[5]}<br>7)${education[6]}<br>8)${education[7]}`);
//Question8//
let student=['Michael,','John','Tony'];
let marks=[320,230,480]
for (let i=0;i< student.length;i++){
    let score=(marks[i]/500)*100;
    document.write(`<br>Score of ${student[i]} is ${marks[i]}.Percentage: ${score}<br>`);
}
//Question9//
let colorName=['orange','yellow','green'];
document.write(colorName)
colorToAdd=prompt('Color to add in beginning');
colorName.splice(0,0,colorToAdd);
document.write('<br>'+colorName)
colorAddatEnd=prompt('Color to add at end');
colorName.push(colorAddatEnd);
document.write('<br>'+colorName);
twoColor1=prompt('add more colors');
twoColor2=prompt('add more colors');
colorName.splice(0,0,twoColor1,twoColor2);
document.write('<br>'+colorName);
colorName.splice(0,1);
document.write('<br>'+colorName);
colorName.splice(-1,1)
document.write('<br>'+colorName);
indexUser=+prompt('Where do you want to add color');
colorUser=prompt('Color Name')
colorName.splice(indexUser,0,colorUser);
document.write('<br>'+colorName);
deleteUser=+prompt('index from you want to delete color');
deleteNumber=+prompt('how many');
colorName.splice(deleteUser,deleteNumber)
document.write('<br>'+colorName);

//Question10//
let studentScore=[22,43,55,1,9]
document.write('<br>'+studentScore);
studentScore.sort((a,b)=>a-b);
document.write('<br>Sorted: '+studentScore);
//Question11//
let cities=['Karachi','Lahore','Pindi','Islamabad','Jamshoro']
document.write('<br>'+cities);
let selectedCities=cities.slice(1,4);
document.write('<br>'+selectedCities);
//Question12//
var arr = ['This ',' is ', ' my ', ' cat '];
let combString=arr.join('');
document.write('<br>'+combString);
//Question13//
let fifoArray = [];


fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");
document.write(`<br><h1>Devices: </h1><br> ${fifoArray.join(", ")}`)
let firstValue = fifoArray.shift(); 
let secondValue = fifoArray.shift(); 
let thirdValue = fifoArray.shift(); 
document.write(`<br>Out: <br>${firstValue}<br>Out: <br>${secondValue}<br>Out: <br>${thirdValue}<br>`)
//Question14//
let lifoArray = [];


lifoArray.push("Keyboard");
lifoArray.push("Mouse");
lifoArray.push("Printer");
lifoArray.push("Monitor");
document.write(`<br><h1>Devices: </h1><br> ${lifoArray.join(", ")}`)
let firstV = lifoArray.pop(); 
let secondV = lifoArray.pop(); 
let thirdV = lifoArray.pop(); 
document.write(`<br>Out: <br>${firstV}<br>Out: <br>${secondV}<br>Out: <br>${thirdV}<br>`)

//Question15//
let manufacturers=['Apple','Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
let selectMenu='<select id="manufacturer">';
for(let i=0;i<manufacturers.length;i++){
    selectMenu+=`<option value="${manufacturers[i]}">${manufacturers[i]}</option>`
}
selectMenu+='</select>';
document.write('<br>'+selectMenu);