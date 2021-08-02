import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Api from "../api/Api";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { SINGLE_LIST } from "./../routes";
import { Link, generatePath } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AdminTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
    setLoading(true);
    Api.getFilteredList(event.target.value)
      .then((resp) => setData(resp))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    Api.getProductList('products')
      .then((resp) => setData(resp))
      .catch((err) => {
        console.log("Caught it: ", err)
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const classes = useStyles();

  return (
    <div>
      <InputLabel style={{ marginTop: "20px" }} id="demo-simple-select-label">
        Filter
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={filter}
        onChange={handleChange}
      >
        <MenuItem value={5}>Five</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={15}>Fifteen</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
      </Select>
      <TableContainer component={Paper}>
        <Loader isLoading={loading}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="right">Title</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((el) => (
                <StyledTableRow key={el.id}>
                  <StyledTableCell component="th" scope="row">
                    {el.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link
                      to={generatePath(SINGLE_LIST, {
                        id: el.id,
                      })}
                    ></Link>
                    {el.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link
                      to={generatePath(SINGLE_LIST, {
                        id: el.id,
                      })}
                    ></Link>
                    {el.price}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link
                      to={generatePath(SINGLE_LIST, {
                        id: el.id,
                      })}
                    ></Link>
                    {el.description}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Loader>
      </TableContainer>
    </div>
  );
}
