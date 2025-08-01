const express = require('express');
const router = express.Router();

//definisco la route principale

router.get("/", (req, res) => {
    res.send("Lista dei post")
});

//esporto le route
module.exports = routers;