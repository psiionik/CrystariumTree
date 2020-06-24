import React from 'react'

import { FiCircle, FiX } from "react-icons/fi";

import styles from './Square.module.scss'


interface SquareProps {
    item: string;
    clickFunction: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, row_index: number, col_index: number) => void;
    col_index: number;
    row_index: number;
}

export default class Square extends React.Component<SquareProps, {}> {
    constructor(props: SquareProps) {
        super(props);
    }

    render() {
        return (
            <div className={styles.square}>
                {this.props.item === "X" ? <FiX color="red" size="5em"/> :
                 this.props.item ==="O" ? <FiCircle color="green" size="5em"/> :
                <div className={styles.clickable} onClick={(e) => this.props.clickFunction(e, this.props.row_index, this.props.col_index)}>
                </div>}
            </div>
        )
    }

}