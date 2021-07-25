import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import SelectLabel from "./SelectLabel";
import "./label.css";
import { Pagination } from "@material-ui/lab";

const Label = ({ onChange,total,limit }) => {

  return (
    <Grid
      item
      xs={12}
      className="stylee"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={3}>
        <a href="#!">
          <i className="fas fa-th-list fa-lg mr-1"></i>
        </a>
        <a href="#!">
          <i className="fas fa-th-large fa-lg"></i>
        </a>
      </Grid>
      <Grid item xs={4} md={5}>
        <Box component="div" display="flex" flexWrap="wrap">
          <Box className="fixx">
            <SelectLabel />
          </Box>
        </Box> 
      </Grid>
      <Grid item xs={5} md={4}>
        <Pagination onChange={(e, p) => onChange(e,p)} count={total/limit} />
      </Grid>
    </Grid>
  );
};

export default Label;
