//Question1//
let array=[[],[],[]];
//Question2//
let arrayMulti=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
//Question3//
for(let i=1;i<=10;i++){
    document.write('<br>'+i+'<br>')
};
//Question4//
let tableNum=+prompt('Enter number to print its table:')
let tableLength=+prompt('Enter table length')
for(let i=1;i<=tableLength;i++){
    document.write(`<br>${i} x ${tableNum} = ${i*tableNum}`)
};
//Question5//
let fruits = ['apple', 'banana', 'mango', 'orange','strawberry'];
for (fruit of fruits){
    document.write('<br>'+fruit);
};
//Question6//
let counting=[];
for(let i=1;i<=15;i++){
    
    counting.push(i) ;
    
};
document.write(`<br>Counting: ${counting}`);
reverseCounting=[];
for(let i=10;i>0;i--){
    
    reverseCounting.push(i) ;
};
document.write(`<br>Reverse Counting: ${reverseCounting}`);
even=[];
odd=[];
for(let i=0;i<=20;i++){

    if(i%2==0){
        even.push(i);
    }  
    else{
        odd.push(i);
    } 
};
document.write(`<br>Even: ${even}`);

document.write(`<br>Odd: ${odd}`);
series=[];
for(i=1;i<=10;i++){
    series.push(i*2);
}
document.write('<br>Series: '+series.join('K, '))
//Question7//
A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
searchItem=prompt('Enter item to search in Bakery').toLowerCase();
for(i=A.length-1;i>=0;i--){
    if(A.includes(searchItem,i)){
        document.write(`<br>${searchItem} is available at index ${i} of our Bakery`)
    }
    else{document.write('<br>Item is not available')
break;}
}

//Question8//
Ab = [24, 53, 78, 91, 12,101,70]
document.write(`<br>Array Items: ${Ab}`)
for(let i=0;i<Ab.length-1;i++){
    for(let j=1;j<Ab.length;j++){
        if(Ab[i]<Ab[j]){
            i=j
        }
    }document.write(`The largest number is: ${Ab[i]}`)
    
}

//Question9//
Ac = [24, 53, 78, 91, 12,25,11,7,6,5,444,1]
document.write(`<br>Array Items: ${Ac}`)
for(let i=0;i<Ac.length-1;i++){
    for(let j=i+1;j<Ac.length;j++){
        if(Ac[i]>Ac[j]){
            i=j
        }
    }document.write(`<br>The smallest number is: ${Ac[i]}`)
    
}
//Question10//
multiple=[];
for(let i=1;i<=100;i++){
    if(i%5==0){
        multiple.push(i);
    }
}
document.write('<br>'+multiple);
