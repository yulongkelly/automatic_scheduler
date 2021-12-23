import React from "react";

import { Form, InputContainer } from "./style";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <InputContainer>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
          </InputContainer>
          <InputContainer>
            <label>
              First Name:
              <input type="text" name="first_name" />
            </label>
          </InputContainer>
          <InputContainer>
            <label>
              Last Name:
              <input type="text" name="last_name" />
            </label>
          </InputContainer>
          <InputContainer>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
          </InputContainer>
          <InputContainer>
            <label>
              Retype Password:
              <input type="password" name="re_password" />
            </label>
          </InputContainer>
        </Form>
      </div>
    );
  }
}

export default Signup;
