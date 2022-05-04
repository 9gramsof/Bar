const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/homebar', {useNewUrlParser: true, useUnifiedTopology: true});

// 2. Set up any schema and models needed by the app

let drinkSchema = mongoose.Schema({
  name: String,
  description: String
});

let Drink = mongoose.model('drink', drinkSchema);

// let example = new Term({term: 'school', description: 'an establishment where students go to learn' })
// example.save();

// 3. Export the models
module.exports.Drink = Drink;