import {
    validationResult
} from "express-validator";

export const validationRequest = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Bad Request!",
            errors: errors.array()
        })
    }

    next()
}