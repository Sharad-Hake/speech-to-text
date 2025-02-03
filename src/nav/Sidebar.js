import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
    const location = useLocation(); 

    const handleLogout = () => {
        localStorage.setItem('loggedIn', 'false');
        window.location.href = '/login'; 
    };

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Link 
                    to="/" 
                    className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}
                >
                    Home
                </Link>
                <Link 
                    to="/SpeechToText" 
                    className={`${styles.link} ${location.pathname === '/SpeechToText' ? styles.active : ''}`}
                >
                    Text to Speech
                </Link>
                <button className={styles.logoutBtn} onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
};

export default Sidebar;