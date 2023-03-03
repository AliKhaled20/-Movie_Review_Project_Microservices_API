const express = require('express');
const app = express();

// Movie catalog data
const movieCatalog = [
  { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola' },
  { id: 3, title: 'The Godfather: Part II', director: 'Francis Ford Coppola' }
];

// Route to retrieve movie information
app.get('/movies/:id', (req, res) => {
  const movie = movieCatalog.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('Movie not found');
  res.send(movie);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Movie catalog service listening on port ${port}`));
