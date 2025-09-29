const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../middleware/auth');

// tiny in-memory user store
const users = {}; // { username: { username, hash } }

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });
  if (users[username]) return res.status(409).json({ error: 'User exists' });
  const hash = await bcrypt.hash(password, 10);
  users[username] = { username, hash };
  res.status(201).json({ ok: true, username });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const u = users[username];
  if (!u) return res.status(401).json({ error: 'Invalid credentials' });
  const ok = await bcrypt.compare(password, u.hash);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ username }, SECRET, { expiresIn: '2h' });
  res.json({ token });
});

module.exports = router;
