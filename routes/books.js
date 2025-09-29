const express = require('express');
const router = express.Router();
const books = require('../data/books.json');
const { authRequired } = require('../middleware/auth');

// General users
router.get('/books', (req, res) => res.json(Object.values(books)));

router.get('/isbn/:isbn', (req, res) => {
  const b = books[req.params.isbn];
  if (!b) return res.status(404).json({ error: 'Not found' });
  res.json(b);
});

router.get('/author/:author', (req, res) => {
  const list = Object.values(books).filter(b => b.author.toLowerCase() === req.params.author.toLowerCase());
  res.json(list);
});

router.get('/title/:title', (req, res) => {
  const list = Object.values(books).filter(b => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
  res.json(list);
});

router.get('/review/:isbn', (req, res) => {
  const b = books[req.params.isbn];
  if (!b) return res.status(404).json({ error: 'Not found' });
  res.json(b.reviews);
});

// Registered users: add/modify/delete own review
router.post('/auth/review/:isbn', authRequired, (req, res) => {
  const { review } = req.body;
  const b = books[req.params.isbn];
  if (!b) return res.status(404).json({ error: 'Not found' });
  b.reviews[req.user.username] = review || '';
  res.json({ ok: true, reviews: b.reviews });
});

router.delete('/auth/review/:isbn', authRequired, (req, res) => {
  const b = books[req.params.isbn];
  if (!b) return res.status(404).json({ error: 'Not found' });
  delete b.reviews[req.user.username];
  res.json({ ok: true, reviews: b.reviews });
});

module.exports = router;
