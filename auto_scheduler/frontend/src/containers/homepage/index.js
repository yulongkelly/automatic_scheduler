import React from "react";

import { ButtonContainer, ButtonLink, HomePageContainer, Title, LinkText} from "./style";

class HomePage extends React.Component {
  render() {
    return (
      <HomePageContainer>
        <Title>Welcome to Auto Scheduler</Title>
        <ButtonContainer>
          <ButtonLink href="/signup"><LinkText>Sign Up</LinkText></ButtonLink>
          <ButtonLink href="/login"><LinkText padding={"0 55px"}>Log In</LinkText></ButtonLink>
        </ButtonContainer>
      </HomePageContainer>
    );
  }
}

export default HomePage;
