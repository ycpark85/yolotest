const express = require('express')
const passport = require('passport')
const router = express.Router()
const model = require('../model')
let upload = require('../utils/fileUploads')
const Sequelize = require('sequelize')
const cors = require('cors')
const Op = Sequelize.Op


let cpup = upload.fields([{ name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 }, { name: 'thum', maxCount: 3 }, { name: 'pimg', maxCount: 5 }, { name: 'proimg', maxCount: 1 }
])

router.post('/addprofile', cpup, (req, res) => {
    let { nickname, blood, state, job, married, love, char, inter, apear } = req.body
    let proimg = req.files['proimg'][0].filename
    let userid = req.user.u_id
    console.log(userid, nickname, blood, state, job, married, love, proimg, typeof char, inter, apear)

    model.profile.create({
        userid: userid,
        nickname: nickname,
        image: proimg,
        blood: blood,
        locate: state,
        job: job,
        marred: married,
        charecter: char,
        interest: inter,
        apear: apear,
        love: love,
        usersId: userid
    }).then(() => {
        console.log('업데이트 완료')
        res.status(200).json({ message: 'success' })
    })




})
router.post('/addlikes', (req, res) => {
    console.log('/--------------------/좋아요')
    let userid = req.user.u_id
    let postid = req.body.postcode
    model.likes.findOrCreate({
        where: {
            postid: postid,
            userid: userid
        },
        default: {
            postid: postid,
            userid: userid
        }
    }).spread((likes, crated) => {
        if (crated) {
            console.log('--------추가됨-------------')
            res.json({ ilikes: '추가됨' })
        } else {
            console.log('--------삭제됨-------------')
            model.likes.destroy({
                where: {
                    postid: postid,
                    userid: userid
                }
            }).then((result) => {
                console.log(result)
                res.json({
                    ilikes: '삭제됨'
                })
            })
        }
    })
})







router.post('/likeadd', (req, res, next) => {
    console.log('add' + req.body.userid, req.body.postid)
    let postid = req.body.postid
    let userid = req.body.userid
    model.likes.create({
        postid: postid,
        userid: userid
    }).then(() => {

    }).finally(() => {

    })

})

router.post('/likedelete', (req, res, next) => {
    console.log('delete' + req.body.userid, req.body.postid)
    let postid = req.body.postid
    let userid = req.body.userid
    model.likes.destroy({
        where: {
            postid: postid,
            userid: userid,

        }
    }).then(() => {

    })
})

router.post('/postinsert', cpup, (req, res, next) => {
    console.log('포스트 등록하자.')
    let post_img = ""
    for (var i = 0; i < req.files['pimg'].length; i++) {
        console.log("thum_image:" + req.files['pimg'][i].filename)
        post_img += req.files['pimg'][i].filename + "/"
    }
    let postmain = req.files['pimg'][0].filename
    let contents = req.body.ptext
    let hashtag = req.body.tag

    let userid = req.user.u_id
    model.posts.create({
        userid: userid,
        mainimg: postmain,
        postimg: post_img,
        contents: contents,
        hashtag: hashtag,
        profileUserid: userid

    }).then((result) => {
        res.status(200).json({ message: 'success' })

    })

})

router.post('/game', (req, res) => {
    let userid = req.user.u_id
    let gender = req.user.gender
    var s_friend = '';
    let arryid = []

    let man = 0
    let woman = 0
    if (gender == 'man') {
        man = 2
        woman = 3
    } else {
        man = 3
        woman = 2
    }
    let { matnum, cate } = req.body
    console.log(userid, matnum, cate)
    model.game.findOrCreate({
        where: {
            userid: userid,
            gate: cate
        },
        defaults: {
            userid: userid,
            matnum: matnum,
            gate: cate,
            gender: gender
        }
    }).spread((game, created) => {
        if (created) {
            console.log('새로 만들어짐')
        } else {
            console.log('업데이트됨')
            return model.game.update({
                matnum: matnum
            }, {

                where: {
                    userid: userid,
                    gate: cate
                }

            })
        }
    }).then(() => {
        model.game.findAll({
            raw: true,
            attributes: ['userid'],
            where: {
                gate: cate,
                matnum: matnum,
                userid: {
                    [Op.notIn]: [userid]
                }
            },
        }).then((result) => {

            var stest = []
            for (var i = 0; i < result.length; i++) {
                arryid.push(result[i].userid)
                s_friend += result[i].userid + '/'
                stest = s_friend.split('/').filter(x => x)
            }
            for (var i = 0; i < stest.length; i++) {
                var t = stest[i]
                console.log(i, '는', t)
            }
            console.log('stets=', stest)
            console.log('s_friend=', s_friend)
            console.log('arryid=', arryid)
            model.soulfriends.findOrCreate({
                where: {
                    userid: userid,
                    categorie: cate
                },
                defaults: {
                    userid: userid,
                    s_friend: s_friend,
                    categorie: cate
                }

            }).spread((soul, created) => {
                if (created) {
                    console.log('새로 만들어짐')
                } else {
                    console.log('업데이트됨')
                    return model.soulfriends.update({
                        s_friend: s_friend
                    }, {
                        where: {
                            userid: userid,
                            categorie: cate
                        }

                    })
                }
            })
        }).then(() => {
            model.profile.findAll({
                raw: true,
                where: {
                    userid: arryid
                }

            }).then((result1) => {
                console.log(result1)
                res.json({
                    profile: result1
                })
            })
        })
    })

})




router.get('/detail', (req, res) => {
    console.log("세션아이디:", req.user.u_id)
    let userId = req.query.userid
    console.log(userId)
    let pro = {}
    let inter = 'icon-bookmark'
    let post = []
    model.profile.find({
        raw: true,
        where: { userid: userId }
    }).then((result) => {
        pro = result
        model.interfriends.find({
            where: {
                userid: req.user.u_id,
                targetid: userId
            }

        }).then((result) => {
            if (result) {
                inter = 'icon-mark'
            }
            model.posts.findAll({
                raw: true,
                where: {
                    userid: userId
                }
            }).then((result) => {
                post = result
                console.log('포스트', post)
                console.log('inter:', inter)
                console.log('pro:', pro)
                res.json({
                    userid: req.user.u_id,
                    profile: pro,
                    interest: inter,
                    posts: post
                })
            })
        })
    })


})

router.get('/profile', (req, res) => {
    console.log('여기왔냐?')
    console.log('유저아이디:', req.query.userid)
    let userid = req.query.userid
    let profile = {}
    let name = req.user.name
    let gender = req.user.gender
    let birth = req.user.birth
    let habi = []
    let habicode = []
    model.profile.find({
        raw: true,
        where: { userid: userid }
    }).then((result) => {
        console.log(result)
        profile = result
        model.conlikes.findAll({
            raw: true,
            attributes: ['adminContentHabiCode'],
            where: {
                profileUserid: userid
            }
        }).then((result) => {
            for (var i = 0; i < result.length; i++) {
                habicode.push(result[i].adminContentHabiCode)
            }

            console.log(habicode)
            model.admin_contents.findAll({
                raw: true,
                where: {
                    habi_code: habicode
                }
            }).then((result) => {
                habi = result
                console.log(name)
                console.log(gender)
                console.log(habi)

                res.json({
                    name: name,
                    gender: gender,
                    birth: birth,
                    profile: profile,
                    habi: habi
                })
            })
        })
    })

})

router.post('/viewprofile', (req, res) => {
    console.log("뷰프로필 유저아이디:", req.user.u_id)
    let targetid = req.body.targetid
    let userid = req.user.u_id
    model.sumtickets.find({
        raw: true,
        where: {
            userUId: userid
        }
    }).then((result) => {
        if (result.pticket < 1) {
            return res.json({
                info: false
            })
        } else {
            model.sumtickets.update({
                pticket: result.pticket - 1
            }, {
                where: {
                    userUId: userid
                }
            }).then(() => {
                model.pticketlists.create({
                    class: '사용',
                    useid: targetid,
                    ticketcount: 1,
                    userUId: userid
                }).then(() => {
                    model.profile.find({
                        raw: true,
                        where: { userid: targetid }
                    }).then((result) => {
                        console.log(result)
                        res.json({
                            pofile: result
                        })


                    })
                })





            })
        }
    })


})




router.get('/letter', (req, res, next) => {
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






//포스트 관련 라우터
router.get('/postlist', (req, res) => {
    console.log('유저아이디', req.user.u_id)
    let friends = []
    let userid = req.user.u_id
    let post = []
    model.interfriends.findAll({
        raw: true,
        where: {
            userid: userid
        }
    }).then((result) => {
        for (var i = 0; i < result.length; i++) {
            friends.push(result[i].targetid)
        }
        friends.push(userid)
        console.log('friends:', friends)

    }).then(() => {
        model.posts.findAll({
            raw: true,
            include: [
                { model: model.profile },
            ],
            where: {
                userid: friends
            },
            order: [
                ['postcode', 'DESC']
            ]
        }).then((result) => {
            console.log(result)
            post = result
            model.likes.findAll({
                raw: true,
                where: {
                    userid: userid
                }
            }).then((result) => {
                console.log(result)
                res.json({
                    post: post,
                    likes: result,
                    userid: userid
                })
            })
        })
    })
})
router.get('/likelist', (req, res) => {

        console.log('라이크 왔음.')
        let userid = req.user.u_id
        model.likes.findAll({
            raw: true,
            where: {
                userid: userid
            }
        }).then((result) => {
            console.log(result)
            res.json({
                likes: result
            })
        })
    })
    //--------------------my------------------------------------------------//

router.get('/my', (req, res) => {
    console.log("왔나? 유", req.user.u_id)
    let userid = req.user.u_id
    let propage = {}
    let post = []
    model.profile.find({
        raw: true,
        where: {
            userid: userid
        }
    }).then((result) => {
        console.log(result)
        propage = result
    }).then(() => {
        model.posts.findAll({
            raw: true,
            include: [
                { model: model.profile }
            ],
            where: {
                userid: userid
            }
        }).then((result) => {
            post = result
            console.log(post)
            res.json({
                posts: post,
                profile: propage
            })
        })
    })
})

router.get('/coupon', (req, res) => {
    console.log('userid:', req.user.u_id)
    let userid = req.user.u_id
    model.sumtickets.find({
        raw: true,
        where: {
            userUId: userid
        }
    }).then((result) => {
        console.log(result)
        res.json({
            coupon: result
        })
    })
})

router.post('/addlticket', (req, res) => {
    console.log('userid:', req.user.u_id)
    let userid = req.user.u_id
    model.lticketlists.create({
        class: '충전',
        ticketcount: req.body.count,
        userUId: userid
    }).then(() => {
        model.sumtickets.find({
            row: true,
            where: {
                userUId: userid
            }
        }).then((result) => {
            let sum = result.lticket + req.body.count
            let point = result.point - req.body.point
            model.sumtickets.update({
                lticket: sum,
                point: point
            }, {
                where: {
                    userUId: userid
                }
            }).then(() => {
                model.sumtickets.find({
                    row: true,
                    where: {
                        userUId: userid
                    }
                }).then((result) => {
                    res.json({ coupon: result })
                })
            })
        })
    })
})

router.post('/addpticket', (req, res) => {
    let userid = req.user.u_id
    model.pticketlists.create({
        class: '충전',
        ticketcount: req.body.count,
        userUId: userid
    }).then(() => {
        model.sumtickets.find({
            row: true,
            where: {
                userUId: userid
            }
        }).then((result) => {
            let sum = result.pticket + req.body.count
            let point = result.point - req.body.point
            model.sumtickets.update({
                pticket: sum,
                point: point
            }, {
                where: {
                    userUId: userid
                }
            }).then(() => {
                model.sumtickets.find({
                    row: true,
                    where: {
                        userUId: userid
                    }
                }).then((result) => {
                    res.json({ coupon: result })
                })
            })
        })
    })
})
router.get('/info', (req, res) => {
    let name = req.user.name
    let gender = req.user.gender
    let birth = req.user.birth
    res.json({
        name: name,
        gender: gender,
        birth: birth
    })
})

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/api/v1.0/users/signup/success',
    failureRedirect: '/api/v1.0/users/fail'
}))
router.get('/kakao', passport.authenticate('kakao-login'));

router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/signup'
}), (res, req) => {
    res.redirect('/')
})

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/api/v1.0/users/success',
    failureRedirect: '/api/v1.0/users/fail'
}))

router.put('/signout', (req, res) => {
    req.logout()
    res.status(201).json({})
})

router.get('/session-check', (req, res) => {
    console.log(req.user)
    res.status(200).json(req.user)
})
router.get('/signup/success', (req, res) => {
    console.log(req.user.u_id)
    model.sumtickets.create({
        userUId: req.user.u_id
    }).then(() => {
        console.log('석세스')
        res.status(200).json({})
    })

})
router.get('/success', (req, res) => {
    console.log('석세스')
    res.status(200).json({})
})

router.get('/fail', (req, res) => {
    console.log('fail')
    res.status(204).json({})
})

module.exports = router;