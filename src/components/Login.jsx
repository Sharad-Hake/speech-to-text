import React from 'react';
import styles from '../styles/Login.module.css';

const Login = () => {
    const handleLogin = () => {
        localStorage.setItem('loggedIn', JSON.stringify(true));
        window.location.href = '/';
    };

    return (
        <div className={styles.login}>
            <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <input type="text" className={styles.input} placeholder="Username" required />
                <input type="password" className={styles.input} placeholder="Password" required />
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
};

export default Login;