const express = require("express");
const router = express.Router();

const home = require("../controller/home");
const article = require("../controller/articles")
const about = require("../controller/about")



router.get("/", home.User);


router.get("/articles", article.articles);


router.get("/about", about.About);



module.exports = router;