const express = require('express')

const router = express()
const model = require('../model')

router.get('/', (req, res, next) => {
    res.send('/api/v1.0/letter/list')
})


router.get('/list', (req, res, next) => {
    let userid = req.user.u_id
    console.log(userid)
    let sendmsg = []
    model.letter.findAll({
        raw: true,
        include: [
            { model: model.profile }
        ],
        where: {
            sendid: userid,
        }
    }).then((result) => {
        console.log("결과는?:", result)
        sendmsg = result
    }).then(() => {
        model.letter.findAll({
            raw: true,
            include: [
                { model: model.profile }
            ],
            where: {
                receptid: userid,
            }
        }).then(result => {
            console.log('result')
            res.json({
                sendmsg: sendmsg,
                resmsg: result
            })
        })
    })
})


router.post('/send', (req, res) => {
    console.log('유저아이디:', req.user.u_id)
    let sendid = req.user.u_id
    let { receiptid, content, color } = req.body
    console.log(sendid, receiptid, content, color)
    model.letter.create({
        sendid: sendid,
        receptid: receiptid,
        content: content,
        color: color,
        profileUserid: receiptid
    }).then((result) => {
        model.sumtickets.find({
            row: true,
            where: {
                userUId: sendid
            }
        }).then((result) => {
            console.log(result.lticket - 1)
            let lticket = result.lticket - 1
            model.sumtickets.update({
                lticket: lticket
            }, {
                where: { userUId: sendid }

            }).then((result) => {
                model.lticketlists.create({
                    class: '사용',
                    ticketcount: -1,
                    useid: receiptid,
                    userUId: sendid
                }).then((result) => {
                    res.json(result)
                })
            })
        })


    })
})

router.get('/receipt', (req, res) => {
    console.log('userid:', req.user.u_id)
    let userid = req.user.u_id
    let id = req.query.letterid
    model.letter.findById(id, {
        raw: true,
        include: [
            { model: model.profile }
        ]
    }).then((result) => {
        res.json({
            receiptcon: result,
            userid: userid
        })
    })
})


module.exports = router;