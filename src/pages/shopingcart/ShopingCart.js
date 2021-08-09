import React from "react";
import MainContent from "../../layout/layouts/MainContent";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import useStyles from "../singleproduct/SingleProductStyles";
import "../signin/SignInForm.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Counter from "../../components/details/Counter";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { CardActions } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { selectUser } from './../../store/user/userSelector';

const useSecondStyles = makeStyles({
  root: {
    width: 345,
    height: 220,
  },
  media: {
    height: 220,
    padding: 20,
  },
  noMargin: {
    margin: 0,
  },
  relative: {
    positigion: "relative",
  },
  absolute: {
    position: "absolute",
    right: 0,
    top: 0,
  },
});

const ShoppingCart = () => {
  const classes = useStyles();
  const secondClasses = useSecondStyles();
  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser)
  let totalPrice = 0;
  console.log(user.product);

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
            <h3 className="main_banner">Shoping Cart</h3>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Loader isLoading={loading}>
          <Container maxWidth="lg" style={{ position: "relative" }}>
            {user.product.length > 0 ? (
              <Grid container>
                {user.product.map((el) => {
                  return (
                    <>
                      <Grid item xs={8} md={8}>
                        <Grid container>
                          <Grid item xs={5} md={3} lg={3}>
                            <Card className={classes.root} variant="outlined">
                              <CardActionArea>
                                <CardMedia
                                  className={secondClasses.media}
                                  image={el.img}
                                  title="photo"
                                />
                              </CardActionArea>
                            </Card>
                          </Grid>
                          <Grid item xs={7} md={9} lg={9}>
                            <Card
                              variant="outlined"
                              className={secondClasses.media}
                            >
                              <Box>
                                <Box
                                  component="div"
                                  display="flex"
                                  justifyContent="space-between"
                                >
                                  <Box>
                                    <h5 className={classes.noMargin}>
                                      {el.title}
                                    </h5>
                                    <p>Shirt - blue</p>
                                    <p>Color: blue</p>
                                    <p>Size: M</p>
                                  </Box>
                                  <Box>
                                    <Box>
                                      <Counter />
                                    </Box>
                                  </Box>
                                </Box>
                                <Box
                                  component="div"
                                  display="flex"
                                  justifyContent="space-between"
                                  alignItems="center"
                                >
                                  <Box>
                                    <Button>
                                      <DeleteIcon></DeleteIcon>Remove Item
                                    </Button>

                                    <Button>
                                      <FavoriteIcon />
                                      Move to wish list
                                    </Button>
                                  </Box>
                                  <p>
                                    <span>
                                      <strong>{el.price}$</strong>
                                    </span>
                                  </p>
                                </Box>
                              </Box>
                            </Card>
                          </Grid>
                        </Grid>
                      </Grid>
                    </>
                  );
                })}
                <Grid
                  item
                  xs={4}
                  md={4}
                  classes={{ root: secondClasses.absolute }}
                >
                  <Card className={secondClasses.media} variant="outlined">
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textPrimary"
                        variant="h5"
                      >
                        The Total Amount Of{" "}
                        {user.product.map((el) => {
                          totalPrice += el.price;
                        })}
                        {totalPrice}$
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        Shipping
                      </Typography>
                      <Typography variant="body2" component="p">
                        The total amount of (including VAT)
                        <br />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" color="primary">
                        Go to checkout
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            ) : (
              "add product"
            )}
          </Container>
        </Loader>
      </Grid>
    </MainContent>
  );
};

export default ShoppingCart;
