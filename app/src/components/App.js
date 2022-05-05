import React, { useState, useEffect } from 'react';
import '../App.css';
import cocktail from '../pics/cocktail.svg';
import Random from './Random.js';
import List from './List.js';
import Filter from './Filter.js';
import Search from './Search.js';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import axios from 'axios';
import DrinkCard from './Card.js';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import Typography from '@mui/material/Typography';

const App = () => {
  const [value, setValue] = useState('Home');
  const [isOnline, setIsOnline] = useState(false);
  const [drinks, setDrinks] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getDrinks = useEffect(() => {
    if (drinks.length === 0) {
      getfavorites();
    }
  }, [drinks]);

  const getfavorites = () => {
    axios.get('http://localhost:3000/drink')
    .then((res) => {
      // console.log(res.data)
      setDrinks(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  let display;
  if (value === "List") {
    display = <List/>
  } else if (value === "Favorites") {
    display = (
      <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', rowGap: 5, columnGap: 8, "justify-content": 'center' }} >
        {/* <img src={cocktail} className="App-logo" alt="logo" /> */}
        <Typography variant='h5'>These are your favorite drinks!</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', rowGap: 8, columnGap: 8, "justify-content": 'center' }}>
          {drinks.map((drink, i) => {
            return (<DrinkCard key={i} drink={drink} getfavorites={getfavorites}/>)
          })}
        </Box>
      </Box>
    )
  } else if (value === "Filter") {
    display = <Filter/>
  } else if (value === "Home") {
    display = <Random/>
  } else if (value === "Search") {
    display = <Search/>
  }

  return (
    <div className="App">
      <Box sx={{display: 'flex', flexDirection: 'row', "justify-content": 'center'}}>
        <Typography variant='h1'>HomeBar</Typography>
        <LocalBarIcon sx={{fontSize: 100}} className="App-logo"/>
      </Box>

      <Box className="nav" sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="Home" label="Home" />
          <Tab value="Favorites" label="Favorites" onClick={getfavorites}/>
          <Tab value="Search" label="Search" />
          <Tab value="Filter" label="Filter" />
          <Tab value="List" label="List" />

        </Tabs>
      </Box>
      {display}
    </div>
  )

}

export default App;