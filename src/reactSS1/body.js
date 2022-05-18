import React, { Component } from 'react'
import Banner from './banner.js';
import Items from './item.js';
import styles from "./body.module.css";
class Body extends Component {
    render () {
        return (
            <div className={styles.body}>
                <Banner/>
                <Items/>
            </div>
        )
    }
}

export default Body