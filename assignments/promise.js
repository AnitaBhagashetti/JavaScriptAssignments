//A promise is something that will either fulfill or reject the request you have after some time

const { application } = require("express");

//I ask Sriram, I want to join you for a morning walk at 5 AM. Will you be available?
//wake up at 5 am tomorrow

//sleeping - pending
//wake - fulfilling
//not wake up - rejecting

//A promise in JS is an object that will have 3 states

//pending
//resolved
//rejected


//syntax

// const prom = new Promise((resolve, reject)=>{
//     //if database call is successful
//     if(datafromdb)
//     {
//         resolve();
//     } 
//     else {
//         reject();
//     }

// });



// function getList() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(["Joker", "Batman"]), 2000);
//     });
// }

// const promise = getList();

// promise
//     .then((value) => {
//         console.log(value); // logs ['Joker', 'Batman']
//     })
//     .catch((error) => {
//         console.log(error); // Skipped...
//     });




//chaining

// delayDouble(5)
//   .then((value1) => {
//     console.log(value1); // logs 10
//     return delayDouble(value1);
//   })
//   .then((value2) => {
//     console.log(value2); // logs 20
//     return delayDouble(value2);
//   })
//   .then((value3) => {
//     console.log(value3); // logs 40
//   });

// function delayDouble(number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(2 * number), 1000);
//   });
// }




delayDouble(5)
  .then((value1) => {
    console.log(value1); // logs 10
    return new Promise((_, reject) => reject(new Error("Oops!")));
  })
  .then((value2) => {
    console.log(value2); // Skipped...
    return delayDouble(value2);
  })
  .then((value3) => {
    console.log(value3); // Skipped...
  })
  .catch((error) => {
    console.log(error); // logs Error('Oops!')
  });

function delayDouble(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2 * number), 2000);
  });
}
