import { Router } from "express";
import { createBlog } from "../controllers/blogs/createBlog";
import { listBlog } from "../controllers/blogs/listBlog";
import { listSpecificBlog } from "../controllers/blogs/listSpecificBlog";
import { fetchReactionsForBlog } from "../controllers/blogs/fetchReactionsForBlog";
import { getReactions } from "../controllers/blogs/getReactions";
import { addComments } from "../controllers/blogs/addComments";
import { listComments } from "../controllers/blogs/listComments";
import { addReaction } from "../controllers/blogs/addReactions";

const router: Router = Router();

router.post("/createBlog", createBlog);
router.get("/listBlog", listBlog);
router.get("/listSpecificBlog/:blogId", listSpecificBlog);
router.get("/reactions/:blogId", fetchReactionsForBlog);
router.get("/reactions", getReactions);
router.post("/addComment", addComments);
router.get("/listComments/:blogId", listComments);
router.post("/addReaction", addReaction);

export default router;
