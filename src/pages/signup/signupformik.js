import Api from "../../api/Api";
import * as Yup from "yup";
import { useState } from "react";

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

export const formikValue = {
  initialValues: {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  },
  validationSchema: SignupSchema,

  onSubmit: (values, { setStatus, resetForm, setErrors, setSubmitting }) => {
    Api.signUpApi({
      name: values.name,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
    })
      .then((json) => {
        if (json.ok) {
          setStatus(true);
          resetForm();
          alert("You succesfully registered");
        } else {
          json.text().then((text) => {
            throw Error(text);
          });
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
};
