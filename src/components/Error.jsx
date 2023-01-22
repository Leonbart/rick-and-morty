import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Error.module.css';
import image from '../assets/rick_and_morty_fall.jpg';

export default function Error() {
    const navigate = useNavigate();

    return (
        <div className={styles.divError}>
            <h1 style={{ margin: '0rem' }}>Error 404</h1>
            <h3 style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>Route not found</h3>
            <img src={image} className={styles.image} alt='Error' />
            <div className={styles.divButtonHome}>
                <button
                    className={styles.buttonHome}
                    onClick={() => navigate('/')}
                >HOME
                </button>
            </div>
        </div>
    )
}