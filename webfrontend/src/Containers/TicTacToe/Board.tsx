import React from 'react'

import styles from './Board.module.scss'

import Square from './Square'

interface BoardProps {
    board: string[][];
    clickFunction: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default class Board extends React.Component<BoardProps>{
    constructor(props: BoardProps){
        super(props)
    }

    render() {
        return (
            <div className={styles.board}>
                {this.props.board.map((list) => {
                    return list.map((item, index) => {
                        return <Square key={index} item={item} clickFunction={this.props.clickFunction} />
                    })
                })}
            </div>
            
        )
    }
}