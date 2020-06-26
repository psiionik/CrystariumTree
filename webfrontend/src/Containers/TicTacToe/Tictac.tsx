import React from 'react';

import styles from './Tictac.module.scss'

import Board from './Board'
import { networkInterfaces } from 'os';
import { relative } from 'path';

interface TictacState {
    board: string[][];
    playerOneTurn: boolean;
    playing: boolean;
    draw: boolean;
    states: Array<string[][]>;
}

export default class Tictac extends React.Component<{}, TictacState> {
    constructor(props: {}){
        super(props)

        this.state = {
            playerOneTurn: true,
            playing: true,
            draw: false,
            board: [["-", "-", "-"],
                    ["-", "-", "-"],
                    ["-", "-", "-"]],
            states: [],
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, row_index: number, col_index: number){
        let mutable_board = this.state.board
        let states_array = this.state.states;
        
        if (this.state.playing) {
            if (this.state.playerOneTurn) {
                if (mutable_board[row_index][col_index] === "-"){
                    mutable_board[row_index][col_index] = "X"
                    let newArray = mutable_board.map(function(arr) {
                        return arr.slice();
                    });
                    states_array.push(newArray)
                    this.setState({
                        board: mutable_board,
                        playerOneTurn: false,
                        states: states_array,
                    })
                }
            }
            else {
                if (mutable_board[row_index][col_index] === "-"){
                    mutable_board[row_index][col_index] = "O"
                    let newArray = mutable_board.map(function(arr) {
                        return arr.slice();
                    });
                    states_array.push(newArray)
                    this.setState({
                        board: mutable_board,
                        playerOneTurn: true,
                        states: states_array,
                    })
                }
                 
            }
        }
        if (this.isGameOver()) {
            this.setState({
                playing: false
            })
        }
        else {
            if(this.isDraw()){
                this.setState({
                    playing: false,
                    draw: true,
                })
            }
        }
    }

    isDraw() {
        let board = this.state.board;
        for (let i = 0; i < board.length; i++){
            for (let j = 0; j < board[0].length; j++){
                if (board[i][j] === "-"){
                    return false
                }
            }
        }

        return true
    }

    isGameOver() {
        let board = this.state.board
        for (let row = 0; row < board.length; row++){
            if (board[row][0] === "X" && board[row][1] === "X" && board[row][2] === "X"){
                return true
            }

            if (board[row][0] === "O" && board[row][1] === "O" && board[row][2] === "O"){
                return true
            }
        }

        for (let col = 0; col < board[0].length; col++){
            if (board[0][col] === "X" && board[1][col] === "X" && board[2][col] === "X"){
                return true
            }

            if (board[0][col] === "O" && board[1][col] === "O" && board[2][col] === "O"){
                return true
            }
        }

        if ((board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") || (board[0][0] === "O"  && board[1][1] === "O" && board[2][2] === "O")) {
            return true
        }

        if ((board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") || (board[0][2] === "O"  && board[1][1] === "O" && board[2][0] === "O")) {
            return true
        }

        return false
    }

    reset() {
        this.setState({
            playerOneTurn: true,
            playing: true,
            draw: false,
            board: [["-", "-", "-"],
                    ["-", "-", "-"],
                    ["-", "-", "-"]],
            states: [],
        })
    }
    
    goBack(board: string[][], turn: number) {
        let new_states: string[][][] = []
        
        for (let i = 0; i < this.state.states.length; i++) {
            if (i < turn) {
                let new_matrix: string[][] = []
                for (let j = 0; j < board.length; j++){
                    let new_row: string[] = []
                    for (let k = 0; k < board[0].length; k++) {
                        new_row.push(this.state.states[i][j][k])
                    }
                    new_matrix.push(new_row)   
                }
                new_states.push(new_matrix)
            }
        }

        if(turn % 2 == 0){
            this.setState({
                playerOneTurn: true,
                playing: true,
                draw: false,
                board: board,
                states: new_states,
            })
        }
        else {
            this.setState({
                playerOneTurn: false,
                playing: true,
                draw: false,
                board: board,
                states: new_states,
            })
        }
    }

    render() {
        return (
            <div>
                <div className={styles["player-text"]}>
                    {this.state.playing ? this.state.playerOneTurn ? "Player 1's Turn" : "Player 2's Turn" :
                        this.state.draw ? "It's a draw!" : this.state.playerOneTurn ? "Player 2 wins!" : "Player 1 wins!"                    
                    }
                </div>
                <Board board={this.state.board} clickFunction={this.handleClick} playing={this.state.playing} />
                <div className={styles.buttonResetContainer}>
                    <button className={styles.buttonReset} onClick={() => this.reset()}>Reset!</button>
                </div>
                <div className={styles.stateContainer}>
                {
                    this.state.states.map((board, index) => {
                        return <div className={styles.stateBox} key={index} onClick={() => this.goBack(board, index+1)}>Go back to move #{index + 1}</div>
                    })
                } 
                </div>
            </div>
        )
    }
}