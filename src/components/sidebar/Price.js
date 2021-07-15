import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
    formControl: {
        marginTop: '15px',
    },

});

// Inspired by blueprintjs
function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

export default function CustomizedRadios() {
    const classes = useStyles();
    return (
        <FormControl classes={{root:classes.formControl}}component="fieldset">
            <FormLabel component="legend">Price</FormLabel>
            <RadioGroup defaultValue="Under 25$" aria-label="Price" name="customized-radios">
                <FormControlLabel value="Under 25$" control={<StyledRadio />} label="Under 25$" />
                <FormControlLabel value="25$ to 50$" control={<StyledRadio />} label="25$ to 50$" />
                <FormControlLabel value="50$ to 100$" control={<StyledRadio />} label="50$ to 100$" />
                <FormControlLabel value="100$ to 200$" control={<StyledRadio />} label="100$ to 200$" />
                <FormControlLabel value="200$ and more" control={<StyledRadio />} label="200$ and more" />
            </RadioGroup>
        </FormControl>
    );
}
