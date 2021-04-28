import React from 'react';
import styled from 'styled-components';

const Signinputs = props => {
  const {
    idx,
    type,
    title,
    name,
    placeholder,
    handleBorder,
    inputValue,
    InputActive,
  } = props;

  return (
    <label htmlfor={idx}>
      {title}
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onFocus={handleBorder}
        onBlur={handleBorder}
        onChange={inputValue}
        InputActive={InputActive}
      />
    </label>
  );
};

export default Signinputs;

const Input = styled.input`
  width: 343px;
  height: 50px;
  padding: 0 15px 0 15px;
  margin: 20px 0;
  border: 1px solid
    ${props =>
      props.InputActive[props.name]
        ? props.theme.blueTitle
        : props.theme.grayBtn};

  border-radius: 5px;
  font-size: 15px;

  &::placeholder {
    color: ${props => props.theme.lightGray};
    font-size: 14px;
  }
`;
