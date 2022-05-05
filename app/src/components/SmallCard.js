import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function SmallCard({drink}) {
  return (
    <Card sx={{ maxWidth: 200 }}>
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
