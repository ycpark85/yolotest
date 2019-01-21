const express = require('express')
const router = express.Router()
const { letter } = require('../model')
router.post('/send', (req, res) => {
    console.log('도착?')
})

module.exports = function(io, socket) {
    let mess = io.of('/mess').on('connection', (socket) => {
        socket.on('/send', (commet) => {
            console.log('왔나?' + commet)
        })
    })

    return router;
}