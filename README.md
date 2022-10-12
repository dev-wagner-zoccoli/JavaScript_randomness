# JavaScript - Terminologies & Definitions

### This repository contains a bunch o random tests and studies of JavaScript. This read.me also presents a series of questions posed by the Front End Wed Development Industry Training hosted by [Brainnest Consulting](https://www.brainnest.consulting/)

**_1. Name the three ways to declare a variable?_**

var, let and cost.

**_2. Which of the three variable declarations should you avoid and why?_**

var should be avoided because it has global scope, which might interfere with the rest of the code.

**_3. What rules should you follow when naming variables?_**

It should be a simple but descriptive name so it's easy to understand the porpouse o that variable within a glance.

**_4. What should you look out for when using the + operator with numbers ands trings?_**

Doing so will result in adding the number as a character in the string, requiring extra attention when doing so.

**_5. How does the % operator work?_**

That is the remainder operator. It returns the remain of a division. or instance: 10 % 2 will return 0; 12 % 5 returns 2.

**_6. Explain the difference between == and ===._**

The == is the equality operator. It will compare if the values stored in the variables are equel (or equivalent). The === represents the strict equality operator. It not only compares the values of the variables, but also it's types (numbers, strings, boolean, etc).

**_7. When would you receive a NaN result?_**

There's 5 cases for the occurrence of [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN):
* Failed number conversion;
* Math operations where the result is not a real number;
* Indeterminate form;
* A method or expression whose operand is or gets coerced to NaN;
* Other cases where an invalid value is to be represented as a number. 

**_8. How do you increment and decrement a number?_**

Increments will use the ++ sign and devrements the -- sign.

**_9. Explain the difference between prefixing and post-fixing increment/decrement operators._**

If postfixed, the operation will return the original value of the operand (before the increment or decrement happens). If prefixed, it will increment/decrement the operand and then return the "new" value of the variable.

**_10. What is operator precedence and how is it handled in JS?_**

Operator precedence refers to the priority of operations, like in math: multiplication and division operations take priority over sums and subtractions in an equation. E.g., for the command `console.log(3 + 4 * 5)`, JS will multiply 4 to 5 and only then sum 3 to it's result.

**_11. How do you log information to the console?_**

Through the command `console.log()`.

**_12. What does unary plus operator do to string representations of integers?_**

Modify it's type to an actual number.

**_13. What are the eight data types in JavaScript?_**

* Numbers
* Strings
* Booleans
* Null
* Undefined
* BigInt
* Symbol
* Objects

**_14. Which data type is NOT primitive?_**

Objects are not a primitive type of data in JS.

**_15. What is the relationship between null and undefined?_**

Null refers to an empty value. Undefined refers a variable that has not been assigned a value.

**_16. What is the difference between single, double, and backtick quotes for strings?_**

Single and double quotes have no difference at all, but 3 things should be observed:
* A string should start and finish with the same quote type;
* If there's need to use quotes inside a string, they should be of the opposite type of those defining the string;
* Variable values or returns should be concatenated to the strings. Putting them inside o the string will brake the code.

Backticks, in the other hand, allow for the use of any o the quotes inside it's string, plus values and returns can be placed inside it also with the command ${}, making it the way to go for strings!

**_17. What is the term for embedding variables/expressions in a string?_**

"Extended Functionality".

**_18. Which type of quote lets you embed variables/expressions in a string?_**

The "backticks".

**_19. How do you embed variables/expressions in a string?_**

By using the command ${}.

**_20. How do you escape characters in a string?_**

By using the \ before and after the characters you want to escape.

**_21. What is the difference between the slice/substring/substr string methods?_**

[Reference](https://www.freecodecamp.org/news/javascript-substring-examples-slice-substr-and-substring-methods-in-js/)
**substring()**: gets a part of the original string an returns it as a new string - expects 2 parameters (startIndex / endIndex);
**slice()**: similar to substring(). The differences: 1. If startIndex > endIndex, slice() returns an empty string; 2. If startIndex is negative, then the first character begins from the end o the string (reverse). Can also be used for arrays;
**substr()**: *considered a legacy function and should be avoided!* It returns a substring of the original string and expects two parameters as: `string.substring(startIndex, length);` - 1. startIndex representes the starting point of the substring; 2. length is the number of characters to be included (optional). Difference: the second parameter acts as a counter of the characters after the startIndex, not as an endIndex. If the second parameter is not defined, it will return a new string starting from the first parameter going all through the end o the original string.

**_22. What are the three logical operators and what do they stand for?_**

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)
They are used to determine the logic between variables or values. They are:
* && "and": Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false;
* || "or": Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false;
* ! "NOT": Returns false if its single operand that can be converted to true; otherwise, returns true.

**_23. What are the comparison operators?_**

* == "equals: returns `true` if the operands are equal;
* != "not equal": returns `true` if the operands are not equal;
* === "strict equal": returns `true` if the operands are equal and of the same type;
* !== "strict not equal": ruturns `true` if the operands are of the same type but not equal, or are o different type;
* (>) "greater than": returns `true` if the left operand is greater than the right operand;
* (>=) "greater than or equal": returns `true` iff the left operand is greater or equal to the right operand;
* (<) "less than": returns `true` if the left operand is less than the right operand;
* (<=) "less than or equal": returns `true` if the left operand is less or equal to the right operand.

**_24. What are truthy and falsy values?_**

[Reference](https://www.sitepoint.com/javascript-truthy-falsy/)
They are the responses for boolean values.

**_25. What are the falsy values in JavaScript?_**

[Reference](https://www.sitepoint.com/javascript-truthy-falsy/)
The following values are always falsy:
* false
* 0 (zero)
* -0 (minus zero)
* 0n (BigInt zero)
* '', "", `` (empty string)
* null
* undefined
* NaN

**_26. What are conditionals?_**

[Reference](https://www.javascript.com/learn/conditionals)
Conditional statements contro behavior in JS and determine whether or not pieces of code can run.

**_27. What is the syntax for an if/else conditional?_**

e.g.:
`if (10 > 5) {
    return "YES!";
} else {
    return "NO!";
}`

e.g.: 
`if (10 > 5) {
    return "YES!";
} else if (10 === 5) {
    return "YEAH"
} else {
    returns "OOPS!"
}`

**_28. What is the syntax for a switch statement?_**

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
`switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}`

**_ 29. What is the syntax for a ternary operator?_**

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
`condition ? exprIfTrue : exprIfFalse`

**_30. What is nesting?_**

Nesting points to parenting relation of elements in the code. Basically is when you write something inside something else.

**_31. What are functions useful for?_**

They are responsible for the actions we want our application to execute. It allows you to define a block of code, give it a name and then execute it as many times as you want.

**_32. How do you invoke a function?_**

By using () operator after the functions name.

**_33. What are anonymous functions?_**

They are functions that have no name associated with it.

**_34. What is function scope?_**

It refers to the range of elements avaible for the function to operate e execute.

**_35. What are return values?_**

They refer to the results or feedback we want the function to give us from the operation/action executed by it.

**_36. What are arrow functions?_**

They are abbreviated functions that have the return value implicit in them.
