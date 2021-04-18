// Add your Javascript work here

// Task 1: Create a basic Calculator

var num1 = parseInt(prompt("Enter First Number"));
var operator = prompt("Enter An Operator + - * /");
var num2 = parseInt(prompt("Enter Second Number"));

switch(operator){
case('+'):
operator = num1+num2;
document.write('Your Answer Is : ' + operator);
break;
case('-'):
operator=num1-num2;
document.write('Your Answer Is : ' + operator);
break;
case('*'):
operator=num1*num2;
document.write('Your Answer Is : ' + operator);
break;
case('/'):
operator=num1/num2;
document.write('Your Answer Is : ' + operator);
break;
}


/* 

1. Start creating three prompts, the first two for the two numbers and the second one for the operation
2. Also declare another variable for the result.
3. Using conditional statement, check if the operation is addition, subtraction, division or multipilcation
4. Add the output to the result variable you created.
5. Console.log the result.

*/
