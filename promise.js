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