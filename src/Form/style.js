import styled from "styled-components";

const FormMain = styled.form`
  display: flex;
  flex-direction: column;
  background: gray;
  padding: 15px;
  border-radius: 15px;
  input {
    padding: 05px 25px;
    border: 4px solid gray;
    border-radius: 8px;
    margin: 5px;
  }

  button {
    padding: 8px;
    background: green;
    margin: 25px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: greenyellow;
    }
  }
`;

export default FormMain;
