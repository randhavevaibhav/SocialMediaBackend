import express from "express";

import {getFeedPosts,getUserPosts,likePost} from "../controllers/posts.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//read
//get all posts
router.get("/",verifyToken,getFeedPosts);

//get specific user posts
router.get("/:userId/posts",verifyToken,getUserPosts);

//update likes of specific post
router.patch("/:id/like",verifyToken,likePost);

export default router;