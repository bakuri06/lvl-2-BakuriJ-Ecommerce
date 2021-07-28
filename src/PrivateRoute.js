import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./store/UserContextProvider";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const userContext = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userContext.isLoggedIn) {
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
