const express = require('express')
let router = express.Router()

const admin = require('./admin')
const users = require('./users')
const letter = require('./letter')
const friends = require('./friends')
const comment = require('./comment')
const auth = require('./auth')

router.use('/comment', comment)
router.use('/friends', friends)
router.use('/letter', letter)
router.use('/admin', admin)
router.use('/users', users)
router.use('/auth', auth)

module.exports = router;