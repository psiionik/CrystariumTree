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
            board: [["X", "-", "-"],
                    ["-", "-", "-"],
                    ["-", "-", "O"]],
            playerOneTurn: true
        }
    }

    handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        console.log("I have been clicked")
    }

    render() {

        return (
            <Board board={this.state.board} clickFunction={this.handleClick} />
        )
    }
}