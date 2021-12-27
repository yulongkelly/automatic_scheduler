import React from "react";
import { connect } from "react-redux";

import { SIGNUP } from "../../actions";
import { Form, InputContainer } from "./style";

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
    this.props.signup(this.state.formData)
  };

  render() {
    const inputObjects = [
      ["Email", "email", this.state.formData.email],
      ["First Name", "first_name", this.state.formData.first_name],
      ["Last Name", "last_name", this.state.formData.last_name],
      ["Password", "password", this.state.formData.password],
      ["Retype Password", "re_password", this.state.formData.re_password],
    ];
    return (
      <div>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispachToProps = dispatch => {
  return {
    signup: (formData) => dispatch({type: SIGNUP, payload: formData})
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Signup);
