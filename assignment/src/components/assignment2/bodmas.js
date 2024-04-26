// function to check if a character is an operator, &
// returns true if character is one of "+-*/^"
function isOperator(char) {
  return "+-*/^".indexOf(char) !== -1;
}

// function to determine precedence of an operator
function precedence(operator) {
  switch (operator) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
    case "^":
      return 3;
    //default precedence for non-operator
    default:
      return 0;
  }
}

// function to convert infix expression to postfix notation
export function infixToPostfix(infix) {
  // empty string to store postfix expression
  let postfix = "";
  // stack for operators
  let stack = [];

  // Replace 'x' with '*'
  infix = infix.replace(/x/g, "*");

  // Tokenize the infix expression
  // \d+ one or more occurrences of digits, `|\+|-` matches for literal char + | - and so on
  let tokens = infix.match(/\d+|\+|-|\*|\/|\^|\(|\)/g);

  for (let token of tokens) {
    if (!isNaN(token)) {
      // if token is number, add directly to postfix
      postfix += token + " ";
    } else if (token === "(") {
      // If the token is '(', push it onto the stack
      stack.push(token);
    } else if (token === ")") {
      // stack is not empty & top element is not '(', loop continues
      while (stack.length && stack[stack.length - 1] !== "(") {
        postfix += stack.pop() + " ";
      }
      // Discard '(' from stack
      stack.pop();
    } else if (isOperator(token)) {
      //  if operator precedence is higher than or equal to the precedence of the current token
      while (
        stack.length &&
        precedence(stack[stack.length - 1]) >= precedence(token)
      ) {
        // Pop operators from the stack and add them to the postfix expression
        postfix += stack.pop() + " ";
      }
      // Push the current token onto the stack
      stack.push(token);
    }
  }

  // Pop remaining operators from stack & add them to postfix expression
  while (stack.length) {
    postfix += stack.pop() + " ";
  }

  // trim postfix expression and return
  return postfix.trim();
}

// function to evaluate a postfix expression
export function evaluatePostfix(postfix) {
  // stack for operands
  let stack = [];

  // Split postfix expression into tokens
  let tokens = postfix.split(" ");

  for (let token of tokens) {
    if (!isNaN(token)) {
      // If token is a number, push it onto the stack
      stack.push(parseFloat(token));
    } else if (isOperator(token)) {
      // Pop top two operands from the stack
      let num2 = stack.pop();
      let num1 = stack.pop();
      // Perform corresponding operation & push result to stack
      switch (token) {
        case "+":
          stack.push(num1 + num2);
          break;
        case "-":
          stack.push(num1 - num2);
          break;
        case "*":
          stack.push(num1 * num2);
          break;
        case "/":
          stack.push(num1 / num2);
          break;
        case "^":
          stack.push(Math.pow(num1, num2));
          break;
      }
    }
  }

  return stack.pop();
}

// Example usage:
// let infixExpression = "3 x (2 + 4) +  5^2";
// let postfixExpression = infixToPostfix(infixExpression);
// let result = evaluatePostfix(postfixExpression);
// document.write("Result:", result); // Output: 43
