// map function 

// const arr=[52,5,4,8,9,7,];
// const output=arr.map(function binary(x){
//     return x.toString(2);
// });
// console.log(output);
 
// using arrow function
// const output=arr.map((x)=>x.toString(2));
// console.log(output);

// reduce function using arrow method 
// const output=arr.reduce((prev,curr)=>{
//    return prev+curr;
// });
// console.log(output);

// // filter function using arrow method 
// const output=arr.filter((x)=>x%2==0);
// console.log(output);

// const output1=arr.filter((x)=>x>5);
// console.log(output1);

// generator function 
// function* genreateSequence(){
//     yield"A"
//     yield"B";
//     yield"C";
// };
//  const generator=genreateSequence();
//  console.log(generator.next());
//  console.log(generator.next());
//  console.log(generator.next());

// area , circumference , and diameter of a radius
// const radius=[3,1,2,4];
// const calculateArea= function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++) {
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// };
// console.log(calculateArea(radius));

// const calculatCircumference=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//     output.push(2*Math.PI*radius[i]);
//     }
//     return output;
// }
// console.log(calculatCircumference(radius));

// const calculatediameter=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*radius[i]);
//     }
//     return output;
// }
// console.log(calculatediameter(radius));


//  higher order function 
// const radius=[3,1,2,4];
// const area= function(radius){
//     return Math.PI*radius*radius;
// };
// const cicumference=function(radius){
//     return 2*Math.PI*radius;
// };
// const diameter=function (radius){
//     return 2*radius;
// };
// const calculate=function(radius,logic){
//     const output=[];
//     for(let i=0;i<radius.length;i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// };
// console.log(calculate(radius,area));
// console.log(calculate(radius, cicumference));
// console.log(calculate(radius,diameter));

// map function 
// const arr=[2,4,3,5,7];
// function double(x){
//     return x*2;
// } 
// const output=arr.map(double);
// console.log(output);

// function triple(x){
//     return x*3;
// }
// const output1=arr.map(triple);
// console.log(output1);

// function binary(x){
//     return x.toString(2);
// }
// const output2=arr.map(binary);
// console.log(output2);

// // filter method 
// const arr = [5,6,2,7,4,8];
// function isEven(x){
//       return x%2==0;
// }
// const output =arr.filter(isEven);
// console.log(output);  

// function isGreater(x){
//     return x>4;
// }
// const output =arr.filter(isGreater);
// console.log(output);

// reduce method 
//   console.log(output);
//     function  findsum(arr){
//         let sum =0;
//         for(i=0;i<arr.length;i++){
//             sum=sum+arr[i];
//         }
//         return sum;
//     }

//     console.log(findsum(arr));

