import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../header/Header'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    menu: {
      backgroundColor: 'red',
    },
    noPadding:{
        paddingLeft: "0px",
        paddingRight: "0px"
    }
}));

const AdminLayout = ({ children }) => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth='xl' classes={{root:classes.noPadding}}>
                <Header isAdmin={true}/>
            </Container>
            <Container maxWidth='xl' classes={{root:classes.noPadding}}>
                {children}
            </Container>
        </>
    );
}

export default AdminLayout;