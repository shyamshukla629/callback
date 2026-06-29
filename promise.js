// const cart=["shoes","pants","kurta"];
// createOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// });
// const promise=createOrder(cart);
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// promise is resolved 

let promise = new Promise((resolve, reject) => {
    console.log("this is promise");
    setTimeout(() => {
        resolve("promise is resolved");
        console.log("promise is solbed");
        
    }, 4000);


    // resolve("promise is resolverd");
}); 
console.log(promise);
