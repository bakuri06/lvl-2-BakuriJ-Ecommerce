import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../store/UserContextProvider";
import Loader from "./Loader";
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const userData = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userData.data.user.hasOwnProperty("name")) {
          return (
            <Loader isLoading={userData.data.isLoggingIn}>
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
