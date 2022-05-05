import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from 'axios';

export default function SmallCard({drink, getCard}) {

  const [isSelectedDrink, setIsSelectedDrink] = useState(false);
  const [selected, setSelectedDrink] = useState({});

  const handleClick = (event) => {
    event.preventDefault();
    let id = parseInt(drink.idDrink, 10);
    console.log(id)
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => {
      let drink = res.data.drinks[0];
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
      console.log(resultIngredients)
      resultIngredients = Object.entries(resultIngredients).map(([key, value]) => {
        if (key !== "null") {
          if (value !== undefined && value !== null && value !== "null") {
            return (value + key)
          } else {
            return (key)
          }
        }
      }).filter(x => { return x !== undefined})

      let selectedDrink = {
        name: drink.strDrink,
        id: drink.idDrink,
        category: drink.strCategory,
        favorite: false,
        glass: drink.strGlass,
        image: drink.strDrinkThumb,
        instructions: drink.strInstructions,
        alcoholic: drink.strAlcoholic,
        ingredients: resultIngredients
      }
      console.log(selectedDrink)
      setIsSelectedDrink(true);
      setSelectedDrink(selectedDrink);
      // getCard(selectedDrink);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  if (isSelectedDrink) {
    getCard(selected);
  }

  return (
    <Card sx={{ maxWidth: 200 }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          width="100"
          image={drink.strDrinkThumb}
          alt={drink.strDrink}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {drink.strDrink}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
