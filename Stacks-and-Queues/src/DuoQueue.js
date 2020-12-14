/* Write your class below */

const Queue = require('./Queue')

class DuoQueue {
    constructor(num) {
        this.q1 = new Queue,
        this.q2 = new Queue
    }

    enqueue(person, qNum) {
        this["q"+qNum].enqueue(person)
    }

    dequeue(qNum) {
        return this["q"+qNum].dequeue()
    }

    getLongestQueue() {
        if (this.q1.length === this.q2.length){
            return "both queues has the same length"
        }
        if (this.q1.length > this.q2.length){
            return this.q1
        }
        return this.q2
    }

    getShortestQueue() {
        if (this.q1.length === this.q2.length){
            return "both queues has the same length"
        }
        if (this.q1.length > this.q2.length){
            return this.q2
        }
        return this.q1
    }

    balanceQueues() {
        if (this.q1.length === this.q2.length || this.q2.length === (this.q1.length + 1) || this.q1.length === (this.q2.length + 1)) {
            return "queues are already balanced"
        }
        while (!(this.q1.length === this.q2.length || this.q2.length === (this.q1.length + 1) || this.q1.length === (this.q2.length + 1))) {
            if (this.q1.length > this.q2.length){
                this.q2.enqueue(this.q1.dequeue())
            }
        }
    }
}

//You can paste the test code from the lesson below to test your solution

let dq = new DuoQueue()

//first set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
dq.dequeue(1)
dq.dequeue(1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }

//second set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

// //balance queues
dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }

/* Do not remove the exports below */
module.exports = DuoQueue