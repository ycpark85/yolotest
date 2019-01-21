const localStrategy = require('passport-local').Strategy
const bCrypt = require('bcrypt-nodejs')
const { users } = require('../../model')

module.exports = new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done) {
        var isValidPssword = function(userpass, password) {

            return bCrypt.compareSync(password, userpass)
        }
        users.findOne({
            where: {
                email: email
            }
        }).then((user) => {
            if (!user) {
                return done(null, false)

            }
            if (!isValidPssword(user.password, password)) {

                return done(null, false)

            } else {
                var userinfo = user.get()
                return done(null, userinfo)
            }

        }).catch((err) => {
            console.log('error:', err)
            return done(null, false, {
                message: '로그인에 문제가 생겼음.'
            })
        })
    }

)