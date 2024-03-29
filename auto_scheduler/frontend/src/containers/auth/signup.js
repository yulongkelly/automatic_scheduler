import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import { SIGNUP } from "../../actions";
import { Container, Form, InputContainer, Error } from "./style";
import backgound from '../../static/signupbackground.jpg'


class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      formData: {
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        re_password: "",
        shouldShowError: false,
      },
    };
  }

  handleChange = (e) => {
    let prevFormData = this.state.formData;
    this.setState({
      formData: {
        ...prevFormData,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state.formData);
  };

  handleCloseError = () => {
    this.setState({
      shouldShowError: false,
    })
  }

  render() {
    const inputObjects = [
      ["Email", "email", this.state.formData.email],
      ["First Name", "first_name", this.state.formData.first_name],
      ["Last Name", "last_name", this.state.formData.last_name],
      ["Password", "password", this.state.formData.password],
      ["Retype Password", "re_password", this.state.formData.re_password],
    ];

    let error;
    if (this.props.error) {
      error = Object.values(this.props.error)[0];
    }

    if (this.props.isAuthenticated) {
      return <Navigate to="/" />;
    }

    if (this.props.signupSuccess) {
      return <Navigate to="/login" />;
    }

    return (
      <Container img={backgound}>
        <Error show={this.props.error !== null}>{error}</Error>
        <Form onSubmit={this.handleSubmit} color={"rgb(255,182,193, 0.5)"}>
          {inputObjects.map((inputObject) => {
            return (
              <InputContainer>
                <label>
                  <span>{inputObject[0]}:</span>
                  <input
                    type={
                      inputObject[1].includes("password") ? "password" : "text"
                    }
                    name={inputObject[1]}
                    value={inputObject[2]}
                    onChange={this.handleChange}
                    required
                  />
                </label>
              </InputContainer>
            );
          })}
          <input type="submit" value="Submit" />
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  signupSuccess: state.auth.signupSuccess,
  error: state.auth.signupError,
});

const mapDispachToProps = (dispatch) => {
  return {
    signup: (formData) => dispatch({ type: SIGNUP, payload: formData }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Signup);
