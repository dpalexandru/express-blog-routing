const express = require('express');
const router = express.Router();

//definisco la route principale Index
router.get("/", (req, res) => {
    res.send("Lista dei miei post")
});

//definisco la route principale con id
router.get("/:id", (req, res) => {
    res.send(`Dettagli postn n: ${req.params.id}`)
});

//definisco la route per Creare un post
router.post("/", (req, res) => {
    res.send(`Sezione creazione post`)
});


//esporto le route
module.exports = router;