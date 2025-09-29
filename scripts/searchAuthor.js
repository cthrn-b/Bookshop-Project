const axios = require('axios');
(async () => {
  const { data } = await axios.get('http://localhost:3000/author/Alice%20Cruz');
  console.log('By author:', data);
})();
