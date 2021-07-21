import React from "react";
import { useFormik } from "formik";
import "../sign/Signup.css";
import { Button } from "@material-ui/core";

const AddProduct = () => {
 
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      category: "",
      img: "",
    },

    onSubmit: (values,{setStatus, resetForm}) => {
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
          title: values.title,
          price: values.price,
          description: values.description,
          image: values.img,
          category: values.category,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setStatus(true);
          resetForm();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          alert("sent");
        });
    },
  });
  return (
    <form className="styling" onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {formik.errors.title ? <div>{formik.errors.title}</div> : null}

      <label htmlFor="price">price</label>
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      {formik.errors.price ? <div>{formik.errors.price}</div> : null}

      <label htmlFor="description">description</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      {formik.errors.description ? (
        <div>{formik.errors.description}</div>
      ) : null}

      <label htmlFor="category">category</label>
      <input
        id="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.category}
      />
      {formik.errors.category ? <div>{formik.errors.category}</div> : null}

      <label htmlFor="img">img</label>
      <input
        id="img"
        name="img"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.img}
      />
      {formik.errors.img ? <div>{formik.errors.img}</div> : null}

      <Button
        type="submit"
        variant="contained"
        style={{ backgroundColor: "green", color: "white" }}
      >
        Submit
      </Button>
    </form>
  );
};

export default AddProduct;
