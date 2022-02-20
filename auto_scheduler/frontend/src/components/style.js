import styled from "styled-components";


export const NavbarContainer = styled.nav`
  height: 80px;
  display: flex;
  width: 100%;
  align-items: center;
  top: 0;
  z-index: 255;
  background: #B5B5B5;
`;

export const NavManu = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
  margin-right: 50px;
`;

export const NavLink = styled.a`
  color: #fff;
  display: flex;
  cursor: pointer;
  height: 100%;
  width: 60px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    border-bottom: 5px solid #01bf71;
  }

  &.active {
    border-bottom: 5px solid #01bf71;
  }
`;

export const AuthLinksContainer = styled.div`
  display: flex;
`;
