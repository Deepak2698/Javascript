

var num8 = 80; // Outer scope

function printMyMessage(message) {
    console.log(message);
}

function externalMessage() {
    var num5 = 50;
    alert("Welcome from outside !!");

    //
    {
        console.log(num5);

        let num6 = 60;
        console.log(num6); // 60

        const num7 = 70;
        console.log(num7); // 70

        var num9 = 90;
        console.log(num9); // 90
        
    }
    // console.log(num6); // Block Scope, Uncaught ReferenceError: num6 is not defined
    // console.log(num7); // Block Scope, Uncaught ReferenceError: num7 is not defined
    //

    // num5 is visible througout my function
    console.log(num5); // 50

    console.log(num8); // inner scope; Lexical scoping;
    console.log(num9); // 90, functional scope

    let message = "Welcome to class !!";
    printMyMessage(message);
}

// console.log(num5); // Uncaught ReferenceError: num5 is not defined
// console.log(num6); // Uncaught ReferenceError: num6 is not defined 
// console.log(num7); // Uncaught ReferenceError: num7 is not defined
// console.log(num8);