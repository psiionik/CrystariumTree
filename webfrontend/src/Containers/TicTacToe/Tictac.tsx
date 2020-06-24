import React from 'react';

import Board from './Board'

interface TictacState {
    board: string[][];
    playerOneTurn: boolean;
}

export default class Tictac extends React.Component<{}, TictacState> {
    constructor(props: {}){
        super(props)

        this.state = {
            playerOneTurn: true,
            board: [["-", "-", "-"],
                    ["-", "-", "-"],
                    ["-", "-", "-"]]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, row_index: number, col_index: number){
        let mutable_board = this.state.board
        if (this.state.playerOneTurn) {
            if (mutable_board[row_index][col_index] === "-"){
                mutable_board[row_index][col_index] = "X"
                this.setState({
                    board: mutable_board,
                    playerOneTurn: false
                })
            }
        }
        else {
            if (mutable_board[row_index][col_index] === "-"){
                mutable_board[row_index][col_index] = "O"
                this.setState({
                    board: mutable_board,
                    playerOneTurn: true,
                })
            }
             
        }
    }

    render() {
        return (
            <div>
                {this.state.playerOneTurn ? <h1>Player 1's Turn</h1> : <h1>Player 2's Turn</h1>}
                <Board board={this.state.board} clickFunction={this.handleClick} />
            </div>
        )
    }
}