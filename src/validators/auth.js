const { check } = require('express-validator');
const db = require('../db');
const { compare } = require('bcryptjs');
//password
const password = check('user_password').isLength({ min: 6, max: 15 }).withMessage('Password has to be between 6 and 15 characters.');

//email
const email = check('user_email').isEmail().withMessage('Please provide a valid email.');


//check if email exists
const emailExists = check('user_email').custom(async (value) => {
    const { rows } = await db.query('SELECT * from users WHERE user_email = $1', [
        value,
    ]);
    if (rows.length) {
        throw new Error('Email already exists.');
    };
});

//login validation
const loginFieldsCheck = check('user_email').custom(async (value, { req }) => {
    const user = await db.query('SELECT * from users WHERE user_email = $1', [value]);
    if (!user.rows.length) {
        throw new Error('Email does not exists.');
    };
    const validPassword = await compare(req.body.user_password, user.rows[0].user_password);
    if (!validPassword) {
        throw new Error('Wrong password');
    };

    req.user = user.rows[0];
});


module.exports = {
    registerValidation: [email, password, emailExists],
    loginValidation: [loginFieldsCheck]
};