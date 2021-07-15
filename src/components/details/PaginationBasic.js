import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationBasic() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={3} />
    </div>
  );
}
