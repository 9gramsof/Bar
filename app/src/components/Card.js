import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DrinkCard({drink, getfavorites}) {
  const [expanded, setExpanded] = React.useState(false);
  const [addedFavorite, setAddedFavorite] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavorite = (event) => {
    setAddedFavorite(!addedFavorite);
    axios({
      method: 'post',
      url: 'http://localhost:3000/drink',
      data: {
        id: drink.id,
        name: drink.name,
        category: drink.category,
        glass: drink.glass,
        image: drink.image,
        instructions: drink.instructions,
        alcoholic: drink.alcoholic,
        favorite: true,
        ingredients: drink.ingredients
      }
    })
    .then((res) => {
      // console.log(res.data);
      getfavorites;

    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handleDeleteFavorite = (event) => {
    // setAddedFavorite(!addedFavorite);
    axios({
      method: 'delete',
      url: 'http://localhost:3000/drink',
      data: {
        id: drink.id
      }
    })
    .then((res) => {
      console.log(res.data);
      getfavorites();
    })
    .catch((err) => {
      console.log(err);
    })
  }


  return (
    <Card sx={{ width: 300, display: 'flex', flexDirection: 'column'}}>
      <CardHeader
        avatar={
          <LocalBarIcon sx={{ fontSize: 20 }} aria-label="recipe">
          </LocalBarIcon>
        }

        title={drink.name}
        subheader={drink.alcoholic}
      />
      <CardMedia
        component="img"
        height="auto"
        image={drink.image}
        alt={drink.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          The {drink.name} is best served in a/an {drink.glass}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavorite}>
          {drink.favorite === true
            ? <FavoriteIcon sx={{color: 'red'}}/>
            : <FavoriteIcon />
          }
          {addedFavorite === false
            ? ''
            : <Typography variant="body2" color="text.secondary">
              Added to favorites!
            </Typography>
          }
        </IconButton>
        <IconButton aria-label="remove from favorites" onClick={handleDeleteFavorite}>
            {drink.favorite === true
              ? <ClearIcon sx={{color: 'black'}}/>
              : ''
            }
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Instructions:</Typography>
          <Typography paragraph align="justify">{drink.instructions}</Typography>
          <Typography paragraph >Ingredients:</Typography>
          <Typography paragraph align="left">
            {drink.ingredients.map((item, i) => {
              return <li key={i}>{item}</li>})}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
