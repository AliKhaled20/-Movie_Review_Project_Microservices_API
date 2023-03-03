const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  try {
    const movieResponse = await axios.get(`http://localhost:3000/movies/${req.params.id}`);
    const reviewResponse = await axios.get(`http://localhost:3001/reviews/${req.params.id}`);
    res.send({
      movie: movieResponse.data,
      reviews: reviewResponse.data
    });
  } catch (error) {
    res.status(500).send('An error occurred while retrieving movie information');
  }
});

app.post('/authenticate', async (req, res) => {
  try {
    const response = await axios.post(`http://localhost:3002/authenticate`, req.body);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('An error occurred while authenticating the user');
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Movie review website listening on port ${port}`));
