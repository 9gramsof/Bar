import React, { useState } from 'react';
import '../App.css';
import cocktail from '../pics/cocktail.svg';
import Random from './Random.js';
import List from './List.js';
import Filter from './Filter.js';
import Search from './Search.js';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const App = () => {
  const [value, setValue] = useState('Home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let display;
  if (value === "List") {
    display = <List/>
  } else if (value === "Home") {
    display = ''
  } else if (value === "Filter") {
    display = <Filter/>
  } else if (value === "Search") {
    display = <Search/>
  }

  return (
    <div className="App">
      <h1>HomeBar</h1>
      <Random/>
      <Box className="nav" sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="Home" label="Home" />
          <Tab value="Search" label="Search" />
          <Tab value="Filter" label="Filter" />
          <Tab value="List" label="List" />
        </Tabs>
      </Box>
      {display}
      {/* <img src={cocktail} className="App-logo" alt="logo" /> */}

    </div>
  )

}

export default App;