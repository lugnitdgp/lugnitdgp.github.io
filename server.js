const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
app.use(history());
app.use(express.static('dist'));
app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});
app.listen(8080, () => console.log('server started'));