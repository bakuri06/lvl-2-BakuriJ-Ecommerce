import { makeStyles } from "@material-ui/core";

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
    },
    bannerColor:{
        backgroundColor: '#F6F6F6',
        padding:'30px',
        marginTop:'80px',
    },
    noMargin:{
        margin:0,
    },
    h3:{
        fontWeight: 500,
        fontSize:'1.25rem',
        color: '#4f4f4f',
    },
    textMuted:{
        color:'#6c757d',
        textTransform: 'uppercase',
        marginBottom: '.5rem',
        fontSize: "80%",
        fontWeight: 400,
    },
    pMargins:{
        marginTop: '1rem',
        marginBottom: '1rem',
        color:'#4f4f4f',
        fontWeight: 300,
    },
    ratings:{
        display:'flex'
    }
});

export default useStyles;