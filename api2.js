// const api_URL="https://api.github.com/users/shyamshukla629";
// async function getData(){
//     const data=await fetch(api_URL);
//     const data1=await data.json();
//     console.log(data1);
// }
// getData();


// const api_url="https://api.github.com/users/shyamshukla629";
// async function getData(){
//     const data=await fetch(api_url);
//     const data1=await data.json();
//     console.log(data1);
// };
// getData();

const api_Url="https://api.github.com/users/shyamshukla629";
setTimeout( getData1=async()=>{
    const data=await fetch(api_Url);
    const jsonvalue=await data.json();
    console.log(jsonvalue);
},5000);
getData1();
console.log("hello world");