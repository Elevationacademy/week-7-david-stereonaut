/* Write your class below */
/* this is my first solution - after i finished i looked at the hints and decided to do it again by the hints so thats in MinStack.js */
class MinStackFirst {
    constructor() {
        this.minStack = [],
        this.length = 0,
        this.minValue
    }

    push(item) {
        if (this.length === 0){
            this.minValue = item
        } else {
            if (item < this.minValue) {
                this.minValue = item
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
        let poppedItem = this.minStack[this.length - 1]
        delete this.minStack[this.length - 1]
        if (poppedItem === this.minValue) {
            let newMin = this.minStack[0]
            this.minStack.forEach(m => {
                if ((!(m === undefined)) && m < newMin){
                    newMin = m
                }
            })
            this.minValue = newMin
        }
        this.length--
        if(this.length === 0){
            this.minValue = undefined
        }
        return poppedItem
    }

    getMin() {
        return this.minValue
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
module.exports = MinStackFirst