import React from "react";

import { ButtonContainer, CommonButton, HomePageContainer } from "./style";

class HomePage extends React.Component {
  render() {
    return (
      <HomePageContainer>
        <h1>Welcome to Auto Scheduler</h1>
        <ButtonContainer>
          <CommonButton>Sign Up</CommonButton>
          <CommonButton>Log In</CommonButton>
        </ButtonContainer>
      </HomePageContainer>
    );
  }
}

export default HomePage;