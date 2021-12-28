import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import { ButtonLink, LinkText } from "../homepage/style";
import { Container, Form, InputContainer, Error } from "./style";
import { LOGIN } from "../../actions";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      formData: {
        email: "",
        password: "",
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
    this.props.login(this.state.formData);
  };

  render() {
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

    const inputObjects = [
      ["Email", "email", this.state.formData.email],
      ["Password", "password", this.state.formData.password],
    ];
    return (
      <Container>
        <Error show={this.props.error !== null}>
           {error}
        </Error>
        <Form onSubmit={this.handleSubmit}>
          {inputObjects.map((inputObject) => {
            return (
              <InputContainer>
                <label>
                  {inputObject[0]}:
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
        <ButtonLink href="">
          <LinkText>Reset Password</LinkText>
        </ButtonLink>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  error: state.auth.loginError,
});

const mapDispachToProps = (dispatch) => {
  return {
    login: (formData) => dispatch({ type: LOGIN, payload: formData }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Login);
