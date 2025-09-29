const http = require('http');

http.get('http://localhost:3000/books', (res) => {
  let buf = '';
  res.on('data', chunk => buf += chunk);
  res.on('end', () => {
    console.log('Async callback result:', JSON.parse(buf));
  });
}).on('error', err => console.error(err));
