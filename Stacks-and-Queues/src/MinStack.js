/* Write your class below */
/* I had my own solution and when I was done I looked at the hints and wanted to do it the way the hints say so my first solution is in MinStack-first-solution*/
const Stack = require("./Stack")
class MinStack {
    constructor() {
        this.minStack = [],
        this.length = 0,
        this.minValues = new Stack()
    }

    push(item) {
        if (this.length === 0){
            this.minValues.push(item)
        } else {
            if (item < this.minValues.peek()) {
                this.minValues.push(item)
            }
        }
        this.minStack[this.length] = item
        this.length++
    }

    isEmpty() {
        if (this.length === 0) {
            return true
        }
        return false
    }

    peek() {
        return this.minStack[this.length - 1]
    }

    pop() {
        if(this.length === 0){
            return null
        }
        let poppedItem = this.minStack[this.length - 1]
        delete this.minStack[this.length - 1]
        if (poppedItem === this.minValues.peek()) {
            this.minValues.pop()
        }
        this.length--
        return poppedItem
    }

    getMin() {
        if (this.minValues.isEmpty()){
            return null
        }
        return this.minValues.peek()
    }

    print() {
        console.log(this.minStack)
    }
}

//You can paste the test code from the lesson below to test your solution
let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19

/* Do not remove the exports below */
module.exports = MinStack