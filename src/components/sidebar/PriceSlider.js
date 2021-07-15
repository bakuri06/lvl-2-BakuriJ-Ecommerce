import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0$',
  },
  {
    value: 1000,
    label: '1000$',
  },
];

function valuetext(value) {
  return `${value}$`;
}

export default function PriceSlider() {
  const classes = useStyles();

  return (
    <Box component='div' classes={{root:classes.root}} mt={3}>
      <Typography id="discrete-slider-custom" gutterBottom>
        Price
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        max={1000}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}
