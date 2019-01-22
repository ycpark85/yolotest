const express = require('express')
const passport = require('passport')
const router = express.Router()
const randomStrin = require('random-string')
const model = require('../model')
let upload = require('../utils/fileUploads')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/', (req, res) => {
    console.log(req.user.u_id)
    let rfri = []
    let ifri = []
    let hfri = []
    let sfri = []
    let pfri = []
    let userid = req.user.u_id
    model.interfriends.findAll({ //관심친구찾기
        raw: true,
        include: [
            { model: model.profile }
        ],
        where: {
            userid: userid
        }
    }).then((result) => {
        console.log(result)
        ifri = result
    }).then(() => {
        model.soulfriends.findAll({
            where: {
                userid: userid
            }
        })


    }).then((result) => {
        if (!result) {
            sfri = null
            res.json({
                ifri: ifri,
                sfri: sfri
            })

        } else {
            console.log('-------------soulfriends-------------')
            console.log(result)
            let soul = result.s_friend.split('/').filter(x => x)

            model.profile.findAll({
                raw: true,
                where: {
                    userid: soul
                }

            }).then((result1) => {
                console.log(result1)
                sfri = result1
                res.json({
                    ifri: ifri,
                    sfri: sfri
                })
            })
        }


    })

})





//----------------------------------------관심친구 등록------------------------------//
router.post('/interfriend', (req, res) => {
        console.log('여기오나?')
        let userid = req.user.u_id
        let targetid = req.body.targetid
        let proid = req.body.targetid
        console.log("타겟아이디", targetid)
        model.interfriends.findOrCreate({
            include: [
                { model: model.profile }
            ],
            where: {
                userid: userid,
                targetid: targetid
            },
            default: {
                targetid: targetid,
                userid: userid,

            }
        }).spread((ifriend, created) => {
            if (created) {
                console.log('새로만들어짐')
                console.log(created)
                return model.interfriends.update({
                    profileUserid: targetid,
                }, {
                    where: {
                        userid: userid,
                        targetid: targetid
                    }
                }).then((result) => {
                    console.log('추가 결과', result)
                    res.json({ ifriend: '추가됨' })
                })

            } else {
                console.log('북마크 삭제됨.')
                return model.interfriends.destroy({
                    where: {
                        userid: userid,
                        targetid: targetid
                    }
                }).then((result) => {
                    console.log(result)
                    res.json({ ifriend: '삭제됨' })
                })
            }
        })

    })
    // -----------------친구 신청----------------------------

router.post('/addfriends', (req, res) => {
    console.log('-------------addfriend-----------')

    let userid = req.user.u_id
    let targetid = req.body.targetid
    let mess1 = 'sendfri'
    let mess2 = 'receptfri'
    model.addfriends.findOrCreate({
        where: {
            userid: userid,
            targetid: targetid
        },
        default: {
            userid: userid,
            targetid: targetid,

            profileUserid: targetid
        }

    }).spread((addfriend, created) => {
        if (created) {
            model.addfriends.update({
                profileUserid: targetid,

            }, {
                where: {
                    userid: userid,
                    targetid: targetid
                }
            }).then((result) => {
                console.log('새로만들어짐')
                model.invitefris.findOrCreate({
                    where: {
                        userid: targetid,
                        targetid: userid
                    },
                    default: {
                        userid: targetid,
                        targetid: userid,
                        profileUserid: userid
                    }
                }).spread((addfriend, created) => {
                    if (created) {
                        model.invitefris.update({
                            profileUserid: userid,
                            where: {
                                userid: targetid,
                                targetid: userid
                            }
                        }).then((result) => {
                            res.json({
                                message: '친구신청을 하였습니다.'
                            })
                        })
                    }
                })
            })
        } else {
            res.json({
                message: '이미 등록된 친구입니다.'
            })
        }

    })

})
router.get('/list', (req, res) => {
    console.log('/------------친구리스트 옴-------------')
    let userid = req.user.u_id
    let interfri = []
    let addfri = []
    let invitefri = []
    let soulfri = []

    model.interfriends.findAll({
        raw: true,
        include: [
            { model: model.profile }
        ],
        where: {
            userid: userid
        }
    }).then((result) => {
        interfri = result
        console.log(interfri)
        model.addfriends.findAll({
            row: true,
            include: [{ model: model.profile }],
            where: {
                userid: userid
            }
        }).then((result) => {
            addfri = result
            console.log(addfri)
            model.invitefris.findAll({
                row: true,
                include: [{ model: model.profile }],
                where: {
                    userid: userid
                }
            }).then((result) => {

                invitefri = result
                console.log(invitefri)
                model.soulfriends.findAll({
                    raw: true,
                    where: {
                        userid: userid
                    }
                }).then((result) => {
                    console.log("소울 결고물" + result)
                    if (result) {
                        let test = result
                        console.log(test)
                        let soul = test[0].s_friend.split('/').filter(x => x)
                        model.profile.findAll({
                            raw: true,
                            raw: true,
                            where: {
                                userid: soul
                            }
                        }).then((result) => {
                            soulfri = result
                            console.log(result)
                        })
                    }
                }).then(() => {
                    model.friends.findAll({
                        raw: true,
                        include: [{ model: model.profile }],
                        where: {
                            userid: userid
                        }
                    }).then((result) => {
                        console.log(result)
                        res.json({
                            soulfri: soulfri,
                            interfri: interfri,
                            plusfri: addfri,
                            invitfri: invitefri,
                            friend: result
                        })
                    })
                })
            })
        })
    })
})


router.post('/cancelfriend', (req, res) => {
    console.log("---------------친구요청 취소-----------")
    let userid = req.user.u_id
    let targetid = req.body.targetid
    model.addfriends.destroy({
        where: {
            userid: userid,
            targetid: targetid
        }
    }).then((result) => {
        res.json({
            message: '친구요청을 취소하였습니다.'
        })
    })
})


router.post('/receptfriend', (req, res) => {
    console.log("---------------친구추가-----------")
    let userid = req.user.u_id
    let targetid = req.body.targetid
    console.log('유저아이디----' + userid)
    console.log('타겟아이디----' + targetid)
    model.friends.create({
        userid: userid,
        targetid: targetid,
        profileUserid: targetid
    }).then((result) => {
        model.invitefris.destroy({
            where: {
                userid: userid,
                targetid: targetid
            }
        }).then((result) => {
            res.json({
                message: "친구요청을 수락하였습니다."
            })
        })
    })
})

module.exports = router;