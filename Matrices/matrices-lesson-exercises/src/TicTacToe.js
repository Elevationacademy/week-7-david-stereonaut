const Matrix = require('./Matrix')

class TicTacToe extends Matrix {
    constructor(numRows, numColumns) {
        super(numRows, numColumns)
        this.player = 1
    }

    loadBoard() {
        let matrix = []
        for (let r = 0; r < 3; r++) {
            matrix.push([])
            for (let c = 0; c < 3; c++) {
                matrix[r].push('.')
            }
        }
        this.matrix = matrix
    }

    play(rowNum, columnNum, player) {
        if (this.matrix[rowNum][columnNum] === '.' && player === this.player) {
            this.alter(rowNum, columnNum, player == 1 ? 'x' : 'o')
            this.player = player == 1 ? 2 : 1
    
            if ((this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][0] === this.matrix[0][2]) && this.matrix[0][0] != '.'||
                (this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][0] === this.matrix[1][2]) && this.matrix[1][0] != '.'||
                (this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][0] === this.matrix[2][2]) && this.matrix[2][0] != '.'||
                (this.matrix[0][0] === this.matrix[1][0] && this.matrix[0][0] === this.matrix[2][0]) && this.matrix[0][0] != '.'||
                (this.matrix[0][1] === this.matrix[1][1] && this.matrix[0][1] === this.matrix[2][1]) && this.matrix[0][1] != '.'||
                (this.matrix[0][2] === this.matrix[1][2] && this.matrix[0][2] === this.matrix[2][2]) && this.matrix[0][2] != '.'||
                (this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2]) && this.matrix[0][0] != '.'||
                (this.matrix[0][2] === this.matrix[1][1] && this.matrix[0][2] === this.matrix[2][0]) && this.matrix[0][2] != '.') {
                    console.log(`Congratulations Player ${player}`)
                    this.loadBoard()
                    this.player = 1
                }
        } else {
            console.log('this position is already played or it isnt your turn')
        }
    }
}

let board = new TicTacToe()
board.loadBoard()

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1

board.print()
