import React from 'react';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  

  render() {
    return(
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Alcoholic</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Alcoholic"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Alcoholic" control={<Radio />} label="Alcoholic" />
        <FormControlLabel value="Non_Alcoholic" control={<Radio />} label="Non Alcoholic" />
      </RadioGroup>
    </FormControl>
    );
  }
}

export default Filter;