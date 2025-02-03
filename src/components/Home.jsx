import React from 'react';
import styles from '../styles/Home.module.css'
const Home = () => {
    return (
        <div className={styles.home}>
            <h1 className={styles.title}>Welcome to the Speech Application</h1>
            <h3 className={styles.tooltip}>Navigate to Speech To Text</h3>
        </div>
    );
};

export default Home;