import React, { useEffect } from "react";
import { connect } from "react-redux";

import { AUTHENTICATE } from "../actions";

const Layout = ({ checkAuthenticated, children }) => {
  useEffect(() => {
    checkAuthenticated();
  }, []);

  return <div>{children}</div>;
};

const mapDispachToProps = (dispatch) => {
  return {
    checkAuthenticated: () => dispatch({ type: AUTHENTICATE }),
  };
};

export default connect(null, mapDispachToProps)(Layout);
