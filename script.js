
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b ;
}

function divide(a, b) {
    return a / b;
}

function operate(a, opp, b) {
    switch(opp) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}