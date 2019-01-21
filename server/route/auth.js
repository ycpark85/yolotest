const express = require('express')
const passport = require('passport')

const router = express.Router()

router.get('/kakao', passport.authenticate('kakao-login'));

router.get('/kakao/callback', passport.authenticate('kakao-login', {
    failureRedirect: '/signup'
}), (res, req) => {
    res.redirect('/')
})

module.exports = router;