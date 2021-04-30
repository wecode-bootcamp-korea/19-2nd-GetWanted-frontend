import React from 'react';
import styled from 'styled-components';

const AsideButton = ({ handleAside, type, value, submitReady }) => {
  return (
    <Button
      onClick={() => handleAside(value)}
      type={type}
      disabled={value === '제출하기' && !submitReady ? true : false}
      submitReady={submitReady}
    >
      {value}
    </Button>
  );
};

export default AsideButton;

const Button = styled.button`
  margin-top: 20px;
  width: 300px;
  height: 50px;
  border-style: none;
  border-radius: 30px;
  border: 1px solid
    ${props =>
      props.type !== 'white' && !props.submitReady
        ? '#ddd'
        : props.theme.blueTitle};
  background-color: ${props => {
    if (props.type === 'white') return 'white';
    else return props.submitReady ? props.theme.blueTitle : '#ddd';
  }};

  color: ${props => (props.type === 'white' ? props.theme.blueTitle : 'white')};
  font-size: 18px;
  cursor: ${props =>
    props.type !== 'white' && !props.submitReady ? 'not-allowed' : 'pointer'};
`;
