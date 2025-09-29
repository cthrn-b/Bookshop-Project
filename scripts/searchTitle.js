const axios = require('axios');
(async () => {
  const { data } = await axios.get('http://localhost:3000/title/javascript');
  console.log('By title:', data);
})();
