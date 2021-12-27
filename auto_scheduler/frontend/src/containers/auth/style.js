import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  font-size: 25px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const Error = styled.div`
  opacity: ${(props) => (props.show ? 1 : 0)};
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 15px;
  width: 80%;
  text-align: center;
  color: #842029;
  background-color: #f8d7da;
  margin-bottom: 20px;
`;

export const Cross = styled.div`
  width: 100px;
  height: 100px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    background: #d00;
  }

  &::before {
    left: 50%;
    width: 30%;
    margin-left: -15%;
    height: 100%;
  }

  &::after {
    top: 50%;
    height: 30%;
    margin-top: -15%;
    width: 100%;
  }
`;
