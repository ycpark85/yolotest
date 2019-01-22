const express = require('express')
const passport = require('passport')
const router = express.Router()
const model = require('../model')
const randomStrin = require('random-string')

router.post('/create', (req, res) => {
    console.log('일단 여기옴')
    let userid = req.user.u_id
    let { habicode, text, title, adress, minage, maxage, month, day } = req.body
    var x = randomStrin({
        length: 3,
        numeric: false,
        special: false,
    })
    var y = randomStrin({
        length: 6,
        numeric: true,
        letters: false,
        special: false,

    })
    x = x.toUpperCase()
    code = x + y;

    model.moims.create({
        moimcode: code,
        title: title,
        adress: adress,
        text: text,
        minage: minage,
        maxage: maxage,
        month: month,
        day: day,
        adminContentHabiCode: habicode
    }).then((result) => {
        console.log(result)
        let position = '모임장'
        model.moimjoins.create({
            position: position,
            moimMoimcode: result.moimcode,
            profileUserid: userid,
            adminContentHabiCode: habicode
        }).then((result) => {
            if (result) {
                res.json({
                    result: result
                })
            }
        })
    })
})
router.post('/lists', (req, res) => {
    let userid = req.user.u_id
    let habicode = req.body.habicode
    let moimlist = []
    model.moims.findAll({
        raw: true,
        include: [
            { model: model.admin_contents },
        ],
        where: {
            adminContentHabiCode: habicode
        }

    }).then((result) => {
        moimlist = result
        model.moimjoins.findAll({
            raw: true,
            where: {
                adminContentHabiCode: habicode
            }
        })


    }).then((result) => {
        console.log(result)
        res.json({
            moimlist: moimlist,
            joiner: result
        })
    })

})


router.post('/userlist', (req, res, next) => {
    console.log('-----유저 리스트-----')
    let moimcode = req.body.postcode
    let userid = req.user.u_id
    let userlist = []
    let infriend = []
    let frined = []


    model.moimjoins.findAll({
        raw: true,
        include: [
            { model: model.profile },
        ],
        where: {
            moimMoimcode: moimcode
        }
    }).then((result) => {
        userlist = result
        console.log(userlist)

        model.interfriends.findAll({
            raw: true,
            where: {
                userid: userid
            }
        }).then((result) => {

            infriend = result

            model.friends.findAll({
                raw: true,
                where: {
                    userid: userid
                }
            }).then((result) => {
                frined = result
                model.moims.findAll({
                    raw: true,
                    include: [
                        { model: model.admin_contents },
                    ],
                    where: {
                        moimcode: moimcode
                    }

                }).then((result) => {
                    res.json({
                        userlists: userlist,
                        userid: userid,
                        infriend: infriend,
                        friend: frined,
                        info: result
                    })
                })

            })



        })

    })
})


router.post('/adduser', (req, res) => {
    let userid = req.user.u_id
    let moimcode = req.body.moimcode

    model.moimjoins.findOrCreate({
        where: {
            moimMoimcode: moimcode,
            profileUserid: userid
        }
    }).spread((add, created) => {
        if (created) {
            console.log('-----------추가됨-----------')
            res.json({
                moimcode: moimcode,
                message: '멤버로 추가 되었습니다.'
            })
        } else {
            res.json({
                moimcode: moimcode,
                message: '입장하셨습니다.'
            })
        }

    })
})









module.exports = router;