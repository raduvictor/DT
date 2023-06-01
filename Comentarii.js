import Comentariu from "./CommentModel.js";

export const getAllComments = async (req, res) => {
    try {
        const comments = await Comentariu.findAll();
        res.json(comments);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateComment = async (req, res) => {
    try {
        await Comentariu.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const addComment = async (req, res) => {
    try {
        const comment = await Comentariu.create(req.body);
        res.json(comment);
    } catch (error) {
        res.json({ message: error.message });
    }  
}