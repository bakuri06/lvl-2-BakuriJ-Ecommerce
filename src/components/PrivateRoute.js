import React from "react";
import { Redirect, Route } from "react-router-dom";
import Loader from "./Loader";
import { useSelector } from 'react-redux';
import { selectUser } from "../store/user/userSelector";
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const data = useSelector(selectUser)
  console.log(data);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (data.user.hasOwnProperty("name")) {
          return (
            <Loader isLoading={data.isLoggingIn}>
              <Component {...props} />
            </Loader>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
