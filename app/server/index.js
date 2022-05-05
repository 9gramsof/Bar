const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const { Drink } = require('./db');



app.get('/drink', (req, res) => {

  Drink.find({}).exec((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

})

app.post('/drink', (req, res) => {

  let drink = new Drink({
  id: req.body.id,
  name: req.body.name,
  category: req.body.category,
  glass: req.body.glass,
  image: req.body.image,
  instructions: req.body.instructions,
  favorite: req.body.favorite,
  alcoholic: req.body.alcoholic,
  ingredients: req.body.ingredients
})

// console.log(drink);
  drink.save((err, drink) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  })
})

app.delete('/drink', (req, res) => {
  let id = req.body.id
  Drink.deleteOne({id: id}, (err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  })
})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})