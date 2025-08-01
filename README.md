express-blog-routing
===
### Esercizio
 
 Creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
 
 All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
 
 Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
 
 Ad esempio: 
 
 Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;
 
 Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”
 
 e via dicendo…
 
 Registrare il router dentro app.js con il prefisso posts/.
 
 Nota:
 
 Avete anche l’array dei post che vi abbiamo fornito, salvatelo da qualche parte.
 Ci servirà per i prossimi step.
 Per oggi vi può servire in caso vogliate provare i bonus.
 
 ### Bonus
 
 
Provare a restituire la lista dei post dalla rotta index, in formato json
Provare a restituire un singolo post dalla rotta show, sempre in formato json

Buon Lavoro

### Cosa ho imparato 
In questo esercizio ho imparato a creare un'applicazione backend con Express.js, organizzando le rotte in modo modulare tramite Router e collegandole al file principale dell’app. Ho capito come gestire richieste HTTP di tipo GET, POST, PUT, PATCH e DELETE, utilizzando l'archittetura REST per la gestione delel richieste. Inoltre, ho imparato a leggere parametri dinamici dall’URL con req.params.id e usare forEach per cercare dati in un array. Questo esercizio mi ha fatto capire l'importanza di un progetto Express ben organizzato.

## Consegna 01/08/2025