import React from 'react'

import styles from './Board.module.scss'

import Square from './Square'

interface BoardProps {
    board: string[][];
    clickFunction: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, row_index: number, col_index: number) => void;
}

export default class Board extends React.Component<BoardProps>{
    constructor(props: BoardProps){
        super(props)
    }

    render() {
        return (
            <div className={styles.board}>
                {this.props.board.map((list, row_index) => {
                    return list.map((item, col_index) => {
                        return <Square key={(3 * row_index)+ col_index} row_index={row_index} col_index={col_index} item={item} clickFunction={this.props.clickFunction} />
                    })
                })}
            </div>
            
        )
    }
}