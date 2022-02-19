import React from "react";
import { connect } from "react-redux";

import {
  ButtonContainer,
  ButtonLink,
  HomePageContainer,
  Title,
  LinkText,
} from "./style";
import background1 from "./../../static/homebackground.png";
import background2 from "./../../static/homebackground2.png";
import arrow from "./../../static/arrow.png";

class HomePage extends React.Component {
  render() {
    
    return (
      <HomePageContainer>
        <Title>Welcome to Auto Scheduler</Title>
        <ButtonContainer>
          <ButtonLink href="/signup">
            <LinkText>
              {this.props.isAuthenticated ? "profile" : "Sign Up"}
            </LinkText>
          </ButtonLink>
          <ButtonLink href="/login">
            <LinkText padding={"0 55px"}>
              {this.props.isAuthenticated ? "design your schedule" : "Log In"}
            </LinkText>
          </ButtonLink>
        </ButtonContainer>
      </HomePageContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(HomePage);
