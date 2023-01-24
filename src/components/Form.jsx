import React from 'react';
import Button from './Button.jsx';
import logo from '../assets/rick_and_morty_logo.png';
import styles from './Form.module.css';
import validate from './validation';

export default function Form(props) {
    const [userData, setUserData] = React.useState({
        user: '',
        pass: ''
    });

    const [errors, setErrors] = React.useState({
        user: '',
        pass: ''
    });

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });

        setErrors(validate({
            ...userData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = () => {
        props.login(userData);
    };


    return (
        <div className={styles.divLoginForm}>
            <img src={logo} className={styles.image} alt='logo' />

            <form>

                <label htmlFor="user">Username:  </label>
                <input
                    id="user"
                    name="user"
                    placeholder="use your email..."
                    type="text"
                    value={userData.user}
                    onChange={handleInputChange}
                    className={errors.user && styles.warning}
                />
                <p className={styles.danger}>{errors.user}</p>

                <label htmlFor="pass">Password:</label>
                <input
                    id="pass"
                    name="pass"
                    type="password"
                    value={userData.pass}
                    onChange={handleInputChange}
                    className={errors.pass && styles.warning}
                />
                <p className={styles.danger}>{errors.pass}</p>

            </form>

            <div className={styles.divButton}>
                {(Object.values(errors).length === 0) ? <Button text="login" onClick={handleSubmit} /> : null}
            </div>
        </div>
    );
}