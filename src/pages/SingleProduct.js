import React from 'react'
import MainContent from '../layout/layouts/MainContent';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import './LinkItem.css'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
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

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginRight: '20px',
        marginBottom: '20px'
    },
    media: {
        height: 300,
    },
    forFlex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    maxWidth: {
        maxWidth: 345,
    },
    media: {
        height: 300,
    },
    media2: {
        height: 140
    }
});


const SingleProduct = () => {
    const classes = useStyles();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(el => {
                setData({
                    title: el.title,
                    price: el.price,
                    img: el.image,
                    id: el.id,
                    description: el.description
                })
            })
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
                    <Box component='div' className='bannerColor' display='flex' justifyContent='center' mb={5}>
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

                            <h5 className='noMargin hStyles'>{data.title}</h5>
                            <p className="text-muted">Shirts</p>
                            <ul className="rating">
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
                            <p className="pMargins"><span ><strong>${data.price}</strong></span></p>
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