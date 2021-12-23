import React from "react";

import { ButtonContainer, CommonButton, HomePageContainer, Title} from "./style";

class HomePage extends React.Component {
  render() {
    return (
      <HomePageContainer>
        <Title>Welcome to Auto Scheduler</Title>
        <ButtonContainer>
          <CommonButton onClick={}>Sign Up</CommonButton>
          <CommonButton>Log In</CommonButton>
        </ButtonContainer>
      </HomePageContainer>
    );
  }
}

export default HomePage;
