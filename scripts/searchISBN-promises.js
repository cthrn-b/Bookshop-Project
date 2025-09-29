const axios = require('axios');
function getByIsbn(isbn) {
  return axios.get(`http://localhost:3000/isbn/${isbn}`).then(r => r.data);
}
getByIsbn('9780002').then(data => console.log('By ISBN:', data));
