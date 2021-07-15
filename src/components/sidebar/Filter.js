import './Filter.css'
import { TextField } from '@material-ui/core';
import { Box } from '@material-ui/core';

const Filter = () => {
    return (
        <section>
            <h5 pt={2} mb={4}>Filters</h5>
            <Box component='div' display="flex" alignItems="center" justifyContent="between">
                <TextField id="outlined-basic" label="Search" variant="outlined" />
                <Box component='a' href="#!" ml={2}><i class="fas fa-search fa-lg"></i></Box>
            </Box>
        </section>
    )
}

export default Filter;