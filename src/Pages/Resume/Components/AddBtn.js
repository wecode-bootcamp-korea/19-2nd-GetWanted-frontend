import React from 'react';
import styled from 'styled-components';

const AddBtn = ({ clickAdd }) => {
  return (
    <>
      <AddButton onClick={clickAdd}>+ 추가</AddButton>
    </>
  );
};

export default AddBtn;

const AddButton = styled.button`
  border-style: none;
  background-color: transparent;
  color: ${props => props.theme.blueTitle};
  font-size: 18px;
  cursor: pointer;
`;
