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
