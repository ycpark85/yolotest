const localStrategy = require('passport-local').Strategy
const bCrypt = require('bcrypt-nodejs')
const model = require('../../model')

module.exports = new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done) {
        var genrateHash = function(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
        }
        model.users.findOne({
            where: {
                email: email
            }
        }).then((result) => {
            if (result) {
                return done(null, false)
            } else {
                var userPaswword = genrateHash(password)
                let data = {
                    email: email,
                    password: userPaswword,
                    name: req.body.name,
                    gender: req.body.gender,
                    birth: req.body.birth,
                    agree: req.body.chek,
                }
                model.users.create(data).then((newUser, created) => {
                    if (!newUser) {
                        return done(null, false)
                    } else {
                        console.log(newUser.u_id)

                        return done(null, newUser)

                    }


                }).catch((msg) => {
                    console.log(msg)
                })
            }
        })

    }

)