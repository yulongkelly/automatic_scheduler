import React from "react";

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
    console.log(e.target.value);
    console.log(
      this.state.formData.email,
      this.state.formData.first_name,
      this.state.formData.last_name,
      this.state.formData.password,
      this.state.formData.re_password
    );
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

export default Signup;
