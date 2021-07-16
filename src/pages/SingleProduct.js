import React from 'react'
import MainContent from '../layout/layouts/MainContent';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import { useState } from 'react';
import { CardActionArea } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { BasicTable } from '../components/details/BasicTable';
import { Container } from '@material-ui/core';
import Counter from '../components/details/Counter'
import SelectedSize from '../components/details/SelectSize'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../components/Loader';
import CustomizedButtons from '../components/details/CustomizedButtons';
import NavTabs from '../components/NavTabs'
import Api from '../api/Api';
import useStyles from '../styles/SingleProductStyles'
const SingleProduct = () => {
    const classes = useStyles();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        setLoading(true);
        Api.getSingleItem(id)
        .then(resp => setData(resp))
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
            })
    }, [])

    console.log(data);

    return (
        <MainContent>
            <Grid container>
                <Grid item xs={12} lg={12} md={12}>
                    <Box component='div' className={classes.bannerColor} display='flex' justifyContent='center' mb={5}>
                        <h3>Product Page</h3>
                    </Box>
                </Grid>
            </Grid>

            <Grid container>
                <Loader isLoading={loading}>
                    {!!data.hasOwnProperty('title') && <Container maxWidth='lg' style={{ display: 'flex' }}>
                        <Grid item xs={6} lg={6} md={6}>
                            <Grid container justify='space-between' mb={4}>
                                <Grid item xs={12} lg={12} md={12}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={data.img}
                                                title={data.title}
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid style={{ marginBottom: '30px', marginTop: '30px' }} item xs={3} lg={3} md={3}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media2}
                                                image={data.img}
                                                title={data.title}
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid style={{ marginBottom: '30px', marginTop: '30px' }} item xs={3} lg={3} md={3}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media2}
                                                image={data.img}
                                                title={data.title}
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid style={{ marginBottom: '30px', marginTop: '30px' }} item xs={3} lg={3} md={3}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media2}
                                                image={data.img}
                                                title={data.title}
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} lg={6} md={6} component={Box} pl={3} mb={5}>

                            <h5 className={classes.noMargin}>{data.title}</h5>
                            <p className={classes.textMuted}>Shirts</p>
                            <ul className={classes.ratings}>
                                <li>
                                    <i className="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li>
                                    <i className="far fa-star fa-sm"></i>
                                </li>
                            </ul>
                            <p className={classes.pMargins}><span ><strong>${data.price}</strong></span></p>
                            <p>{data.description}
                            </p>
                            <BasicTable data={data} />
                            <Box component='div' display='flex'>
                                <Counter />
                                <SelectedSize />
                            </Box>
                            <Box component='div' display='flex' mt={2}>
                                <CustomizedButtons></CustomizedButtons>
                            </Box>
                        </Grid>
                    </Container>}
                    <Container maxWidth='lg' style={{ display: 'flex' }}>
                        <NavTabs data={data} />
                    </Container>
                </Loader>

            </Grid>

        </MainContent>
    )
}

export default SingleProduct;