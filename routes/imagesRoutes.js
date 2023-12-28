const express = require("express");
const router = express.Router();
const fs = require("fs")

const images = JSON.parse(fs.readFileSync(`data/images.json`));

router.get("/", (req, res) => {
    res.json(images)
})
 

module.exports = router;