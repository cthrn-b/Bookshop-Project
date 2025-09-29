const axios = require('axios');
axios.get('http://localhost:3000/author/Alice%20Cruz').then(r => console.log(r.data));
