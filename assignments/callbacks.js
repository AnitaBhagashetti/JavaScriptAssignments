// callbacks
//callback is a function that is passed as an argument/aramer/value to another funtion or called once a function is done executing
//why callbacks are a rpoblem - callback hell
// promises

// let arr = [13131,23434,3656,44344];

// for(let item of arr) {
//     //call the server to check if the value is in data base.
//     // The step above is asynchronous - we are going to a server- we are not sure how long it will take and we cannot 
//     //pause our javascript or system resources till the server responds
//     //synchronous - normal flow of code

//     //callback
//     process(item);

// }


// function process() {

// }

let bakingTime = 5000;
/////




console.log("before baking");

setTimeout(function () {
    console.log("Order is ready")
}, bakingTime);

console.log("after baking");


//complex callbacks or nested callbacks


setTimeout(function () {
    setTimeout(function () {
        setTimeout(function () {
            setTimeout(function () {
                setTimeout(function () {
                    setTimeout(function () {
                        setTimeout(function () {
                            setTimeout(function () {
                                console.log("done");
                            }, bakingTime)
                        }, bakingTime)
                    }, bakingTime)
                }, bakingTime)
            }, bakingTime)
        }, bakingTime)
    }, bakingTime)
}, bakingTime);

// realworld example

//website
//user login - request goes to backend
//get userid, name - request goes to backend
//user goes to dashboard 
//fetch dashboard data -request goes to backend
//user clicks on order history
//get orders from backend

function getUserData(userId) {
    //call API and once the data is returned from server, call 
    getDashboardData();
}

function getDashboardData() {

}

function login() {
    //call API
    if (success) {
        function getUserData(userId) {
            //call API and once the data is returned from server, call 
            if (success) {
                function getDashboardData(userid) {
                    if (successful) {
                        //call success callback
                    } else {
                        //call failure callback
                    }
                }
            } else {
                //call failure callback
            }

        }
    } else {
        //call failure callback
    }
}



