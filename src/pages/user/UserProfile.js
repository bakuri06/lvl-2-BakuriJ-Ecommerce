import React from "react";
import MainContent from "../../layout/layouts/MainContent";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import Api from "../../api/Api";
import useStyles from "../singleproduct/SingleProductStyles";
import "../signin/SignInForm.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./uploadFile.css";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { setUser } from "../../store/user/userActionCreator";
import { selectUser } from "./../../store/user/userSelector";
import { useSelector } from "react-redux";
import { setImage } from "./../../store/user/userActionCreator";

const UserProfile = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  let dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const [data, setData] = useState(userData.user);
  console.log(userData);

  const showPreviewOne = (e) => {
    if (e.target.files.length > 0) {
      const src = URL.createObjectURL(e.target.files[0]);
      setData({
        ...data,
        avatar: src,
      });

      dispatch(
        setUser({
          ...data,
          avatar: src,
        })
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      nickname: "",
    },
    onSubmit: (values, { setStatus, resetForm, setErrors, setSubmitting }) => {
      Api.update(
        data.id,
        {
          name: values.name,
          nickname: values.nickname,
        },
        token,
        false
      )
        .then((data) => {
          console.log(data);
          setData(data);
          setStatus(true);
          resetForm();
          dispatch(setUser(data));
          alert("You succesfully updated your profile");
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
            <h3 className="main_banner">User Page</h3>
          </Box>
        </Grid>
      </Grid>

      <Grid container style={{ margin: "20px 0" }}>
        <Loader isLoading={loading}>
          <Container>
            <Grid container>
              <Grid item md={3} xs={3} lg={3}>
                <Card style={{ maxWidth: "350px" }}>
                  <CardActionArea>
                    <CardMedia
                      style={{ height: "300px" }}
                      image={data.avatar}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Admin
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {userData.email}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={9} xs={9} lg={9} style={{ padding: "0 20px" }}>
                <Box component="div">
                  <h5 className="shrift">Account Id: {userData.user.id}</h5>
                </Box>
                <form className="anotherStyle" onSubmit={formik.handleSubmit}>
                  <Box style={{ width: "50%" }}>
                    <p>Name</p>
                    <TextField
                      style={{ width: "100%" }}
                      id="name"
                      name="name"
                      variant="outlined"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                  </Box>

                  <Box style={{ width: "50%" }}>
                    <p>Nickname</p>
                    <TextField
                      style={{ width: "100%" }}
                      name="nickname"
                      id="nickname"
                      variant="outlined"
                      value={formik.values.nickname}
                      onChange={formik.handleChange}
                    />
                  </Box>

                  <Box style={{ width: "50%" }}>
                    <div className="image-upload-one">
                      <p>Upload photo</p>
                      <div className="center">
                        <div className="form-input">
                          <label for="avatar">
                            <img id="file-ip-1-preview" src={data.avatar} />
                          </label>
                          <input
                            type="file"
                            name="avatar"
                            id="avatar"
                            accept="image/*"
                            onChange={(e) => showPreviewOne(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </Box>

                  <Button type="submit">Update</Button>
                </form>
              </Grid>
            </Grid>
          </Container>
        </Loader>
      </Grid>
    </MainContent>
  );
};

export default UserProfile;
