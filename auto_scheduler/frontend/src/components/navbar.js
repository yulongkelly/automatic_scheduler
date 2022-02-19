import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { LOGOUT } from "../actions";
import {
  NavbarContainer,
  NavItem,
  NavManu,
  NavLink,
  AuthLinksContainer,
} from "./style";

const NavBar = ({ isAuthenticated, logout }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    setTimeout(() => logout(), navigate("/"))
  };

  return (
    <NavbarContainer>
      <NavManu>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <AuthLinksContainer>
          {isAuthenticated ? (
            <NavItem>
              <NavLink href="#!" onClick={handleOnClick}>
                LogOut
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink href="/signup">SignUp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Log In</NavLink>
              </NavItem>
            </>
          )}
        </AuthLinksContainer>
      </NavManu>
    </NavbarContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispachToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: LOGOUT }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(NavBar);
