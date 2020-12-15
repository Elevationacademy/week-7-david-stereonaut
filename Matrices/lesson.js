function generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1
    
    for (let r = 0; r < numRows; r++) {
        matrix.push([])
        for (let c = 0; c < numColumns; c++) {
            matrix[r].push(num++)
        }
    }
    return matrix
}

let matrix = generateMatrix(3, 4)

for (let row = 0; row < matrix.length; row++){
    let thisRow = ''
    for (let column = 0; column < matrix[0].length; column++){
        thisRow += `${matrix[row][column]} `
    }
    console.log(thisRow)
}

const get = function(rowNum, colNum) {
    return matrix[rowNum][colNum]
}

console.log(get(1, 2))

const print = function(matrix) {
    for (let row = 0; row < matrix.length; row++){
        let thisRow = ''
        for (let column = 0; column < matrix[0].length; column++){
            thisRow += `${matrix[row][column]}\t`
        }
        console.log(thisRow)
    }
}

print(matrix)

function printColumn(matrix, colNum) {
    let toPrint = ''
    for (let i = 0; i < matrix.length; i++) {
        toPrint += `${matrix[i][colNum]}, `
    }
    console.log(toPrint.slice(0, -2))
}

printColumn(1) //prints 2, 6, 10 on separate lines


const printRow = function(matrix, rowNum) {
    let toPrint = ''
    for (let column = 0; column < matrix[0].length; column++){
        toPrint += `${matrix[rowNum][column]}, `
    }
    console.log(toPrint.slice(0, -2))
}

printRow(matrix, 1)

const alter = function(matrix, rowNum, colNum, num) {
    matrix[rowNum][colNum] = num
}

alter(matrix, 1, 3, 174)
print(matrix)