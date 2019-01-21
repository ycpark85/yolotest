const localStrategy = require('passport-local').Strategy

const { admin_users } = require('../../model')

module.exports = new localStrategy({
        usernameField: 'uid',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, id, password, done) {
        console.log('로컬패스포트:' + id, password)
        if (!id || !password) return done(null, false)

        admin_users.findOne({
            where: { uid: id },
            raw: true
        }).then((result) => {
            if (!result) {
                done(null, false)
            } else {
                if (result.password == password) {
                    console.log('로그인 성공!')
                    done(null, {
                        uid: result['uid'],
                        id: result['admin_code']
                    })
                } else {
                    done(null, false)
                }
            }
        })
    })