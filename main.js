// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)



const postArray = [
    {
        title: 'Ciambellone',
        content: 'Delizioso ciambellone',
        img: '/img/ciambellone.jpeg',
        tags: ['ciambellone', 'Dolce', 'Torte']
    },
    {
        title: 'Cracker di barbabietola',
        content: 'Preparazione cracker di barbabietola',
        img: '/img/cracker_barbabietola.jpeg',
        tags: ['barbabietola', 'Cracker', 'impasto', 'salato']
    },
    {
        title: 'Pane fritto',
        content: 'Come fare il pane fritto',
        img: '/img/pane_fritto_dolce.jpeg',
        tags: ['dolce', 'Pane fritto']
    },
    {
        title: 'Pasta di barbabietola',
        content: 'Come preparare la pasta alla barbabietola',
        img: '/img/pasta_barbabietola.jpeg',
        tags: ['barbabietola', 'pasta', 'impasto', 'salato']
    },
    {
        title: 'Torta paesana',
        content: '',
        img: '/img/torta_paesana.jpeg',
        tags: ['torte', 'torta paesana', 'dolce']
    }
]





// EXPORT dell'Array per utilizzo su altri file JS
module.exports = postArray;