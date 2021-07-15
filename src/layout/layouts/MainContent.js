import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../header/Header';
import { makeStyles } from '@material-ui/core';
import Footer from '../footer/Footer'

const useStyles = makeStyles((theme) => {
    return ({
        menu: {
            backgroundColor: 'red',
        },
        noPadding: {
            paddingLeft: "0px",
            paddingRight: "0px"
        }
    });
});

const MainContent = ({ children }) => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth='xl' classes={{ root: classes.noPadding }}>
                <Header />
            </Container>
            <Container maxWidth='xl' classes={{ root: classes.noPadding }}>
                {children}
            </Container>

            <Footer />

        </>
    );
}

export default MainContent;