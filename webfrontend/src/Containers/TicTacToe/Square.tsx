import React from 'react'

import { FiCircle, FiX } from "react-icons/fi";

import styles from './Square.module.scss'


interface SquareProps {
    item: string;
    clickFunction: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
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
                <div className={styles.clickable} onClick={this.props.clickFunction}>
                </div>}
            </div>
        )
    }

}