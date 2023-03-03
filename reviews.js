const express = require('express');
const app = express();

// Review data
const reviews = [
  { id: 1, movieId: 1, text: 'A great movie', rating: 5 },
  { id: 2, movieId: 1, text: 'A classic', rating: 5 },
  { id: 3, movieId: 2, text: 'The Godfather is a masterpiece', rating: 5 }
];

// Route to retrieve movie reviews
app.get('/reviews/:movieId', (req, res) => {
  const movieReviews = reviews.filter(r => r.movieId === parseInt(req.params.movieId));
  if (!movieReviews.length) return res.status(404).send('Reviews not found');
  res.send(movieReviews);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Review service listening on port ${port}`));
