import React from 'react'
import MainContent from '../layout/layouts/MainContent';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';

const Home = () => {

    return (
        <MainContent>
            <Grid container md>
                <Container>
                    <Box component='div' mt={5} display='flex'>
                        Home
                    </Box>
                </Container>
            </Grid>
        </MainContent>
    )
}

export default Home;