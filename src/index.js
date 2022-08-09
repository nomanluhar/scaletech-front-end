const express = require('express');
const { PORT, CLIENT_URL } = require('./constansts');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(passport.initialize());
// require('../../')
//import routes
const authRoutes = require('./routes/auth');

//initialize
app.use('/api', authRoutes);
const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`The app is running at http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(`Error : ${error.message}`);
    };
};

appStart();