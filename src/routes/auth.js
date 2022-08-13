const { Router } = require('express')
const { getUsers, register, login, protected, logout, userEmailAuth } = require('../controllers/auth');
const {addContact, editContact,removeContact,getContacts} = require('../controllers/contact');
const {
    validationMiddleware,
} = require('../middlewares/validations-middleware')
const { registerValidation, loginValidation } = require('../validators/auth')
const { userAuth } = require('../middlewares/auth-middleware')
const router = Router();


router.get('/get-users', getUsers);
router.get('/protected', userAuth, protected);
router.post('/login', loginValidation, validationMiddleware, login);
// router.post('/register', register)
router.post('/register', registerValidation, validationMiddleware, register);
router.get('/userEmailVarification', userEmailAuth);

router.get('/logout', logout);

//contact API
router.post('/allContact', getContacts);
router.post('/addContact', addContact);
router.post('/editContact', editContact);
router.delete('/removeContact', removeContact);
module.exports = router 