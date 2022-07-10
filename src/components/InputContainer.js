import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1.25rem;
  align-items: flex-start;
  input,
  select {
    padding: 0 8px;
    font-size: 14px;
    width: 100%;
    border: 1px solid #000000;
    border-radius: 4px;
    height: 36px;
  }
  label {
    margin-bottom: 0.5rem;
    color: #444444;
    font-size: 14px;
    font-weight: bold;
  }
`;

export default InputContainer;
