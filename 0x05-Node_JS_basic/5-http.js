const http = require('http');

const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write("Hello Holberton School!");
  } else if (req.url === '/students') {
    res.write("This is the list of our students\n");
    try {
      
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(port);

module.exports = app;
