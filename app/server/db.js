const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/homebar', {useNewUrlParser: true, useUnifiedTopology: true});

// 2. Set up any schema and models needed by the app

let drinkSchema = mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  glass: String,
  image: String,
  instructions: String,
  alcoholic: String,
  favorite: Boolean,
  ingredients: []
});

let Drink = mongoose.model('drink', drinkSchema);

// let example = new Drink({
//   id: 17834,
//   name: 'Abbey Cocktail',
//   category: "Ordinary Drink",
//   glass: "Cocktail glass",
//   image: "https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg",
//   instructions: "Shake all ingredients (except for the cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
//   favorite: true,
//   alcoholic: "Alcoholic",
//   ingredients: ['1 1/2 oz Gin', '1 dash Orange bitters', 'Juice of 1/4 Orange', '1 Cherry']
// })
// example.save();

// 3. Export the models
module.exports.Drink = Drink;