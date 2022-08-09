const { Router } = require('express');
var router = Router();
const { getUsers, register, login, protected, logout } = require('../controllers/auth');
const { userAuth } = require('../middlewares/auth-middleware');
const { validationMiddleware } = require('../middlewares/register-middleware');
const { registerValidation, loginValidation } = require('../validators/auth');

router.get('/get-users', getUsers);
router.get('/protected', protected);
router.post('/register', registerValidation, validationMiddleware, register);
router.post('/login', loginValidation, validationMiddleware, login);
router.get('/logout', logout);

module.exports = router;