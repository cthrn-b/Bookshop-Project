const axios = require('axios');
axios.post('http://localhost:3000/login', { username: 'june', password: 'pass123' })
  .then(r => console.log('Token:', r.data.token));
