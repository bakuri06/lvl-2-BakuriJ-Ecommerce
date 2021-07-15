import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link as MLink} from "@material-ui/core"
import { SINGLE_LIST,PRODUCT_LIST } from '../../routes';
import {
    Link
} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginRight: '20px',
        marginBottom: '20px'
    },
    media: {
        height: 150,
    },
    forFlex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export default function AnotherCard({ data: { title, price, img,id,description } }) {
    const classes = useStyles();

    return (
        <MLink component={Link} to={SINGLE_LIST.replace(':id',id)}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent classes={{ root: classes.forFlex }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
        </MLink>
    );
}
