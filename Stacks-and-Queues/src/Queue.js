/* Write your class below */
class Queue {
    constructor() {
        this.queue = [],
        this.length = 0
    }

    enqueue(item) {
        this.queue[this.length] = item
        this.length++
    }

    isEmpty() {
        if (this.length === 0) {
            return true
        }
        return false
    }

    peek() {
        return this.queue[0]
    }

    dequeue() {
        let dequeuedItem = this.queue[0]
        this.queue.shift()
        this.length--
        return dequeuedItem
    }

    print() {
        console.log(this.queue)
    }
}

//You can paste the test code from the lesson below to test your solution
// let q = new Queue()
// console.log(q.isEmpty())    //true
// q.print()                   //[]
// q.enqueue(2)
// console.log(q.isEmpty())    //false
// q.enqueue(4)
// q.print()                   //[4,2]
// console.log(q.peek())       //2
// q.dequeue()
// q.dequeue()
// console.log(q.peek())       //null
// console.log(q.isEmpty())    //true

/* Do not remove the exports below */
module.exports = Queue