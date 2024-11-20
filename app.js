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


// Dichiaro il REQUIRE del DOTENV
const dotEnv = require('dotenv').config();

// Dichiarazione dei REQUIRE
const path = require('path');
const postArray = require('./db-simulation/posts.js');


// Dichiarazione EXPRESS JS

const express = require('express');
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.static('public'))


// Dichiarazione del ROUTER

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})




// ROUTE bacheca (con FILTER)
app.get('/bacheca', (req, res) => {

  const term = req.query.term ?? '';

  let filteredPosts;

  filteredPosts = postArray.filter((post) => {

      const titleIncludesTerm = post.title.toLowerCase().includes(term.toLowerCase());

      let tagsIncludesTerm = false;

      post.tags.forEach((tag) => {
          if (tag.toLowerCase().includes(term.toLowerCase())) tagsIncludesTerm = true;
      })

      return titleIncludesTerm || tagsIncludesTerm;
  })

  res.json({
    postNum: filteredPosts.length,
    posts: filteredPosts,
  });
})




app.listen(port, () => {
  console.log(`Listen attivo e in ascolto su ${host}:${port}`)
})