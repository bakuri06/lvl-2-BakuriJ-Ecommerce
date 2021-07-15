import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import './Color.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: '8px',
        },
    }
}));

export default function Color() {
    const classes = useStyles();

    return (
        <>
            <h6 className='noMargin'>Color</h6>
            <div className={classes.root}>
                <Fab style={{ backgroundColor: 'white' }} size='small' />
                <Fab style={{ backgroundColor: 'gray' }} size='small' />
                <Fab style={{ backgroundColor: 'black' }} size='small' />
                <Fab style={{ backgroundColor: 'green' }} size='small' />
                <Fab style={{ backgroundColor: 'blue' }} size='small' />
                <Fab style={{ backgroundColor: 'purple' }} size='small' />
                <Fab style={{ backgroundColor: 'yellow' }} size='small' />
                <Fab style={{ backgroundColor: '#1266f1' }} size='small' />
                <Fab style={{ backgroundColor: '#f44336' }} size='small' />
                <Fab style={{ backgroundColor: '#ff9800' }} size='small' />
            </div>
        </>
    );
}
