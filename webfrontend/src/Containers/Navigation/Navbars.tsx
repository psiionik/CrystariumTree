import React from 'react'
import styles from "./Navbars.module.scss"

export default class Navbar extends React.Component {

    render() {

        return (
            <div className={styles.background}>
                <div className={styles["nav-box-1"]}>
                    <p className={styles.text} style={{marginLeft: "2%", fontSize: "30px"}}>Branden Kim</p>
                </div>
                <div className={styles["nav-box-2"]}>
                    <p className={styles.text}>Crystarium Tree</p>
                    <p className={styles.text} style={{marginLeft: "5%"}}>Blogs</p>
                    <p className={styles.text} style={{marginLeft: "5%"}}>Projects</p>
                    <p className={styles.text} style={{marginLeft: "5%"}}>About</p>
                </div>
            </div>
        )
    }
}
