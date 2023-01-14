import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1.6rem;
    text-transform: uppercase;
    opacity: 0.8;
  }
  input,
  textarea {
    outline: 0;
    border: 1px solid ${({ theme }) => theme.inputBorder};
    font-size: 1.6rem;
    background-color: transparent;
    color: ${({ theme }) => theme.color};
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    &:focus {
      outline: 2px solid ${({ theme }) => theme.textGradient};
    }
  }
`;

const InputField = styled.input``;

const TextArea = styled.textarea`
  resize: none;
  height: 18rem;
`;

const TextField = (props) => {
  const { id, label, type, name, value, onChange } = props;
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <TextArea
          id={id}
          maxlength="300"
          name={name}
          required
          value={value}
          onChange={onChange}
        ></TextArea>
      ) : (
        <InputField
          id={id}
          type={type}
          maxlength="50"
          name={name}
          required
          value={value}
          onChange={onChange}
        />
      )}
    </Container>
  );
};

export default TextField;
