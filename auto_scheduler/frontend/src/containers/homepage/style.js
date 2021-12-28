import styled from "styled-components";

import backgound from "../../static/homebackground.png";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-image: url(${backgound});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const ButtonLink = styled.a`
  color: darkgoldenrod;
  filter: saturate(2);
  margin: 0 30px;
  font-size: 20px;
  padding: 10px 10px;
  border-radius: 10px;
  border: 1px solid;
  text-decoration: none;
  color: black;
  &:visited {
    color: darkgoldenrod;
    filter: saturate(2);
  }
`;

export const LinkText = styled.h5`
  display: inline;
  padding: ${(props) => (props.padding ? props.padding : "0 50px")};
`;

export const Title = styled.h1`
  color: #fafad2;
  filter: saturate(1.5);
  font-family: 'Dancing Script';
  font-size: 60px;
  margin-bottom: 10%;
`;
