const axios = require('axios');
axios.get('http://localhost:3000/books').then(r => {
  console.log('All books:', r.data);
});
