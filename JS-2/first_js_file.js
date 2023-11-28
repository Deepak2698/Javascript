

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

function changeMyCompany() {
    // get hold of the element
    let element = document.getElementById("myDiv");

    // change the comtents of the element
    element.innerHTML = "Welcome to Facebook !!";

    // console log
    console.log("I changed my company");

    // alert the data
    alert("Welcome to the new Company !!");

    // change contents of a web page
    document.write("I think, you got a very good package !!");
}

function askForInput() {
    let userName = window.prompt("What is your good name ?");
    let element = document.getElementById("username");
    element.innerHTML = userName;
}

function deleteThePost() {
    let elements = document.getElementsByClassName("btnClass");

    let confirm = window.confirm("Are you sure you want to delete ?");
    let element = document.getElementById("username");
    if (confirm) {
        element.innerHTML = "Post deleted";
    } else {
        element.innerHTML = "Post NOT deleted";
    }
}