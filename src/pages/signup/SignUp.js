import React from 'react'
import MainContent from '../../layout/layouts/MainContent';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import useStyles from "../singleproduct/SingleProductStyles";
import SignUpForm from './SignUpForm';
import '../signin/SignInForm.css'

const SignUp = () => {
    const classes=useStyles();

    return (
        <MainContent>
            <Grid container>
                <Grid item xs={12} lg={12} md={12}>
                    <Box component='div' className={classes.bannerColor} display='flex' justifyContent='center' mb={5}>
                        <h3 className='main_banner'>Sign up</h3>
                    </Box>
                </Grid>
            </Grid>

            <Grid container justifyContent='center'>
                <Grid item md={5}>
                    <SignUpForm/>
                </Grid>
            </Grid>

        </MainContent>
    )
}

export default SignUp;