import fs from 'fs'

export const uploadRemover = (filename) => {
    const path = `public/uploads/${filename}`
    fs.unlink(path, er => console.log(err))
}