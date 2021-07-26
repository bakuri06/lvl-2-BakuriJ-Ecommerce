import React from "react";
import MainContent from "../../layout/layouts/MainContent";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import useStyles from "../singleproduct/SingleProductStyles";
import "./SignInForm.css";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const classes = useStyles();

  return (
    <MainContent>
      <Grid container>
        <Grid item xs={12} lg={12} md={12}>
          <Box
            component="div"
            className={classes.bannerColor}
            display="flex"
            justifyContent="center"
            mb={5}
          >
            <h3 className="main_banner">Sign in</h3>
          </Box>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item md={5}>
          <SignInForm />
        </Grid>
      </Grid>
    </MainContent>
  );
};

export default SignIn;
