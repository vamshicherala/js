function sayMyName(){
    console.log("Vamshi");
    
}
// sayMyName /* this is only reference not the execution */
// sayMyName() /* this is execution */

function addTwoNumbers(n1,n2){ /* this n1,n2 are parameters */
    console.log(n1+n2);
    
}
// addTwoNumbers() /*this returns NaN bcz we have not provided any arguments in this  */
// addTwoNumbers(3,5) /* the values inside the function call are called arguments and the one in function definition are called parameters */

function loginUserMessage(username){
    // if(username === undefined){
    if(!username){ /** this is also same as username === undefined */
        console.log("Please provide username");
        return
    }
    return `${username} is loggedin`
}
// console.log(loginUserMessage("vamshi"))
// console.log(loginUserMessage()) /* if ur not passing any arguments in fn it will return undefined */
 
// function calcCartPrice(num1){
function calcCartPrice(... num1){ /** this is called as rest operator or spread operator based on usecase */
    return num1
}

// console.log(calcCartPrice(200));
console.log(calcCartPrice(200, 400, 500));

