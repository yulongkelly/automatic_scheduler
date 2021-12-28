import React from "react";

import { ButtonContainer, ButtonLink, LinkText } from "../homepage/style";
import { Form, InputContainer, Container } from "./style";
import backgound from "../../static/loginbackground.jpg";

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
    console.log(e.target.value);
    console.log(this.state.formData.email, this.state.formData.password);
  };

  render() {
    const inputObjects = [
      ["Email", "email", this.state.formData.email],
      ["Password", "password", this.state.formData.password],
    ];
    return (
      <Container img={backgound}>
        <Form onSubmit={this.handleSubmit} color={"rgb(173, 216, 230, 0.5)"}>
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
        <ButtonContainer>
          <ButtonLink href="">
            <LinkText>Reset Password</LinkText>
          </ButtonLink>
        </ButtonContainer>
      </Container>
    );
  }
}

export default Login;
