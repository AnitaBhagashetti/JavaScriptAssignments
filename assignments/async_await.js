// async await is another way of dealing with asynchronous behaviour.

//1. callbacks
//2. promises
//3. async await


// delayDouble(5)
//   .then((value1) => {
//     console.log(value1); // logs 10
//     return delayDouble(value1);
//   })
//   .then((value2) => {
//     console.log(value2); // Skipped...
//     return delayDouble(value2);
//   })
//   .then((value3) => {
//     console.log(value3); // Skipped...
//   })
//   .catch((error) => {
//     console.log(error); // logs Error('Oops!')
//   });

async function getDoubleValue() {
    let value1 = await delayDouble(5);
    let value2 = await delayDouble(value1);
    let value3 = await delayDouble(value2);
    console.log(value3);
    console.log("Hi");
}

getDoubleValue();

function delayDouble(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2 * number), 2000);
  });
}