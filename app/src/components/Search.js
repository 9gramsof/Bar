import React, { useState } from 'react';
const axios = require("axios");
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import DrinkCard from './Card.js';
// import ButtonGroup from '@mui/material/ButtonGroup';
import SmallCard from './SmallCard.js';

const Search = () => {

  const [name, setName] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [showCards, setShowCards] = useState(false);
  // const [searchBy, setSearchBy] = useState('');
  // const [searchOrFilter, setSearchOrFilter] = useState('');

  //www.thecocktaildb.com/api/json/v1/1/filter.php?i=Orange
  //the baove API gives you a list of drinks with name, img, and id.
  //this gives you the search by ingredient - display the little tiles
  //on click of each tile, it should make a card on the right side
  //tomorrow - also do the db for favorite drinks

  function handleSearch(event) {
    event.preventDefault();
    // console.log(name);
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((res) => {
      // console.log(res.data.drinks);
      let resultDrinks = res.data.drinks.map((drink, i) => {

        let resultIngredients = {
          [drink.strIngredient1]: drink.strMeasure1,
          [drink.strIngredient2]: drink.strMeasure2,
          [drink.strIngredient3]: drink.strMeasure3,
          [drink.strIngredient4]: drink.strMeasure4,
          [drink.strIngredient5]: drink.strMeasure5,
          [drink.strIngredient6]: drink.strMeasure6,
          [drink.strIngredient7]: drink.strMeasure7,
          [drink.strIngredient8]: drink.strMeasure8,
          [drink.strIngredient9]: drink.strMeasure9,
          [drink.strIngredient10]: drink.strMeasure10,
          [drink.strIngredient11]: drink.strMeasure11,
          [drink.strIngredient12]: drink.strMeasure12,
          [drink.strIngredient13]: drink.strMeasure13,
          [drink.strIngredient14]: drink.strMeasure14,
          [drink.strIngredient15]: drink.strMeasure15
        }
        resultIngredients = Object.entries(resultIngredients).map(([key, value]) => {
          if (key !== "null") {
            if (value !== undefined && value !== null && value !== "null") {
              return (value + key)
            } else {
              return (key)
            }
          }
        }).filter(x => { return x !== undefined})

        // console.log(resultIngredients);

        return ({name: drink.strDrink,
          id: drink.idDrink,
          category: drink.strCategory,
          favorite: false,
          glass: drink.strGlass,
          image: drink.strDrinkThumb,
          instructions: drink.strInstructions,
          alcoholic: drink.strAlcoholic,
          ingredients: resultIngredients
        })
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
         {/* <ButtonGroup variant="text" aria-label="text button group" >
          <Button onClick={e => setSearchBy('s')} value="s">Name</Button>
          <Button onClick={e => setSearchBy('i')} value="i">Ingredient</Button>
        </ButtonGroup> */}
      <TextField
      id="standard-basic"
      label="Search"
      variant="standard"
      value={name}
      onInput={e => setName(e.target.value)}
      />
      <Button type="submit">Go!</Button>
    </Box>
    <SmallCard/>
    <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', rowGap: 8, columnGap: 8, justifyContent: 'center' }}>{display}</Box>
    </Box>
  )
}

export default Search;