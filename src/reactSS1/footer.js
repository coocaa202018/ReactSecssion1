import React, { Component } from 'react'
import styles from "./footer.module.css";

class Footer extends Component {
    render () {
        return (
            <div className={styles.footers}>
                <p>Copyright © Your Website 2022</p>
            </div>
        )
    }
}

export default Footer