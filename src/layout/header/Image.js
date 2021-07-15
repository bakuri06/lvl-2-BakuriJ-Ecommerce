import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    overlay:{
      top: '-531px',
      width: '100 %',
      height: '532px',
      position: 'relative',
      background: '#000000a8',
      textAlign: 'center',
    },
    media:{
      height: 400,
    },
    typography:{
        top: '280px',
        position: 'relative',
        color: '#fff',
    },
    
  }));

const Image = () => {
    const classes=useStyles();
    return (
        <Box component="div" height={400}>
            <CardMedia
                className={classes.media}
                component="img"
                image="https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg"
            />
            <div className={classes.overlay}>
                <Typography className={classes.typography} variant="h4"><b>Shop</b></Typography>
            </div>
        </Box>
    )
}

export default Image;