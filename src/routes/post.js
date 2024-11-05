import express from 'express'
import {
    body
} from 'express-validator'
import {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
} from '../controllers/post.js'
import {
    upload
} from '../middlewares/upload.js'
import {
    validationRequest
} from '../middlewares/validateRequest.js'

const router = express.Router()

router.get(
    '/post',
    getPosts
)
router.get(
    '/post/:id',
    getPostById
)
router.post(
    '/post',
    upload.single('image'),
    [
        body('title').not().isEmpty().withMessage('Title is required'),
        body('body').not().isEmpty().withMessage('Body is required')
    ],
    validationRequest,
    createPost
)

router.put(
    '/post/:id',
    upload.single('image'),
    [
        body('title').not().isEmpty().withMessage('Title is required'),
        body('body').not().isEmpty().withMessage('Body is required')
    ],
    validationRequest,
    updatePost
)

router.delete(
    '/post/:id',
    deletePost
)

export default router