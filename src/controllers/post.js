import Post from "../models/post.js";

export const createPost = async (req, res) => {
    const {
        title,
        body
    } = req.body;
    const image = req.file ? req.file.filename : null

    try {
        const post = new Post({
            title,
            body,
            image
        })
        const savePost = await post.save()

        return res.status(201).json({
            message: "Post created",
            data: savePost
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Unable to create post"
        })
    }
}