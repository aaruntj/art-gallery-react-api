const express = require("express");
const router = express.Router();
const fs = require("fs")

const profiles = JSON.parse(fs.readFileSync(`data/profiles.json`));

router.get("/", (req, res) => {
    res.json(profiles)
})
 

module.exports = router;