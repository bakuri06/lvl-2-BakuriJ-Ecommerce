import React, { useEffect } from "react";
import { useFormik } from "formik";
import "../signup/Signup.css";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Box } from "@material-ui/core";
import "./SignInForm.css";
import SignInButton from "./SignInButton";
import { Redirect, useHistory } from "react-router-dom";
import { PRODUCT_LIST } from "../../routes";
import { useContext } from "react";
import { UserContext } from "../../store/UserContextProvider";
import data from "../../api/data";
import Counter from "./../../components/details/Counter";

const SignInForm = () => {
  const [checked, setChecked] = useState(false);
  const userData = useContext(UserContext);
  const history = useHistory();

  console.log(userData);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { setStatus, resetForm, setErrors, setSubmitting }) => {
      fetch("http://159.65.126.180/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("data: ", json);
          localStorage.setItem("token", json.token.access_token);
          setStatus(true);
          resetForm();
          history.push("/product_list");
          userData.setData({
            ...userData.data,
            isLoggedIn: true,
          });
        })
        .catch((error) => {
          console.log(error);
          setErrors({ main: "Error" });
        })
        .finally(() => {
          console.log(userData.data.isLoggedIn)
          setSubmitting(true);
        });
    },
  });
  
  return (
    <>
      <form className="styling" onSubmit={formik.handleSubmit}>
        <TextField
          id="email"
          value={formik.values.email}
          name="email"
          type="email"
          onChange={formik.handleChange}
          label="Your email"
          variant="outlined"
          style={{ marginBottom: "20px" }}
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
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <Box component="div" display="flex" justifyContent="space-between">
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
            label="Remember me"
          />

          <p>
            <a href="/register" className="forgetPass">
              Forgot password?
            </a>
          </p>
        </Box>

        <Box
          component="div"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <SignInButton />

          <p className="fixed">
            Not a member?{" "}
            <a href="/register" className="forgetPass">
              Register
            </a>
          </p>

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
    </>
  );
};

export default SignInForm;
