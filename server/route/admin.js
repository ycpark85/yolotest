const express = require('express')
const passport = require('passport')
const router = express.Router()
const randomStrin = require('random-string')
const { company, admin_contents, admin_cash, conlikes, profile, interfriends, friends, ivitefris, addfriends } = require('../model')
let upload = require('../utils/fileUploads')


router.get('/', (req, res, next) => {
    res.send('/admin')
})

let cpup = upload.fields([{ name: 'img1', maxCount: 1 }, { name: 'convideo', maxCount: 1 }, { name: 'img2', maxCount: 1 }, { name: 'thum', maxCount: 3 }])

// -------------------업체 등록----------------------------------------//
router.post('/companyinsert', cpup, (req, res, next) => {
        console.log('여기 오냐?')
        let { name, adress, phone } = req.body;
        let img = req.files['img2'][0].filename;
        var code = '';
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
        company.create({
            companycode: code,
            name: name,
            phone: phone,
            adress: adress,
            img: img
        })

    })
    // --------------업체 콘텐츠 등록--------------------------------------//
router.post('/addcontents', cpup, (req, res, next) => {
        console.log('콘텐츠 등록')
        let { title, adress, coment, tag, companycode } = req.body;
        let convideo = req.files['convideo'][0].filename;
        let thumimg = req.files['thum'][0].filename;
        console.log(thumimg)
        var code = '';
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
        admin_contents.create({
            habi_code: code,
            title: title,
            adress: adress,
            tag: tag,
            exp: coment,
            video: convideo,
            img: thumimg,
            companyCompanycode: companycode
        }).then((result) => {
            console.log(result)
            res.json(result)
        })

    })
    // ------------------업체리스트------------------------------//
router.get('/comlist', (req, res, next) => {
    console.log('컴퍼니 리스트')
    company.findAll({
        attributes: ['companycode', 'name']
    }).then((result) => {
        console.log(result)
        res.json({
            comlist: result
        })
    })
})

// ----------------------콘텐츠 리스트--------------------------//
router.get('/contentslist', (req, res, next) => {
        console.log('콘텐츠 리스트')
        let contents = []
        let userid = req.user.u_id
        let conlike = []

        admin_contents.findAll({
            raw: true,
            include: [
                { model: company },
            ],
            order: [
                ['updatedAt', 'DESC']
            ]
        }).then((result) => {
            console.log(result)
            contents = result
            conlikes.findAll({
                raw: true,
                where: {
                    profileUserid: userid
                }
            }).then((result) => {
                conlike = result
                conlikes.findAll({
                    raw: true
                }).then((result) => {
                    console.log(result)
                    res.json({
                        contents: contents,
                        conlikes: conlike,
                        alllike: result
                    })
                })
            })

        })
    })
    // ---------------------콘텐츠 좋아요----------------------------//
router.post('/likeplus', (req, res, next) => {
    let habi_code = req.body.habicode
    let userid = req.user.u_id
    conlikes.findOrCreate({
        where: {
            adminContentHabiCode: habi_code,
            profileUserid: userid
        }
    }).spread((likes, crated) => {
        if (crated) {
            console.log('----------추가됨----------')
            res.json({
                ilikes: '추가됨'
            })
        } else {
            console.log('------------삭제됨----------')
            conlikes.destroy({
                where: {
                    adminContentHabiCode: habi_code,
                    profileUserid: userid
                }
            }).then((result) => {
                res.json({
                    ilikes: '삭제됨'
                })
            })
        }
    })

})

// ---------------------list----------------------
router.post('/userlist', (req, res, next) => {
    console.log('-----유저 리스트-----')
    let habicode = req.body.postcode
    let userid = req.user.u_id
    let userlist = []
    let infriend = []
    let frined = []

    console.log(habicode)
    conlikes.findAll({
        raw: true,
        include: [
            { model: profile },
        ],
        where: {
            adminContentHabiCode: habicode
        }
    }).then((result) => {
        userlist = result
        console.log(userlist)

        interfriends.findAll({
            raw: true,
            where: {
                userid: userid
            }
        }).then((result) => {

            infriend = result

            friends.findAll({
                raw: true,
                where: {
                    userid: userid
                }
            }).then((result) => {
                friend = result
                res.json({
                    userlists: userlist,
                    userid: userid,
                    infriend: infriend,
                    friend: friend
                })
            })



        })

    })
})









// router.post('/registry', cpup, (req, res, next) => {
//     console.log("여기오나?")


//     if (!req.user) {
//         res.status(200).json({ message: '로그인후 등록하세요.' })
//     } else {
//         var code = '';
//         var x = randomStrin({
//             length: 3,
//             numeric: false,
//             special: false,
//         })
//         var y = randomStrin({
//             length: 6,
//             numeric: true,
//             letters: false,
//             special: false,

//         })
//         x = x.toUpperCase()
//         code = x + y;
//         console.log(code)
//         console.log("mainimage:" + req.files['img1'][0].filename)
//         console.log("teacherimage:" + req.files['img2'][0].filename)
//         console.log("thum:" + req.files['thum'].length)
//         let main_image = req.files['img1'][0].filename
//         let te_image = req.files['img2'][0].filename
//         let thum_img = ""
//         for (var i = 0; i < req.files['thum'].length; i++) {
//             console.log("thum_image:" + req.files['thum'][i].filename)
//             thum_img += req.files['thum'][i].filename + "/"
//         }
//         console.log(thum_img)

//         let { title, proid, adress, date, p_num, price, com, habi_info, notify, thum_video, target, profile, sc_info } = req.body
//         console.log('내용 :' + title, proid, adress, date, p_num, price, com, habi_info, notify)
//         admin_contents.create({
//             habi_code: code,
//             thum_video: thum_video,
//             thum_image: thum_img,
//             title: title,
//             start_date: proid,
//             re_start: date,
//             re_end: date,
//             adress: adress,
//             p_num: p_num,
//             target: target,
//             price: price,
//             main_image: main_image,
//             habi_info: habi_info,
//             sc_info: sc_info,
//             notice: notify,
//             te_image: te_image,
//             profile: profile,
//             adminUserAdminCode: req.user

//         }).then((result) => {
//             res.status(201).json({ message: 'success' })
//         })
//     }
// })
// router.get('/habilists', (req, res) => {
//     console.log('여기 와야하는데.')
//     admin_contents.findAndCountAll({
//         raw: true
//     }).then((result) => {
//         console.log(result.rows)
//         res.json({
//             habicon: result.rows

//         })
//     })
// })

// router.post('/signup', (req, res) => {
//     console.log('여기왔냐?')
//     var code = '';
//     var x = randomStrin({
//         length: 3,
//         numeric: false,
//         special: false,
//     })
//     var y = randomStrin({
//         length: 6,
//         numeric: true,
//         letters: false,
//         special: false,

//     })
//     code = x + y;
//     console.log(code)
//     let { uid, password, b_name, ceo_name, b_adress, ceo_phone, b_num } = req.body
//     admin_users.findOrCreate({
//         where: { uid: uid },
//         defaults: {
//             admin_code: code,
//             uid: uid,
//             password: password,
//             b_name: b_name,
//             ceo_name: ceo_name,
//             b_adress: b_adress,
//             ceo_phone: ceo_phone,
//             b_num: b_num
//         }
//     }).spread((user, created) => {
//         if (created) {
//             res.status(201).json({})

//         } else {
//             res.status(200).json({})
//         }
//     })


// })

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/api/v1.0/admin/signin/success',
        failureRedirect: '/api/v1.0/admin/signin/fail'
    }))

router.get('/signin/success', (req, res) => {
    console.log('석세스')
    res.status(200).json({})
})

router.get('/signin/fail', (req, res) => {
    console.log('fail')
    res.status(204).json({})
})

router.get('/session-check', (req, res) => {
    console.log(req.user)
    res.status(200).json(req.user)
})

module.exports = router;