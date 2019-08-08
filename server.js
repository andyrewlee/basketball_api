// Loads node module named express from node_modules directory
// and stores it in constant called express
const express = require('express')

// Constant express is a function that we can call which returns
// an app object that we can add listeners to
const app = express();

// Specify what port we want our development server to run in
const port = 4567;

const players = [
  { id: 18, name: 'Kobe' },
  { id: 19, name: 'Fisher' },
  { id: 20, name: 'Curry' },
  { id: 21, name: 'Durant' },
  { id: 22, name: 'Lebron' },
  { id: 23, name: 'Thompson' },
  { id: 24, name: 'Green' },
];

app.get('/', (req, res) => res.send('Hello hm!'));
app.get('/about', (req, res) => res.send('About'));
app.get('/players', (req, res) => res.json(players));
app.get('/players/:id', (req, res) => {
  const playerId = req.params.id;
  let selectedPlayer;

  for (let i = 0; i < players.length; i += 1) {
    const currentPlayer = players[i];
    if (currentPlayer.id === parseInt(playerId)) {
      selectedPlayer = currentPlayer;
    }
  }

  res.json(selectedPlayer);
});

// Tell app to listen to HTTP requests on port 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
