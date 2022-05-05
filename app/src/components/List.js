import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      list: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.target.value);

    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?${event.target.value}=list`)
    .then((res) => {
      console.log(res.data.drinks)
      let arr = res.data.drinks.map(obj => Object.values(obj).toString())
      console.log(arr);
      this.setState({
        isSelected: true,
        list: arr
      })
    })
    .catch((err) => {
      console.log(err)
    })

  }

  render() {
    let display;
    if (this.state.isSelected) {
      display = (
        <Typography paragraph align="left">
        {this.state.list.map((item, i) => {return <li key={i}>{item}</li>})}
        </Typography>
      )
    }
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}>
        <ButtonGroup variant="text" aria-label="text button group" >
          <Button onClick={this.handleClick} value="c">Category</Button>
          <Button onClick={this.handleClick} value="g">Glass</Button>
          <Button onClick={this.handleClick} value="i">Ingredients</Button>
          <Button onClick={this.handleClick} value="a">Alcoholic</Button>
        </ButtonGroup>
        {display}
      </Box>
    )
  }
}

export default List;