// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require("../lib/Stack")

function removeDuplicates(stack) {
  const dict = {}
  let size = stack.size()
  let index = size

  // create dictionary which memory the order of stack (and to keep it unique)
  while (!stack.isEmpty()) {
    const element = stack.pop()
    dict[element] = index
    index--
  }
  index = 0

  // restore data from dictionary
  while (index <= size) {
    for (const key of Object.keys(dict)) {
      if (dict[key] === index) {
        stack.push(key)
        break
      }
    }
    index++
  }
}

// Create stack
const stack = new Stack()
stack.push(5)
stack.push(2)
stack.push(1)
stack.push(5)
stack.push(1)
stack.push(3)

removeDuplicates(stack)
console.log(stack.printStack()) // [5, 2, 1, 3]
