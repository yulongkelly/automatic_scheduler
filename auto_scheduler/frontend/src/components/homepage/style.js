import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://as1.ftcdn.net/v2/jpg/02/10/06/50/1000_F_210065067_g0gcQVGWRS8U8rmmm8N7jSGJZAL1x1LT.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 300px;
`;

export const CommonButton = styled.button`
  margin: 0 30px;
  font-size: 20px;
  width: 200px;
  padding: 10px;
  background-color: transparent;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 50px;
`;
