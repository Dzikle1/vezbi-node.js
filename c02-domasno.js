// calculator so switch i so if else

let calculator = (op, a, b) => {
    switch (op) {
        case "add":
            return a + b;
        case "substract":
            return a - b;
        case "multiply":
            return a * b;
        case "divade":
            return a / b;
        default: 
            return "Invalid operation"; 

    }
}
console.log ( calculator("add", 5, 4) );

// primer za if else

let calculatorTwo = (op, a, b) => {
    if (op === "add") {
        return a + b;
    } else if (op === "substract") {
        return a - b;
    } else if (op === "multiply") {
        return a * b;
    } else if (op === "divade") {
        return a / b;
    } else {
        return "Invalid operation";
    }
}
console.log (calculatorTwo("divade", 24, 8));