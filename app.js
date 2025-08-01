const express = require('express');
const app = express();
const port = 3000;

//importo le routes 
const postRoutes = require('./routes/posts.js')

//creo la rotts principale 
app.get("/", (req, res) => {
    res.send("Benvenuto, collegamento riuscito")
});

//autorizzo all'uso delle routes a posts
app.use('/posts', postRoutes);

//lascio il server in ascolto sulla porto stabilit
app.listen(port, () => {
    console.log("richiesta effettuata")
})