import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        marginBottom:'15px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SelectLabel() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Choose Category</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>First category</option>
                    <option value={20}>Second category</option>
                    <option value={30}>Third category</option>
                    <option value={40}>Forth category</option>

                </Select>
            </FormControl>
    )
}