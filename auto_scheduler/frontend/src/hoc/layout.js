import React, { useEffect } from "react";
import { connect } from "react-redux";

import { AUTHENTICATE } from "../actions";
import NavBar from "../components/navbar";

const Layout = ({ checkAuthenticated, children }) => {
  useEffect(() => {
    checkAuthenticated();
  }, []);

  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

const mapDispachToProps = (dispatch) => {
  return {
    checkAuthenticated: () => dispatch({ type: AUTHENTICATE }),
  };
};

export default connect(null, mapDispachToProps)(Layout);
