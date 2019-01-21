const express = require('express')

const router = express.Router()
const model = require('../model')
const upload = require('../utils/fileUploads')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/list', (req, res) => {
    console.log('유저아이디:' + req.user.u_id + '포스트 코드:' + req.query.postcode)
    let userid = req.user.u_id
    let postcode = req.query.postcode
    let post = {}
    let comment = {}
    model.posts.find({
        raw: true,
        include: [
            { model: model.profile }
        ],
        where: {
            postcode: postcode
        }
    }).then((result) => {
        post = result
        console.log(post)
    }).then(() => {
        model.comments.findAll({
            raw: true,
            include: [
                { model: model.profile }
            ],
            where: {
                postPostcode: postcode
            },
            order: [
                ['code', 'DESC']
            ]
        }).then((result) => {
            console.log("댓글 결과" + result)
            comment = result
            res.json({
                post: post,
                comments: comment,
                userid: userid
            })
        })
    })
})

router.post('/add', (req, res) => {
    console.log('유저아이디:' + req.user.u_id + '포스트 코드:' + req.body.postid + '댓글:' + req.body.content)
    model.comments.create({
        comments: req.body.content,
        postPostcode: req.body.postid,
        profileUserid: req.user.u_id
    }).then((result) => {
        if (result) {
            model.comments.findAll({
                raw: true,
                include: [
                    { model: model.profile }
                ],
                where: {
                    postPostcode: req.body.postid
                }
            }).then((result) => {
                console.log("댓글 결과" + { result })
                comment = result
                res.json({
                    comments: comment,
                    userid: req.user.u_id
                })
            })

        } else {

        }
    })
})

module.exports = router;