const multer = require('multer')
const path = require('path')

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        //파일 업로드 경로
        if (file.fieldname == 'img1') {
            cb(null, path.join(__dirname, '../../uploads/admin/contentmain'))
        } else if (file.fieldname == 'img2') {
            cb(null, path.join(__dirname, '../../uploads/admin/profile'))
        } else if (file.fieldname == 'thum') {
            cb(null, path.join(__dirname, '../../uploads/admin/thumimg'))
        } else if (file.fieldname == 'pimg') {
            cb(null, path.join(__dirname, '../../uploads/user/post'))
        } else if (file.fieldname == 'proimg') {
            cb(null, path.join(__dirname, '../../uploads/user/profile'))
        } else if (file.fieldname == 'convideo') {
            cb(null, path.join(__dirname, '../../uploads/admin/video'))
        }


    },
    filename: function(req, file, cb) {
        cb(null, new Date().getTime() + file.originalname)
    }
})


module.exports = multer({ storage: storage })