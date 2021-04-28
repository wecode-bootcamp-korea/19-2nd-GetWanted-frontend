import React, { useState } from 'react';
import styled from 'styled-components';

function InputLine({ loadInput, handleBasicInfo, info, sizeBig, placeholder }) {
  return (
    <TitleInput
      onChange={handleBasicInfo}
      name={info}
      sizeBig={sizeBig}
      placeholder={placeholder}
      value={loadInput}
    />
  );
}

export default InputLine;

const TitleInput = styled.input`
  margin: 10px 0;
  width: 100%;
  font-size: ${props => (props.sizeBig ? '36px' : '16px')};
`;
