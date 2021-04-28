import React from 'react';
import styled from 'styled-components';

function FinishBtn({ value, status, border, color, handleIsFinal }) {
  return (
    <Finish
      onClick={() => handleIsFinal(status)}
      status={status}
      border={border}
      color={color}
    >
      {value}
    </Finish>
  );
}

export default FinishBtn;

const Finish = styled.button`
  width: 300px;
  height: 60px;
  border-style: none;
  border-radius: 30px;
  border: 1px solid ${props => props.theme.blueTitle};
  background-color: ${props =>
    props.status === '0' ? 'white' : props.theme.blueTitle};
  color: ${props => (props.status === '0' ? props.theme.blueTitle : 'white')};
  color: ${props => props.border};
  font-size: 18px;
  cursor: pointer;
`;
