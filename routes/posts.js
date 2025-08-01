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
    res.send(`Sezione creazione nuovo post`)
});

//definisco la route per Modificare totale un post
router.put("/:id", (req, res) => {
    res.send(`Modifica totale del post n: ${req.params.id}`)
});

//definisco la route per Modificare parziale di un post
router.patch("/:id", (req, res) => {
    res.send(`Modifica parziale del post n: ${req.params.id}`)
});

//definisco la route per Eliminare  di un post
router.delete("/:id", (req, res) => {
    res.send(`Cancellazione del post: ${req.params.id}`)
});

//esporto le route
module.exports = router;