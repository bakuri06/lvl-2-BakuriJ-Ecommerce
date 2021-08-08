import React from "react";
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
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../store/UserContextProvider";
import Api from "../../api/Api";
import {
  setLogin,
  setLoginIn,
  setToken,
  setUser,
} from "../../store/user/userActionCreator";
import { useDispatch } from "react-redux";

const SignInTest = () => {
  const [checked, setChecked] = useState(false);
  const userData = useContext(UserContext);
  const history = useHistory();
  let dispatch = useDispatch();
  let temp;

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
      Api.signInApi({ email: values.email, password: values.password })
        .then((data) => {
          console.log("data: ", data);
          localStorage.setItem("token", data.token.access_token);
          setStatus(true);
          resetForm();
          history.push("/product_list");
          dispatch(setUser(data.user));
          dispatch(setToken(data.token.access_token));
          dispatch(setLogin(true));
          dispatch(setLoginIn(true));
        })
        .catch((error) => {
          console.log(error);
          setErrors({ main: "Error" });
        })
        .finally(() => {
          setSubmitting(true);
          temp = {
            ...temp,
            isLoggingIn: false,
          };
          dispatch(setLoginIn(false));
          userData.setData(temp);
        });
      Api.signInApi({
        email: values.email,
        password: values.password,
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

export default SignInTest;
