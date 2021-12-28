import React from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

import { Container } from "./style";
import { ACTIVATE } from "../../actions";

const Activate = ({ verify, activate }) => {
  const { uid, token } = useParams();

  const handleVerify = () => {
    activate({ uid, token });
  };

  if (verify) {
    return <Navigate to="/login" />;
  }
  return (
    <Container>
      <h1>Verify your Account:</h1>
      <button onClick={handleVerify}>Verify</button>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  verify: state.auth.verify,
});

const mapDispachToProps = (dispatch) => {
  return {
    activate: (data) => dispatch({ type: ACTIVATE, payload: data }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Activate);
