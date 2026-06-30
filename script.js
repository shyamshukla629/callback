// const b=10;
// {
//     const a=20;
//     console.log("b=",b);
// }
// console.log("a",a);

// function z(){
//     var a=450;
//     function x(){
//         var b=7;
//         function y(){
//             console.log(a,b);
//         }
//     }
// }
// setTimeout(function(){
//     console.log("timer");
// }, 5000);
// function x(y){
//     console.log("x");
//     y();

// } x(function y(){
//     console.log("y");
// })

// 1 to 100 even number / odd number

// for(i=0;i<=100;i++)
//     if(i%2==0){
//         console.log("even number",i);
//     }

// for (count=2;count<=100;count++)
//     if(count%2!=0){
//         console.log("Odd Number",count);
//     }

// set timeout 
// setTimeout(function(x){
//      console.log("hello");
//  }, 5000);
//  y();
//  function y(x){
//      console.log("world");
//     }

//  set timeout function
// function x(){
//     for (var i=1;i<=5;i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             }, 3000);
//         }close(i);
//     }console.log("namaste aditya");
// }x();



// scope chain 
// function a(){
//     var b=10;
//     c();
//     function c(){
//         console.log(b);
//     }
// } a();

// defined and undefined 
// var a;
// console.log(a);     //Undefined
// a=10;
// console.log(a);       //10
// a="hello world";
// console.log(a);    //Hello world


// function 
// var x=1;
// a();
// b();
// console.log(x);
// function a(){
//     var x=10;
//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x);
// }

// check number is even or odd by using function
// function checkNum(num){
//     if(num%2===0){
//         return "Even";
//     }else {
//         return "Odd";
//     }
// } 

// console.log(checkNum(15));
// console.log(checkNum(16));


// calculating square /cube
// function square(num){
//     return num*num;
// }
// console.log(square(5));

// function cube(num){
//     return num*num*num;
// }
// console.log(cube(10));


// operator 
// function ad(){
//     let a=20;b=10;
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
//     console.log(a/b);
//     console.log(a%b);
// }
// ad();


// Array method
// concat  array is used to combine  array 
// let a=[1,2,3,4,5,6];
// let b=[7,8];
// console.log(a.concat(b));


// join an array 
// let arr=["JavaScript", "Is" ,"Awesome"];
// console.log(arr.join(" "));

// toString()  
// let arr=[1,2,3,4,5];
// console.log(arr.toString());



// to find the area, circumference and diamerter of circle
// const radius=[3,1,2,4];
// const area=function(radius){
//     return Math.PI*radius*radius;
// };
// const circumference=function(radius){
//     return 2*Math.PI*radius;
// };
// const diameter=function(radius){
//     return 2*radius;
// };
// const calculate=function(radius,logic){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// };
// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));

// print 1 to 5
// let a=0;
// for(let i=1;i<=5;i++){
//     console.log("My name is Aditya Shukla", ++a);
// }

// Sum of number from 1 to 5
// let sum =0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
// // console.log("Sum of Number=",sum);
// }
// console.log("Sum of Number=",sum);

// while loop
// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

// do while loop
// let i=1;
// do{
//     console.log("Aditya Shukla");
//     i++;
// }while(i<10);


// for of loop
// let str="ADITYASHUKLA";
// let size=0;
// for(let i of str){
//     console.log("i=",i);
// size++;
// } 
// console.log("string size", size);

// for in loop
// let student={
//     name:"Aditya Shulkla",
//     age:24,
//     cgpa:7.5,
// };
// for (let key in student){
//     console.log("key",key,"value", student[key]);
// }

// print number from 0 to 100;
// for(let count=0;count<=100;count++){
//     console.log("Number", count)
// }

// print number from 0 t 100 is odd or even 
// for(let num=0;num<=100;num++){
//     if(num%2===0){
//         console.log("Even number",num);
//     }else{
//         console.log("Odd number",num);
//     }
// }

// // guessing number Game 
// let gameNum=25;
// let userNum=prompt("Guess the game number");
// while(userNum!=gameNum){
//     userNum= prompt("you entered the wrong number . Guess again");
// }
// console.log("Congratulation , You entered the right number.");

// function arrow 
// const printHello=(a,b)=>{
//     console.log(a*b);
// }

 
//  practice queston counting vowels by using function 
// function countVowels(str){
//     let count=0;
//     for(const char of str ){
//         if(char==="a"|| char==="e"|| char==="i" || char==="o" || char==="u")
//         {
//             count++;
//         }    
//     }
//     console.log(count);
// }

// perform same task by using arrow function 
// const countVow = (str) => {
//     let count=0;
//     for(const char of str ){
//         if(char==="a"|| char==="e"|| char==="i" || char==="o" || char==="u")
//         {
//             count++;
//         }    
//     }
//     return count;
// }

// const createUser = (name, age) => ({
//     name: name,
//     age: age
// });

// console.log(createUser("Alice", 25));

// sqaure of the nymber by using for each loop 

// let numb =[2,3,4,5,6,19,48,64];
// numb.forEach((num) =>{
//     console.log(num*num);
// });
// another method for calculating sqaure
//  let calcSquare=(num)=>{
//     console.log(num*num);
//  }
//  numb.forEach(calcSquare);


// map array method
//  let numb =[54,67,34];
//  let newArr = numb.map((val) =>{
//     return val*2;

//  });
//  console.log(newArr);

// let nums=[54,76,89];
// let newArr=nums=nums.map((val)=>{
//     return val*val/2*2;
// });
// console.log(newArr);

// reduce array method 
// let arr=[5,7,9,2,5];
// const output=arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// console.log(output);

// filter array method 
// let arr=[1,3,4,2,5,6,7,8,9,10];
// let evenArr=arr.filter((val) =>{
//     return val%2==0;
// });
// console.log(evenArr);

// print number grater than 90 in an array 
// let marks=[97,64,32,49,9,96,85]
// let toppers= marks.filter((val) =>{
//     return val>90;
// });
// console.log(toppers);

// print an array from 1 to n number 
// let n= prompt("enter a number :");
// let arr=[];
// for (let i=1;i<=n;i++){
//     arr[i-1]=i;
// } console.log(arr);

// // using reduce function print the sum of 1 to n 
// let sum=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// to print the factorial from 1 t n
// // console.log(sum);
// console.log("sum=",sum);
// let factorial= arr.reduce((res,curr)=>{
//     return res*curr;
// });
// console.log("factorial=", factorial);


// printing full name by using prompt function 
// let fullname=prompt("Enter full name");
// let userName=("@"+fullname+fullname.length);
// console.log(userName);

// let name1="Aditya";
// name2="Shukla";
// fullName=name1+name2;
// console.log(fullName);

// adding array function number 
// const arr=[45,54,67,567,87]
// console.log(arr);
// console.log(arr.length);
// let sum=0;
// for(let i=0;i<arr.length;i++){
// sum+=arr[i];
// }
// console.log(sum);

// set timeout function 
// function x(){
//     var i=5;
//     setTimeout(function(){
//         console.log(i);
//     }, 4000);
//     console.log("Aditya Shukla");
// } x();
// //  or 
// setTimeout(() =>{
//     console.log("set timeout / prints after four seconds");
// },6000);

// const radius=[3,1,2,4];

// const area= function(radius){
//     return Math.PI*radius*radius;
// };
// const circumference=function (radius){
//     return 2*Math.PI*radius;
// }
// const diameter =function(radius){
//     return 2*radius;
// };
// const calculate= function(radius,logic){
//     const output=[];
//     for (let i=0; i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// };
// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));
// map function  
// const arr=[1,3,5,4,2,6];
// const output=arr.map((x)=>x.toString(2));
// console.log(output);

// const arr =[5,3,4,2,7,6];
// const output =arr.filter((x)=>x>4);
// const output1=arr.filter((x)=>x%2==0);
// console.log(output);
// console.log(output1);

// // reduce array method
// const outpur=arr.reduce((acc,curr)=>{
//     return acc+curr;
// });
// console.log(outpur);

// setTimeout((x)=>{
//     console.log("set timeout function");
// },5000);
// let  x=10;
// y=24;
// z=x+y;
// console.log(z);
// let promise=new Promise((resolve,reject)=>{
//     resolve("promise resolved");
// });
//  for each function 
// const student =["Aditya","Amit","Rohit","Ramesh","suresh"];
// student.forEach((student)=>{
//     console.log("Welcome",student);
// });