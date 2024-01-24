/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Declaration - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let add1Element = Number(document.getElementById("add1").value);
    let add2Element = Number(document.getElementById("add2").value);

    document.getElementById("sum").value = add(add1Element, add2Element);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2) {
    return number1 - number2;
};

let subtractNumbers = function() {
    let subtract1Element = Number(document.getElementById("subtract1").value);
    let subtract2Element = Number(document.getElementById("subtract2").value);

    document.getElementById("difference").value = subtract(subtract1Element, subtract2Element);
};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let factor1Element = Number(document.getElementById("factor1").value);
    let factor2Element = Number(document.getElementById("factor2").value);

    document.getElementById("product").value = multiply(factor1Element, factor2Element);
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

let divideNumbers = () => {
    let dividendElement = Number(document.getElementById("dividend").value);
    let divisorElement = Number(document.getElementById("divisor").value);

    document.getElementById("quotient").value = divide(dividendElement, divisorElement);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let getSubtotal = () => {
    let subtotal = Number(document.getElementById("subtotal").value);
    let memberBox = document.getElementById("member");
    if (memberBox.checked === true) {
        subtotal = subtotal * 0.8;
    } else {
        subtotal = subtotal;
    }
    
    document.getElementById("total").innerHTML = `$ ${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getSubtotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
document.getElementById("odds").innerHTML = numbersArray.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.getElementById("evens").innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbersArray.reduce((total, number) => total + number);
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbersArray.map((number) => number * 2);
/* Output Sum of Multiplied by 2 Array */
let multipliedArray = numbersArray.map((number) => number * 2);
document.getElementById("sumOfMultiplied").innerHTML = multipliedArray.reduce((total, number) => total + number);