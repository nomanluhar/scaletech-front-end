const passport = require('passport');
// console.log(passport.authenticate)
exports.userAuth = passport.authenticate('jwt', { session: false })