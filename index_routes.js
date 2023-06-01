import express from "express";
 


import {
    addComment,
    getAllComments, 
    updateComment} from "../nod2/Comentarii.js";
const router = express.Router();
 router.get('/', getAllComments);
router.patch('/:ID', updateComment);
router.post('/ccc', addComment)



 
export default router;