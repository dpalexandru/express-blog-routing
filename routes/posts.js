const express = require('express');
const router = express.Router();

//definisco la route principale

router.get("/", (req, res) => {
    res.send("Lista dei miei post")
});

//esporto le route
module.exports = router;