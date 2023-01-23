import React from 'react';

export default function Form() {
    const [userData, setUserData] = React.useState({
        user: '',
        pass: ''
    });

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <form>

                <label htmlFor="username">Username: </label>
                <input
                    id="username"
                    name="username"
                    placeholder="use your email..."
                    type="text"
                    value={userData.user}
                    onChange={handleInputChange}
                // className={errors.user && 'warning'}
                />

                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={userData.pass}
                    onChange={handleInputChange}
                // className={errors.pass && 'warning'}
                />

                <button>login</button>
            </form>
        </div>
    );
}