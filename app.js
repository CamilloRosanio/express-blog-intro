/***************************************************************
# SETUP DI EXPRESS JS
****************************************************************/

/*
Eseguo gli step scritti sotto solo DOPO:
1)  Aver eseguito "npm init"
2)  Aver creato l'ENTRY POINT "app.js"
3)  Aver aggiunto al PACKAGE.JSON i due SCRIPT (start + dev)

A questo punto:
-   Dichiaro Express come variabile come segue
-   Richiamo la "funzione" Express
-   Dichiaro la PORT tramite cui eseguirò il LISTEN
-   Scrivo la riga che stabilisce dove raccogliere gli STATIC ASSETS (pubblici) e creo una CARTELLA nella DIRECTORY con lo stesso nome
-   Dall'APP (Express) dichiaro la ROUTE (ROTTA) della Home della mia App, e cosa succede quando viene eseguito il GET
-   Dichiaro infine il LISTEN
*/




// Dichiarazione dei REQUIRE
const path = require('path');
const postArray = require('./main.js');


// Dichiarazione EXPRESS JS

const express = require('express');
const app = express();
const port = 3000

// Dichiarazione degli STATIC ASSETS (PUBLIC)
app.use(express.static('public'))


// Dichiarazione delle ROUTE

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})


// ROUTE bacheca (senza FILTER)
// app.get('/bacheca', (req, res) => {
//     let bachecaArray = {
//         postNum: postArray.length,
//         posts: postArray
//     }

//     res.json(bachecaArray);
// })


// ROUTE bacheca (con FILTER)
app.get('/bacheca', (req, res) => {

  // Tramite REQ.QUERY richiamo il parametro "term" (nome custom arbitrario) inserito nell'URL e lo dichiaro come variabile
  // Con l'OPERATOR ?? mi assicuro che SE il valore esiste, uso il valore, altrimenti uso il DEFAULT (in questo caso stringa vuota)
  const term = req.query.term ?? '';

  let filteredPosts;

  filteredPosts = postArray.filter((post) => {

      // In questo caso sto filtrando per i post in cui nel TITLE è contenuto il TERM (portati entrambi a Lowercase così evito il problema del Case-Sensitive)
      const titleIncludesTerm = post.title.toLowerCase().includes(term.toLowerCase());

      // Ora voglio cercare anche nei TAGS, che è un Array, quindi setto prima la variabile sotto come FALSE
      let tagsIncludesTerm = false;

      // Scorro ciascun TAG per vedere se include il mio TERM
      post.tags.forEach((tag) => {
          if (tag.toLowerCase().includes(term.toLowerCase())) tagsIncludesTerm = true;
      })

      // Il risultato è BOOLEANO, e visto che ho due condizioni le lego con un OR (in questo caso)
      return titleIncludesTerm || tagsIncludesTerm;
  })

  // La RESPONSE sarà l'OBJECT filtrato.
  // E' bene avere SEMPRE SOLO UNA RESPONSE
  res.json({
    postNum: filteredPosts.length,
    posts: filteredPosts,
  });
})




app.listen(port, () => {
  console.log(`Listen attivo e in ascolto sulla PORT ${port}`)
})