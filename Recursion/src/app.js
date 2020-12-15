/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

const Stack = require('./Stack')

//Exercise 1
const findFactorial = function(num, factorial = 1) {
  if (num === 1) { return factorial }
  factorial = factorial * num
  return findFactorial((num - 1), factorial)
}

console.log(findFactorial(8))

//Exercise 2
const reverseString = function(str, reversed = '') {
  if (str.length === 0) { return reversed }
  reversed += str[str.length - 1]
  return reverseString((str.slice(0, -1)), reversed)
}

console.log(reverseString("god"))

//Exercise 3
const stack1 = new Stack()
stack1.push(1)
stack1.push(2)
stack1.push(3)
const stack2 = new Stack()

const swap = function(stack1, stack2) {
  if (stack1.length === 0) { return }
  stack2.push(stack1.pop())
  return swap(stack1, stack2)
}

swap(stack1, stack2)
stack1.print() //[]
stack2.print() //[1, 2, 3]

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }