const axios = require('axios');
axios.get('http://localhost:3000/review/9780001').then(r => console.log(r.data));
