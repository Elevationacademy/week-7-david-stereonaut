/* Write your code below */
const Matrix = require('./Matrix')

class EmployeeMatrix extends Matrix {
    constructor(numRows, numColumns) {
        super(numRows, numColumns)
    }

    loadData(salaryData) {
        this.matrix = salaryData.map(s => Object.values(s))
    }

    getEmployees(department) {
        return this.matrix.filter(m => m[2] == department).map(m => m[1])
    }

    getTotalSalary(department) {
        return this.matrix.filter(m => m[2] == department).reduce((accumulator, currentValue) => accumulator + currentValue[3], 0)
    }

    findRichest() {
        let richestSalary = this.matrix[0][3]
        let richestName = this.matrix[0][1]
        this.matrix.forEach(m => {
            if(m[3] > richestSalary) {
                richestSalary = m[3]
                richestName = m[1]
            }
        })
        return richestName
    }
}


//You can paste the code from the lesson below to test your solution
let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
m.print()

console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300
console.log(m.findRichest()) //prints Anisha




/* Do not remove the exports below */
module.exports = EmployeeMatrix