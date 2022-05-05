import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

export default function Filter() {
  const [filter, setFilter] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const category = [{label: "Ordinary Drink"}, {label: "Cocktail"}, {label: "Shake"}, {label: "Other/Unknown"}, {label: "Cocoa"}, {label: "Shot"}, {label: "Coffee / Tea"}, {label: "Homemade Liqueur"}, {label: "Punch / Party Drink"}, {label: "Beer"}, {label: "Soft Drink"}
  ]

  const igredient = [
    {label: "Light rum"}, {label: "Applejack"},
    {label: "Gin"}, {label: "Dark rum"},
    {label: "Sweet Vermouth"},
    {label: "Strawberry schnapps"},
    {label: "Scotch"},
    {label: "Apricot brandy"},
    {label: "Triple sec"},
    {label: "Southern Comfort"},
    {label: "Orange bitters"},
    {label: "Brandy"},
    {label: "Lemon vodka"},
    {label: "Blended whiskey"
    },
    {label: "Dry Vermouth"
    },
    {label: "Amaretto"
    },
    {label: "Tea"
    },
    {label: "Champagne"
    },
    {label: "Coffee liqueur"
    },
    {label: "Bourbon"
    },
    {label: "Tequila"
    },
    {label: "Vodka"
    },
    {label: "Añejo rum"
    },
    {label: "Bitters"
    },
    {label: "Sugar"
    },
    {label: "Kahlua"
    },
    {label: "demerara Sugar"
    },
    {label: "Dubonnet Rouge"
    },
    {label: "Watermelon"
    },
    {label: "Lime juice"
    },
    {label: "Irish whiskey"
    },
    {label: "Apple brandy"
    },
    {label: "Carbonated water"
    },
    {label: "Cherry brandy"
    },
    {label: "Creme de Cacao"
    },
    {label: "Grenadine"
    },
    {label: "Port"
    },
    {label: "Coffee brandy"
    },
    {label: "Red wine"
    },
    {label: "Rum"
    },
    {label: "Grapefruit juice"
    },
    {label: "Ricard"
    },
    {label: "Sherry"
    },
    {label: "Cognac"
    },
    {label: "Sloe gin"
    },
    {label: "Apple juice"
    },
    {label: "Pineapple juice"
    },
    {label: "Lemon juice"
    },
    {label: "Sugar syrup"
    },
    {label: "Milk"
    },
    {label: "Strawberries"
    },
    {label: "Chocolate syrup"
    },
    {label: "Yoghurt"
    },
    {label: "Mango"
    },
    {label: "Ginger"
    },
    {label: "Lime"
    },
    {label: "Cantaloupe"
    },
    {label: "Berries"
    },
    {label: "Grapes"
    },
    {label: "Kiwi"
    },
    {label: "Tomato juice"
    },
    {label: "Cocoa powder"
    },
    {label: "Chocolate"
    },
    {label: "Heavy cream"
    },
    {label: "Galliano"
    },
    {label: "Peach Vodka"
    },
    {label: "Ouzo"
    },
    {label: "Coffee"
    },
    {label: "Spiced rum"
    },
    {label: "Water"
    },
    {label: "Espresso"
    },
    {label: "Angelica root"
    },
    {label: "Orange"
    },
    {label: "Cranberries"
    },
    {label: "Johnnie Walker"
    },
    {label: "Apple cider"
    },
    {label: "Everclear"
    },
    {label: "Cranberry juice"
    },
    {label: "Egg yolk"
    },
    {label: "Egg"
    },
    {label: "Grape juice"
    },
    {label: "Peach nectar"
    },
    {label: "Lemon"
    },
    {label: "Firewater"
    },
    {label: "Lemonade"
    },
    {label: "Lager"
    },
    {label: "Whiskey"
    },
    {label: "Absolut Citron"
    },
    {label: "Pisco"
    },
    {label: "Irish cream"
    },
    {label: "Ale"
    },
    {label: "Chocolate liqueur"
    },
    {label: "Midori melon liqueur"
    },
    {label: "Sambuca"
    },
    {label: "Cider"
    },
    {label: "Sprite"
    },
    {label: "7-Up"
    },
    {label: "Blackberry brandy"
    },
    {label: "Peppermint schnapps"
    },
    {label: "Creme de Cassis"
    }
]

  let displayAutoComplete;
  if (filter === 'c') {
    displayAutoComplete =
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={category}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Search" />}
  />
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', rowGap: 8, columnGap: 8, justifyContent: 'center' }}>
      <FormControl sx={{ m: 1, maxWidth: 120 }}><InputLabel>Filter</InputLabel><Select  open={open}  onClose={handleClose}  onOpen={handleOpen}  value={filter}  label="Filter"  onChange={handleChange}>  <MenuItem value="">    <em>None</em>  </MenuItem>  <MenuItem value="c">Category</MenuItem>  <MenuItem value="i">Ingredient</MenuItem>  <MenuItem value="g">Glass</MenuItem></Select>
      </FormControl>
      <Box>
      {displayAutoComplete}
      </Box>
    </Box>
  );
}