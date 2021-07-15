import './Sidebar.css'
import { Box } from '@material-ui/core';

const FirstContent = () => {
    return (
        <Box component='div' className='text-muted small'>

            <h5 className='smth2'>Subcategories</h5>

            <div className="text-muted small">
                <Box component='p' mb={3}>Return to <a className='smth' href="#!"><strong>Clothing, Shoes,
                    Accessories</strong></a>
                </Box>
                <Box component='p' mb={3}><a className='smth' href="#!" >Dresses</a></Box>

                <Box component='p' mb={3}><a className='smth' href="#!" >ToBoxs, Tees &amp; Blouses</a></Box>
                <Box component='p' mb={3}><a className='smth' href="#!" >Sweaters</a></Box>
                <Box component='p' mb={3}><a className='smth' href="#!" >Fashion Hoodies &amBox; Sweatshirts</a></Box>
                <Box component='p' mb={3}><a className='smth' href="#!" >Jeans</a></Box>
            </div>

        </Box>
    )
}

export default FirstContent;
