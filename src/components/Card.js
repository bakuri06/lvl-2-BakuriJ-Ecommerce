import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link as MLink } from "@material-ui/core"
import { SINGLE_LIST } from '../routes';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root: {
        width: 'auto',
        marginRight: '20px',
        marginBottom: '20px'
    },
    media: {
        height: 300,
    },
    forFlex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height:'150px'
    }
});

export default function MediaCard({ data: { title, price, img, id } }) {
    const classes = useStyles();
    const history = useHistory();

    const goToItem = () => {
        history.push({
            pathname: SINGLE_LIST.replace(':id', id),
        })
    }

    return (
        <MLink component={Link} to={SINGLE_LIST.replace(':id', id)}>
            <Card className={classes.root} onClick={goToItem}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={img}
                        title={title}
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
