import React from "react";
import { useFormik } from "formik";
import "./Signup.css";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Box } from "@material-ui/core";
import "./SignInForm.css";
import SignUpButton from "./SignUpButton";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import { SIGNIN } from "../routes";


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string().required("Required"),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const SignUpForm = () => {
  const [checked, setChecked] = useState(false);
  const [register, setIsRegister] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: SignupSchema,

    onSubmit: (values, { setStatus, resetForm, setErrors, setSubmitting }) => {
      fetch("http://159.65.126.180/api/register", {
            method: "POST",
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              password: values.password,
              password_confirmation: values.password_confirmation,
            }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
          
        .then((json) => {
          if (json.ok) {
            setStatus(true);
            setIsRegister(true);
            resetForm();
            alert("You succesfully registered");
          } else {
            alert("error");
            return;
          }
        })
        .catch((error) => {
          console.log(error);
          setErrors({ main: "Error" });
        })
        .finally(() => {
          setSubmitting(true);
        });
    },
  });

  return (
    <>
      {register ? (
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
