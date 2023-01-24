const validate = (userData) => {
    let errors = {};

    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    // Validate username (must be an email address)
    if (!regexEmail.test(userData.user) ||
        userData.user.length === 0 ||
        userData.user.length > 35) {
        errors.user = 'User must be a valid e-mail';
    };

    // Validate password
    if (!/\d/.test(userData.pass) ||
        userData.length < 6 ||
        userData > 10) {
        errors.pass = 'Incorrect password';
    }

    return errors;
};

export default validate;