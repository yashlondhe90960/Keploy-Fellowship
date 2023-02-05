const express = require("express");
const router = express.Router();

const Post = require("../model/Post");

//get all posts
router.get("/", async(_req,res) => {
    // res.send("I am inside posts");
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err});

        
    }

});


//save posts
router.post("/", async(_req , res) =>
{
   const post = new Post({
    title : _req.body.title,
    desc : _req.body.desc,
   });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
        
    } catch (err) {
        res.json({message: err});
    }
});

router.get("/:postId", async (_req,res) => {
    try {
        const post = await Post.findById(_req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err});

        
    }
});


module.exports = router;
