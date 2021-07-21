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

function validatePassword(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (value.length < 8) {
    error = "Invalid email address";
  }
  return error;
}

const SignUpForm = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
    },

    onSubmit: (values) => {
      console.log('sent');
    },
  });

  return (
    <form className="styling" Validate={validatePassword} onSubmit={formik.handleSubmit}>
      <Box component="div" display="flex" justifyContent="space-between">
        <TextField
          id="firstName"
          value={formik.values.firstName}
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          label="First Name"
          variant="outlined"
          style={{ width: "49%" }}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

        <TextField
          id="lastName"
          value={formik.values.lastName}
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          label="Last Name"
          variant="outlined"
          style={{ width: "49%" }}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      </Box>

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
        id="phoneNumber"
        value={formik.values.phoneNumber}
        name="phoneNumber"
        type="number"
        onChange={formik.handleChange}
        label="Phone Number"
        variant="outlined"
        style={{ marginTop: "20px" }}
        helperText="Optional - for two step authentication"
      />
      {formik.errors.phoneNumber ? (
        <div>{formik.errors.phoneNumber}</div>
      ) : null}

      <Box component="div" display="flex" alignSelf='center' >
        <FormControlLabel
          style={{ color: "#6c757d"}}
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
  );
};

export default SignUpForm;
