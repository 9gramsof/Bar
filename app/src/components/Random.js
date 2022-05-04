import React from 'react';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import Box from '@mui/material/Box';
import DrinkCard from './Card.js';
const axios = require("axios");

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: false,
      drink: {
        name: '',
        category: '',
        glass: '',
        image: '',
        instructions: '',
        alcoholic: '',
        ingredients: []
      }
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((res) => {
      let drink = res.data.drinks[0];
      let RandomDrink = {
        name: drink.strDrink,
        category: drink.strCategory,
        glass: drink.strGlass,
        image: drink.strDrinkThumb,
        instructions: drink.strInstructions,
        alcoholic: drink.strAlcoholic,
        ingredients: [
          drink.strIngredient1 + ', ' + drink.strMeasure1,
          drink.strIngredient2 + ', ' + drink.strMeasure2,
          drink.strIngredient3 + ', ' + drink.strMeasure3,
          drink.strIngredient4 + ', ' + drink.strMeasure4,
          drink.strIngredient5 + ', ' + drink.strMeasure5,
          drink.strIngredient6 + ', ' + drink.strMeasure6,
          drink.strIngredient7 + ', ' + drink.strMeasure7,
          drink.strIngredient8 + ', ' + drink.strMeasure8,
          drink.strIngredient9 + ', ' + drink.strMeasure9,
          drink.strIngredient10 + ', ' + drink.strMeasure10,
          drink.strIngredient11 + ', ' + drink.strMeasure11,
          drink.strIngredient12 + ', ' + drink.strMeasure12,
          drink.strIngredient13 + ', ' + drink.strMeasure13,
          drink.strIngredient14 + ', ' + drink.strMeasure14,
          drink.strIngredient15 + ', ' + drink.strMeasure15
        ]
      }
      console.log(RandomDrink);
      this.setState({
        showCard: true,
        drink: RandomDrink
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    let RandomDrink;
    if (this.state.showCard) {
      RandomDrink = <DrinkCard drink={this.state.drink} />
    }

    return (
      <Box sx={{display: 'flex', flexDirection: 'column', "justify-content": 'center'}} >
        <Box>Click me for a random drink!</Box>
        <Box><LocalBarIcon sx={{ fontSize: 100 }} className="Random" onClick={this.handleClick}/></Box>
        <Box sx={{display: 'flex', flexDirection: 'row', "justify-content": 'center'}}>{RandomDrink}</Box>
      </Box>
    )
  }
}

export default Random;