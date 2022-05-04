const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());




app.get('/bar', (req, res) => {
  res.send('Hello Word')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})