import React from "react";
import { connect } from "react-redux";

import {
  ButtonContainer,
  ButtonLink,
  HomePageContainer,
  Title,
  LinkText,
  DesignLinkContainer,
  Img
} from "./style";
import background1 from "../../static/homebackground.png";
import background2 from "../../static/homebackground2.png";
import arrow from "../../static/arrow.png";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <HomePageContainer background={background2} position={"left 10%"}>
            <DesignLinkContainer>
            <div><h1>Start Designing</h1></div>
            <div><a href={"/design"}><Img src={arrow}/></a></div>
            </DesignLinkContainer>
            
          </HomePageContainer>
        ) : (
          <HomePageContainer background={background1} position={"center center"}>
            <Title>Welcome to Auto Scheduler</Title>
            <ButtonContainer>
              <ButtonLink href="/signup">
                <LinkText>Sign Up</LinkText>
              </ButtonLink>
              <ButtonLink href="/login">
                <LinkText padding={"0 55px"}>Log In</LinkText>
              </ButtonLink>
            </ButtonContainer>
          </HomePageContainer>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(HomePage);
