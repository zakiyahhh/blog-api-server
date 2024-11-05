import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        const filename = `${Date.now()}-${file.originalname}`
        cb(null, filename)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.type === 'image/jpg' || file.type === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

export const upload = multer({
    storage,
    fileFilter
})