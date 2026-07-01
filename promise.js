// const cart=["shoes","pants","kurta"];
// createOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// });
// const promise=createOrder(cart);
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// promise is resolved 

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise is resolved");
//     }, 2000);

//     // reject("promise is rejected")
// });
//  promise.then((data) => {
//         console.log(data);
//     });
// // console.log(promise);



// promise using .then and .catch method 
// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("this is promise");
//         resolve("successfully resolve promise");
//     });
// };
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fullfilled", res);
// });
// promise.catch((err)=>{
//     console.log("promise rejected", err);
// });


// // async await function 

// function api(){
//     return  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
// });
// };
// async function getWeatherData(){
//     await api();
//     await api();
// };

// async and await function 

// const p=new Promise((resolve,reject)=>{
//     resolve("promise resolved");
// });
// async function handlePromise(){
//     const val=await p;
//     console.log(val);
// }
// handlePromise();


// const cart =["shoes", "kurta", "pant"];
// we are passing call back function in this

// createOrder(cart,function(orderId){
// proceedToPayment(orderId);
// });

// // we are attaching call back function in this 

// const promise=createOrder(cart);
// promise.then(function(orderId){
// proceedToPayment(orderId);
// });

// promise  function that provide fullfilled state 
// const Github_Api="https://api.github.com/users/shyamshukla629";
// const user=fetch(Github_Api);
// console.log(user);

// promsie.all Function is used to handle multiple promises at once. 
// const promise1= Promise.resolve(3);
// const promise2=56;
// const promise3=new Promise((resolve, reject)=>{
//     setTimeout(resolve,100,"foo");
// });
// Promise.all([promise1,promise2,promise3]).then(values=>{
//     console.log(values);
// });

// promise 
// let promise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise is resolved");
//     })
// },2000);
// promise.then((data)=>{
//     console.log(data);
// });
// console.log(promise);

// using promise to check the cart is valid or not 
// const cart=["shoes","pants", "kurta"];
// const promise=createOrder(cart);
// promise.then((orderId)=>{
//     console.log(orderId);
// });
// function createOrder(cart){
//     const pr=new Promise((resolve,reject)=>{
//         if(!validateCart(cart)){
//             const error =new Error("cart is not valid");
//             reject(error);
//         }
//         const orderId="12345";
//         if(orderId){
//             setTimeout (function(){
//                 resolve(orderId);
//             },5000);
           
//         }
//     });
//     return pr;
//     function validateCart(cart){
//         return true;
//     }
// }

// promise chaining is used t0 handle  
// const validateCart=(cart)=>{
//    return true;
// }
// const createOrder=(cart)=>{
//     pr=new Promise((resolve,reject)=>{
//         if(!validateCart(cart)){
//             const error=new Error("cart is not valid");
//             reject(error);
//         }   
//         const orderId="123456";
//         if(orderId){
//             setTimeout(()=>{
//                 resolve(orderId);
//             }, 5000);
//         }
//     });
//     return pr;
// }

// createOrder(cart)
// .then((orderId)=>{
//     console.log(orderId);
//     return orderId;
// })
// .catch((err)=>{
//     console.log(err.message);
// })
// .then((orderId)=>{
//     return proceedToPayment(orderId);
// })
// .then((paymentInfo)=>{
//     console.log(paymentInfo);
// })
// .catch((err)=>{
//     console.log(err.message);
// })
// .then((orderId)=>{
//     console.log("no matter what happens i will be called");
// })

// promise api :- there are some api which is used to handle multiple promises at once

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("promise 1 success"),3000);
//     // setTimeout(()=>reject("promise 1 failed"),4000);
// });
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=> resolve("promise 2 success"),1000);
//     // setTimeout(()=> reject("promise 2 failed"),2000);
// });
// const p3=new Promise((resolve,reject)=>{
//     // setTimeout(()=> resolve("promise 3 success"),2000);
//     setTimeout(()=> reject("promise 3 failed"),3000);
// });
// //  promise.all api 
// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })

// promise.allsettled api
// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })

// race api using promise 
// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })

// any api using promise
// Promise.any([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })



// async await function is used to handle promise in a better way 
// async function getData(){
//     return "namaste";
// }
// const data=getData();
// console.log(data);

const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise is resolved");
    },5000);
});

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise 1 is resolved");
    },10000);
});
async function handlePromise(){
    console.log("hello world");
    const val=await p;
    console.log("Heello javascript");
    console.log(val);

     const val2=await p1;
    console.log("Heello javascript");
    console.log(val2);
}
handlePromise();



const API_URL="https://dummyjson.com/users";
async function handlePromise1(){
    const data=await fetch(API_URL);
    const jsonValue=await data.json();
    console.log(jsonValue);
} 
handlePromise1();