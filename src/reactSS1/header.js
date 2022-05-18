import React, { Component } from 'react'
import styles from "./header.module.css";

class Header extends Component {
    render () {
        return (
            <div className={styles.header}>
                <p>Start Boostrap</p>
                <nav className={styles.navbar}>
                    <a>Home</a>
                    <a>About</a>
                    <a>Services</a>
                    <a>About</a>
                </nav>
                

            </div>
        )
    }
}

export default Header