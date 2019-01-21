const passport = require('passport')
const local_signup = require('./local-signup')
const local_login = require('./local_login')
const kakao = require('./kakao')
const { users } = require('../../model')



passport.serializeUser(function(user, done) {
    done(null, user)
});
passport.deserializeUser(function(user, done) {
    console.log('deserialize', user)

    done(null, user)

})

passport.use('local-signup', local_signup);
passport.use('kakao-login', kakao);
passport.use('local-login', local_login);


module.exports = passport;