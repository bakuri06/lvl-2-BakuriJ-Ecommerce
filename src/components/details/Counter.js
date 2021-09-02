import { Box } from "@material-ui/core";
import { useState } from "react";
import "./Counter.css";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../store/cart/cartActionCreator";
import { useSelector } from "react-redux";
import { selectQuantity } from "../../store/cart/cartSelector";

const Counter = () => {
  let dispatch = useDispatch();
  let counter = useSelector(selectQuantity);

  const minusCounter = () => {
    if (counter > 0) {
      dispatch(decrement());
    }
  };
  const plusCounter = () => {
    dispatch(increment());
  };


  return (
    <Box mt={"20px"}>
      <Box color="#554F4F" fontSize="15px">
        Quantity
      </Box>
      <Box>
        <form noValidate autoComplete="off">
          <Button variant="outlined" onClick={minusCounter}>
            -
          </Button>
          <Button variant="outlined">{counter}</Button>
          <Button variant="outlined" onClick={plusCounter}>
            +
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Counter;
