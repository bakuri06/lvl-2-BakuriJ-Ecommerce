import './Sidebar.css'
import { Box } from '@material-ui/core';
import FirstContent from './FirstContent'
import Filter from './Filter';
import Condition from './Condition';
import Ratings from './Ratings';
import MinMax from './MinMax';
import Price from './Price';
import PriceSlider from './PriceSlider';
import Size from './Size';
import Color from './Color';

const Sidebar = () => {
    return (
        <Box>
            <FirstContent />
            <Filter />
            <Condition />
            <Ratings />
            <MinMax />
            <Price />
            <PriceSlider />
            <Size />
            <Color />
        </Box>
    )
}

export default Sidebar;
