const express = require('express');
const app = express();
const { PORT, CLIENT_URL } = require('./constansts');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cors = require('cors');
const bodyParser = require('body-parser');

//import passport middleware
require('./middlewares/passport-middleware')

app.use(cors({ credentials: true, origin: true, }));
app.use(cors({ origin: CLIENT_URL, optionsSuccessStatus: 200 }));

//initialize middlewares
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(passport.initialize())

//import routes
const authRoutes = require('./routes/auth');

//initialize routes
app.use('/api', authRoutes);

//app start
app.listen(PORT, () => {
    try {
        console.log(`The app is running at http://localhost:${PORT}`);

    } catch (error) {
        console.log(error.message);
    };
});