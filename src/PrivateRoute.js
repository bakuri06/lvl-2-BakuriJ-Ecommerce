import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./store/UserContextProvider";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const userData = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userData.data.isLoggingIn) {
          return <Component {...props} />;
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
