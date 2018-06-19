import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AuthRouter({
  component: comp,
  props: compProps,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => {
        compProps.authenticated ? (
          <comp {...props} {...compProps} />
        ) : (
          <Redirect to={"/"} />
        );
      }}
    />
  );
}
