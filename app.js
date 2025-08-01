const express = require('express');
const app = express();
const port = 3000;

//creo la rotts principale 
app.get("/", (req, res) => {
    res.send("Benvenuto, collegamento riuscito")
})

//lascio il server in ascolto sulla porto stabilit
app.listen(port, () => {
    console.log("richiesta effettuata")
})