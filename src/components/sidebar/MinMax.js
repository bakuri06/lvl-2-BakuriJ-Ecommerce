import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Input.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display:'flex'
    },
  },
}));

export default function MinMax() {
  const classes = useStyles();

  return (
    <form classes={{root:classes.root}} noValidate autoComplete="off">
      <TextField className='styleInput' id="outlined-basic" label="$Min" variant="outlined" />
      <TextField className='styleInput' id="outlined-basic" label="$Max" variant="outlined" />
    </form>
  );
}
