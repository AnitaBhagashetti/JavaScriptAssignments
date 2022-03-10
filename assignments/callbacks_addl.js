// function getList() {
//     return ['Joker', 'Batman'];
// }

// function findPerson(who) {
//     const list = getList();
//     const found = list.some(person => person === who);
//     console.log(found); // logs true
// }

// findPerson('Joker');

//what if the time is more or the getList is taking some time?

// function getList() {
//     setTimeout(() => {
//         return ['Joker', 'Batman'];
//     }, 2000)
// }

// function findPerson(who) {
//     const list = getList();
//     const found = list.some(person => person === who);
//     console.log(found); // logs true
//     console.log("I dont care about list");
// }

// findPerson('Joker');


// //callback approach with asynchronous behavior

function getList(callback) {
    setTimeout(() => callback(['Joker', 'Batman']), 2000);
}

function findPerson(who) {
    getList(function(list) {
        const found = list.some(person => person === who);
        console.log(found); // logs true
    });
    console.log("I dont care about list");
}
findPerson('Joker');