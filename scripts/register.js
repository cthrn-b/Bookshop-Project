const axios = require('axios');
axios.post('http://localhost:3000/register', { username: 'june', password: 'pass123' })
  .then(r => console.log('Registered:', r.data))
  .catch(e => console.log(e.response?.data || e.message));
