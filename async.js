"use strict";
//=============================QUESTION NO. 1 =========================//
/*const fetchGreetings= new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("welcome to the world of coding")
    }, 2000)
    
})
fetchGreetings
   .then(() => fetchGreetings.then(resolve => console.log(resolve)))
   */
//=======================QUESTION NO.2 =========================//
Object.defineProperty(exports, "__esModule", { value: true });
/*
const simulateTask= new Promise<string>((resolve, reject) => {
 console.log("Task started")
 setTimeout(() => {
     resolve("Task completed")
 }, 1000);
})
simulateTask.then((response)=>{
console.log(response)
})
*/
//====================QUESTION NO.3 ==============//
/*
const fetchData = new Promise<string>((resolve,reject)=>{
setTimeout(() => {
    resolve("data fetched successfully!")
}, 1000);

});
fetchData.then((resolve)=>{
    console.log(resolve)

})
*/
//====================QUESTION NO.4 ==============//
/*const fetchWithError = new Promise<string>((resolve,reject)=>{
   
    setTimeout(() => {
        reject("data fetched failed!")
    }, 1000);
    
    });
    fetchWithError.then((response)=>{
        console.log(response)
    
    }).catch((response1)=>{
        console.log(response1)
    })
        */
//====================QUESTION NO.5 ==============//
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data fetched successfully!");
    }, 1000);
});
const processData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data processing!");
    }, 1000);
});
function executeSequentially() {
    processData.then((data) => {
        console.log(data);
        return fetchData;
    })
        .then((fetchData) => {
        console.log(fetchData);
    });
}
executeSequentially();
