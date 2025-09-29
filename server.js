// server.js
const express = require('express');
const cors = require('cors');

const app = express();

// parsers
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // enables HTML form POSTs

// routes (CommonJS requires)
app.use('/', require('./routes/books.js'));
app.use('/', require('./routes/auth.js'));

// simple health + demo GET page so your browser GET works
app.get('/__health', (_req, res) => res.send('OK ' + new Date().toISOString()));

app.get('/register', (_req, res) => {
  res.send(`
    <h3>Register</h3>
    <form method="post" action="/register">
      <input name="username" placeholder="username" />
      <input name="password" placeholder="password" type="password" />
      <button type="submit">Register</button>
    </form>
  `);
});

app.get('/login', (_req, res) => {
  res.send(`
    <h3>Login</h3>
    <form method="post" action="/login">
      <input name="username" placeholder="username" />
      <input name="password" placeholder="password" type="password" />
      <button type="submit">Login</button>
    </form>
  `);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[BOOT] API running at http://localhost:${PORT}  @`, new Date().toLocaleTimeString());
});
