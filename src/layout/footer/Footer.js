import { Box } from "@material-ui/core"
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import './Footer.css'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    secondContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}));


const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container>
                <Grid className='blue' item xl={12} md={12} xs={12} alignItems='center'>
                    <Container classes={{ root: classes.root }}>
                        <Box component='div' md={9} lg={9} xs={9}>
                            <h6 className='fb-ic'>Get connected with us on social networks!</h6>
                        </Box>

                        <Box component='div' md={3} lg={3} xs={3}>

                            <a href='https://www.facebook.com/' className="fb-ic">
                                <i className="fab fa-facebook-f white-text mr-4"> </i>
                            </a>
                            <a href='https://twitter.com/?lang=en' className="tw-ic">
                                <i className="fab fa-twitter white-text mr-4"> </i>
                            </a>
                            <a href='https://www.google.com/' className="gplus-ic">
                                <i className="fab fa-google-plus-g white-text mr-4"> </i>
                            </a>
                            <a href='https://www.linkedin.com/' className="li-ic">
                                <i className="fab fa-linkedin-in white-text mr-4"> </i>
                            </a>
                            <a href='https://www.instagram.com/' className="ins-ic">
                                <i className="fab fa-instagram white-text"> </i>
                            </a>

                        </Box>
                    </Container>

                </Grid>
            </Grid>
            <Grid container justify='space-around' className='black'>
                <Container maxWidth='lg' classes={{ root: classes.secondContainer }}>
                    <Grid item lg={3} md={3} xs={12} sm={6}>
                        <h5>About me</h5>
                        <p className="foot-desc mb-0">Here you can use rows and columns to organize your footer content. Lorem
                            ipsum dolor sit amet,
                            consectetur
                            adipisicing elit.
                        </p>
                    </Grid>
                    <Grid item lg={2} md={2} xs={12} sm={6}>
                        <h5>Products</h5>

                        <ul className="list-unstyled foot-desc">
                            <li className="mb-2">
                                <a className="blacked" href="#!">MDBootstrap</a>
                            </li>
                            <li className="mb-2">
                                <a className="blacked" href="#!">MDWordPress</a>
                            </li>
                            <li className="mb-2">
                                <a className="blacked" href="#!">BrandFlow</a>
                            </li>
                            <li className="mb-2">
                                <a className="blacked" href="#!">Bootstrap Angular</a>
                            </li>
                        </ul>
                    </Grid>

                    <Grid item lg={2} md={2} xs={12} sm={6}>
                        <h5>Useful links</h5>

                        <ul>
                            <li>
                                <a className="blacked" href="#!">Your Account</a>
                            </li>
                            <li >
                                <a className="blacked" href="#!">Become an Affiliate</a>
                            </li>
                            <li >
                                <a className="blacked" href="#!">Shipping Rates</a>
                            </li>
                            <li >
                                <a className="blacked" href="#!">Help</a>
                            </li>
                        </ul>
                    </Grid>

                    <Grid item lg={2} md={2} xs={12} sm={6}>
                        <h5>Contacts</h5>

                        <ul>
                            <li ><span className="fa-li"><i className="far fa-map"></i></span>New York, Avenue Street 10
                            </li>
                            <li ><span className="fa-li"><i className="fas fa-phone-alt"></i></span>042 876 836 908</li>
                            <li ><span className="fa-li"><i className="far fa-envelope"></i></span>company@example.com</li>
                            <li><span className="fa-li"><i className="far fa-clock"></i></span>Monday - Friday: 10-17</li>
                        </ul>
                    </Grid>
                </Container>
            </Grid>


        </>
    )
}

export default Footer;