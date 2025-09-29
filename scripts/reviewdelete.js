const axios = require('axios');
(async () => {
  const { data } = await axios.post('http://localhost:3000/login', { username: 'june', password: 'pass123' });
  const token = data.token;
  const res = await axios.delete(
    'http://localhost:3000/auth/review/9780001',
    { headers: { Authorization: `Bearer ${token}` } }
  );
  console.log('Review deleted:', res.data);
})();
