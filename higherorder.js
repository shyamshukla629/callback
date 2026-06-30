// map function 

const arr=[52,5,4,8,9,7,];
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

const radius=[3,1,2,4];
const area= function(radius){
    return Math.PI*radius*radius;
};
const cicumference=function(radius){
    return 2*Math.PI*radius;
};
const diameter=function (radius){
    return 2*radius;
};
const calculate=function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++) {
        output.push(logic(radius[i]));
    }
    return output;
};
console.log(calculate(radius,area));
console.log(calculate(radius, cicumference));
console.log(calculate(radius,diameter));
