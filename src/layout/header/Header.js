import { Container } from "@material-ui/core"
import Navbar from "./Navbar"
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return ({
        menu: {
            backgroundColor: 'red',
        },
        noPadding: {
            paddingLeft: "0px",
            paddingRight: "0px",
            position: 'static',
            zIndex: '9999'
        }
    });
});

const Header = () => {
    const classes=useStyles();
    return(
        <Container classes={{root:classes.noPadding}}maxWidth='xl' mb={4}>
            <Navbar />
        </Container>
    )
}

export default Header;