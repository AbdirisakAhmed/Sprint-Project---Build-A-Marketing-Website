// Add your Javascript work here

// Task 1: Create a basic Calculator

const num1 = parseInt(prompt("Enter First Number"));
const operator = prompt("Enter An Operator + - * /");
const num2 = parseInt(prompt("Enter Second Number"));

if (operator==="+"){
    console.log(num1+num2)
}
else if (operator==="-"){
    console.log(num1-num2)
}
else if (operator==="*"){
    console.log(num1*num2)
}
else if (operator==="/"){
    console.log(num1/num2)
}
else{
    console.log("Please Enter Numbers and Operator")
}


/* 

1. Start creating three prompts, the first two for the two numbers and the second one for the operation
2. Also declare another variable for the result.
3. Using conditional statement, check if the operation is addition, subtraction, division or multipilcation
4. Add the output to the result variable you created.
5. Console.log the result.

*/
