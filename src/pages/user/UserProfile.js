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
import { selectUser } from "./../../store/user/userSelector";
import { useSelector } from "react-redux";
import { setUser } from './../../store/user/userActionCreator';

const UserProfile = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  let dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const [data, setData] = useState(userData.user);

  const formik = useFormik({
    initialValues: {
      name: userData.user.name,
      nickname:  userData.user.nickname,
      avatar: "",
    },
    onSubmit: (values, { setStatus, resetForm, setErrors, setSubmitting }) => {
      Api.update(userData.user.id,values,token)
        .then((data) => {
          console.log(data);
          dispatch(setUser(data))
          setData(data);
          setStatus(true);
          resetForm();
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
                        {userData.user.email}
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
                    <TextField
                      id="avatar"
                      name="avatar"
                      type="file"
                      variant="outlined"
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                        formik.setFieldValue("avatar", e.target.files[0]);
                        console.log(formik.avatar)
                      }}
                    />
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
