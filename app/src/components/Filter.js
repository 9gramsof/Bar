import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
const axios = require("axios");
import SmallCard from './SmallCard.js';
import DrinkCard from './Card.js';

export default function Filter() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [go, setGo] = useState(false);
  const [drinkList, setDrinkList] = useState([]);
  const [displayDrinkCard, setDisplayDrinkCard] = useState(false);
  const [drink, setDrink] = useState({});

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(Object.values(event.target)[0].key);
    setGo(!go);
  }

  const handleGo = (event) => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${filter}=${search}`)
    .then((res) => {
      // console.log(res.data.drinks);
      setDrinkList(res.data.drinks);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const getCard = (selectedDrink) => {
    setDisplayDrinkCard(true);
    setDrink(selectedDrink);
    console.log('WAS PROPERLY PASSED UP', selectedDrink)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const category = ["Ordinary Drink","Cocktail","Shake","Other/Unknown","Cocoa","Shot","Coffee / Tea","Homemade Liqueur","Punch / Party Drink","Beer","Soft Drink"]

  const ingredient = [
    "Light rum","Applejack","Gin","Dark rum","Sweet Vermouth","Strawberry schnapps","Scotch","Apricot brandy","Triple sec","Southern Comfort","Orange bitters", "Brandy","Lemon vodka","Blended whiskey","Dry Vermouth", "Amaretto" ,"Tea","Champagne","Coffee liqueur","Bourbon","Tequila", "Vodka","Añejo rum","Bitters","Sugar","Kahlua","demerara Sugar","Dubonnet Rouge","Watermelon","Lime juice","Irish whiskey","Apple brandy","Carbonated water","Cherry brandy","Creme de Cacao", "Grenadine","Port","Coffee brandy","Red wine","Rum", "Grapefruit juice","Ricard","Sherry","Cognac","Sloe gin", "Apple juice","Pineapple juice","Lemon juice","Sugar syrup","Milk","Strawberries", "Chocolate syrup","Yoghurt","Mango","Ginger","Lime","Cantaloupe","Berries","Grapes", "Kiwi","Tomato juice","Cocoa powder","Chocolate","Heavy cream","Galliano","Peach Vodka","Ouzo", "Coffee","Spiced rum","Water","Espresso","Angelica root","Orange", "Cranberries","Johnnie Walker","Apple cider","Everclear","Cranberry juice","Egg yolk", "Egg","Grape juice","Peach nectar","Lemon","Firewater","Lemonade", "Lager","Whiskey","Absolut Citron","Pisco","Irish cream","Ale", "Chocolate liqueur","Midori melon liqueur","Sambuca","Cider", "Sprite","7-Up","Blackberry brandy","Peppermint schnapps","Creme de Cassis"
  ]

  const glass = ["Highball glass","Cocktail glass","Old-fashioned glass","Whiskey Glass","Collins glass","Pousse cafe glass","Champagne flute","Whiskey sour glass","Cordial glass","Brandy snifter","White wine glass","Nick and Nora Glass","Hurricane glass","Coffee mug","Shot glass","Jar","Irish coffee cup","Punch bowl","Pitcher","Pint glass","Copper Mug","Wine Glass","Beer mug","Margarita/Coupette glass","Beer pilsner","Beer Glass","Parfait glass","Mason jar","Margarita glass","Martini Glass","Balloon Glass","Coupe Glass"]

  let displayAutoComplete;
  if (filter === 'c') {
    displayAutoComplete =
    <Autocomplete
    disablePortal
    options={category}
    sx={{ width: 300 }}
    onChange={handleSearch}
    renderInput={(params) => <TextField {...params} label="Search" />}
  />
  } else if (filter === 'i') {
    displayAutoComplete =
    <Autocomplete
    disablePortal
    options={ingredient}
    sx={{ width: 300}}
    onChange={handleSearch}
    renderInput={(params) => <TextField {...params} label="Search" />}
  />
  } else if (filter === 'g') {
    displayAutoComplete =
    <Autocomplete
    disablePortal
    options={glass}
    sx={{ width: 300}}
    onChange={handleSearch}
    renderInput={(params) => <TextField {...params} label="Search" />}
  />
  }

  let displayGo;
  if (go) {
    displayGo = <Button onClick={handleGo}>Go!</Button>
  }

  let displayDrinksList;
  if (drinkList.length > 0) {
    displayDrinksList = drinkList.map((drink, i) => {
      return (<SmallCard key={i} drink={drink} getCard={getCard}/>)
    })
  }

  let displaySelectedCard;
  if (displayDrinkCard) {
    displaySelectedCard = <DrinkCard drink={drink}/>
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Box>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel>Filter</InputLabel>
        <Select  open={open}  onClose={handleClose}  onOpen={handleOpen}  value={filter}  label="Filter" onChange={handleChange}>
        <MenuItem value="      ">
        <em>None</em></MenuItem>
        <MenuItem value="c">Category</MenuItem>
        <MenuItem value="i">Ingredient</MenuItem>
        <MenuItem value="g">Glass</MenuItem></Select>
      </FormControl>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', rowGap: 8, columnGap: 8, justifyContent: 'center' }}>
      {displayAutoComplete}
      </Box>
      <Box>{displayGo}</Box>
      <Box>
        {displaySelectedCard}
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', rowGap: 8, columnGap: 8, justifyContent: 'center' }}>
        {displayDrinksList}
       </Box>

    </Box>
  );
}