import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          width="100"
          image="https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg"
          alt="Abbey Cocktail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Abbey Cocktail
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
