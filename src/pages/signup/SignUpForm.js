import React from "react";
import { useFormik } from "formik";
import "./Signup.css";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Box } from "@material-ui/core";
import "../signin/SignInForm.css";
import SignUpButton from "./SignUpButton";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import { SIGNIN } from "../../routes";
import Api from "../../api/Api";
import { formikValue } from './signupformik';


const SignUpForm = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const formik = useFormik(formikValue);

  return (
    <>
      {formik.isSubmitting ? (
        <Redirect to={SIGNIN} />
      ) : (
        <form className="styling" onSubmit={formik.handleSubmit}>
          <TextField
            id="name"
            value={formik.values.name}
            name="name"
            type="text"
            onChange={formik.handleChange}
            label="Name"
            variant="outlined"
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}

          <TextField
            id="email"
            value={formik.values.email}
            name="email"
            type="email"
            onChange={formik.handleChange}
            label="Your email"
            variant="outlined"
            style={{ marginTop: "20px" }}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <TextField
            id="password"
            value={formik.values.password}
            name="password"
            type="password"
            onChange={formik.handleChange}
            label="Your password"
            variant="outlined"
            style={{ marginTop: "20px" }}
            helperText="At least 8 characters and 1 digit"
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}

          <TextField
            id="password_confirmation"
            value={formik.values.password_confirmation}
            name="password_confirmation"
            type="password"
            onChange={formik.handleChange}
            label="Confirm Password"
            variant="outlined"
            style={{ marginTop: "20px" }}
          />
          {formik.errors.password_confirmation ? (
            <div>{formik.errors.password_confirmation}</div>
          ) : null}

          <Box component="div" display="flex" alignSelf="center">
            <FormControlLabel
              style={{ color: "#6c757d" }}
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  name="checked"
                  color="primary"
                />
              }
              label="Subscribe to our newsletter"
            />
          </Box>

          <Box
            component="div"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <SignUpButton />

            <p className="fixed">or sign in with:</p>

            <div>
              <Button>
                <i className="fab fa-facebook-f second"></i>
              </Button>
              <Button>
                <i className="fab fa-twitter second"></i>
              </Button>
              <Button>
                <i className="fab fa-linkedin-in second"></i>
              </Button>
              <Button>
                <i className="fab fa-github"></i>
              </Button>
            </div>
          </Box>
        </form>
      )}
    </>
  );
};

export default SignUpForm;
