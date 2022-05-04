import React, { useState } from 'react';
const axios = require("axios");
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DrinkCard from './Card.js';
const Search = () => {

  const [name, setName] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [showCards, setShowCards] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
    console.log(name);
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((res) => {
      // console.log(res.data.drinks);
      let resultDrinks = res.data.drinks.map((drink, i) => {
        return ({name: drink.strDrink,
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
          ]})
      })
      setDrinks(resultDrinks);
      setShowCards(true);
      // console.log(resultDrinks);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  let display;
  if (showCards) {
    display = drinks.map((drink, i) => {
      return(<DrinkCard key={i} drink={drink} />)
    })
  }

  return (
    <Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSearch}>
      <TextField
      id="standard-basic"
      label="Search by name"
      variant="standard"
      value={name}
      onInput={e => setName(e.target.value)}
      />
      <Button type="submit">Go!</Button>
    </Box>

    <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', rowGap: 8, columnGap: 8, "justify-content": 'center' }}>{display}</Box>
    </Box>
  )
}

export default Search;