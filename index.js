const express = require('express')
let app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const { Nuxt, Builder } = require('nuxt');
const config = require('./nuxt.config');
const routes = require('./server/route')
let nuxt = new Nuxt(config);

const http = require('http');
let server = http.createServer(app);
const session = require('express-session');
const passport = require('./server/utils/passports');

/*socket io 설정 */
const soket = require('socket.io')
const io = soket(server)
const mess = require('./server/route/mess')(io, soket)




app.use(session({
    secret: '#123#123#asd#qwe#QWER#128*(*&asdjlwereareyoufrom',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 } //1000*60*60*24==>하루
}));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(passport.initialize());
app.use(passport.session());




app.get('/uploads/:filename', (req, res) => { //파일을 제공하는 api임.
    let file = __dirname + '/uploads/' + req.params.filename
    fs.readFile(file, (err, data) => {
        res.end(data)
    })
})
app.get('/server/uploads/user/profile:filename', (req, res) => { //파일을 제공하는 api임.
    let file = __dirname + '/server/uploads/user/profile/' + req.params.filename
    fs.readFile(file, (err, data) => {
        res.end(data)
    })
})
app.get('/server/uploads/user/post:filename', (req, res) => { //파일을 제공하는 api임.
    let file = __dirname + '/server/uploads/user/post/' + req.params.filename
    fs.readFile(file, (err, data) => {
        res.end(data)
    })
})
app.get('/server/uploads/admin/profile:filename', (req, res) => { //파일을 제공하는 api임.
    let file = __dirname + '/server/uploads/admin/profile/' + req.params.filename
    fs.readFile(file, (err, data) => {
        res.end(data)
    })
})
app.get('/server/uploads/admin/video:filename', (req, res) => { //파일을 제공하는 api임.
    let file = __dirname + '/server/uploads/admin/video/' + req.params.filename
    fs.readFile(file, (err, data) => {
        res.end(data)
    })
})
app.get('/server/uploads/admin/thumimg:filename', (req, res) => { //파일을 제공하는 api임.
    let file = __dirname + '/server/uploads/admin/thumimg/' + req.params.filename
    fs.readFile(file, (err, data) => {
        res.end(data)
    })
})





app.use('/api/v1.0', routes)
app.use('/mess', mess)
app.use(nuxt.render);
const builder = new Builder(nuxt);
builder.build()






server.listen(80, () => {
    console.log('server on 80PORT')
})