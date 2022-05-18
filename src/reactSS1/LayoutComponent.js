import React, { Component } from 'react'
import Body from './body';
import Footer from './footer';
import Header from './header'
import styles from  './LayoutComponent.module.css';
class LayoutConponent extends Component {
    render () {
        return (
            <div className={styles.main}>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default LayoutConponent