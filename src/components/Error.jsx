import React from "react";
import { useNavigate } from "react-router-dom";
import Button from './Button.jsx';
import styles from './Error.module.css';
import image from '../assets/rick_and_morty_fall.jpg';

export default function Error() {
    const navigate = useNavigate();

    return (
        <div className={styles.divError}>
            <h1 style={{ margin: '0rem' }}>Error 404</h1>  {/* LEO: inline styled */}
            <h3 style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>Route not found</h3>
            <img src={image} className={styles.image} alt='Error' />
            <div className={styles.divButtonHome}>
                <Button
                    text='home'
                    onClick={() => navigate('/')}
                />
            </div>
        </div>
    )
}