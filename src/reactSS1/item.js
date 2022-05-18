import React, { Component } from 'react'
import styles from "./item.module.css";
class Items extends Component {
    render () {
        return (
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.items}>
                        <div className={styles.icons}><i class="fab fa-buffer"></i></div>   
                        <h1>Fresh new layout</h1>
                        <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.items}>
                    <div className={styles.icons}><i class="fa fa-cloud-download-alt"></i></div>  
                        <h1>Free to download</h1>
                        <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.items}>
                        <div className={styles.icons}><i class="fa fa-columns"></i></div>  
                        <h1>Jumbotron hero header</h1>
                        <p>The heroic part of this template is the jumbotron hero header!</p>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.items}>
                        <div className={styles.icons}><i class="fab fa-bootstrap"></i></div>  
                        <h1>Feature boxes</h1>
                        <p>We've created some custom feature boxes using Bootstrap icons!</p>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.items}>
                        <div className={styles.icons}><i class="fa fa-code"></i></div>  
                        <h1>Simple clean code</h1>
                        <p>We keep our dependencies up to date and squash bugs as they come!</p>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.items}>
                        <div className={styles.icons}><i class="fab fa-galactic-republic"></i></div>  
                        <h1>A name you trust</h1>
                        <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Items