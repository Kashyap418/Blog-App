import express from "express";
// import cors from 'cors';

// const app = express();

// app.use(cors());

import { signUserUp, loginUser } from "../controller/user-controller.js";
import { getImage, uploadImage } from "../controller/image-controller.js";

import upload from "../utils/upload.js";

import { createPost, getAllPosts, getPost, updatePost, deletePost } from "../controller/post-controller.js";
import { newComment ,getComments,deleteComment} from "../controller/comment-controller.js";
import { authenticateToken } from "../controller/jwt-controller.js";

const router = express.Router();


router.post('/signup', signUserUp);
router.post('/login', loginUser);
router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);
router.post('/create', authenticateToken, createPost); ///check
router.get('/posts', authenticateToken, getAllPosts);
router.get('/post/:id', authenticateToken, getPost);
router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);

router.post('/comment/new',authenticateToken,newComment);
router.get('/comments/:id',authenticateToken,getComments);
router.delete('/comment/delete/:id',authenticateToken,deleteComment)

export default router;