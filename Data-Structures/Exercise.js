class UniqueArray {
    constructor() {
        this.data = [],
        this.duplicates = {}
    }

    add(item) {
        if (item !== Object(item)){
            if (!(this.duplicates[item])) {
                this.duplicates[item] = true
                this.data.push(item)
            } else {
                console.log('This item already exists in the UniqueArray')
            }
        } else {
            let keys = `${Object.keys(item)}`
            let values = `${Object.values(item)}`
            if (!((this.duplicates[keys]) === values)) {
                this.duplicates[keys] = values
                this.data.push(item)
            } else {
                console.log('This item already exists in the UniqueArray')
            }
            // if (!((this.duplicates[(keys[0])]) === values[values.length - 1])) {
            //     this.duplicates[(keys[0])] = values[values.length - 1]
            //     this.data.push(item)
            // } else {
            //     console.log('This item already exists in the UniqueArray')
            // }
        }
    }

    showAll() {
        console.log(this.data)
    }

    exists(item) {
        if (item !== Object(item)){
            if (this.duplicates[item]) {
                return true
            } 
            return false
        } else {
            let keys = `${Object.keys(item)}`
            let values = `${Object.values(item)}`
            if ((this.duplicates[keys]) === values) {
                return true
            }
            return false
        }
    }

    get(index) {
        return this.data[index]
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add({ name: 'yosi' })
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add({ name: 'yosi' })
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add({ name: 'yosi', job: 'good job'})
console.log(uniqueStuff.exists({ name: 'yosi' })) //returns true
uniqueStuff.showAll()
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"