const express = require('express');
const app = express();

// User data
const users = [
  { id: 1, username: 'john', password: 'password' },
  { id: 2, username: 'jane', password: 'password' }
];

// Route to authenticate a user
app.post('/authenticate', (req, res) => {
  const user = users.find(u => u.username === req.body.username && u.password === req.body.password);
  if (!user) return res.status(400).send('Username or password is incorrect');
  res.send(user);
});

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`User service listening on port ${port}`));
