import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Attachment = ({
  id,
  fullName,
  date,
  status,
  isClicked,
  handleCheckBoxClick,
  index,
}) => {
  const updateStatus = status => {
    if (status === undefined) return '첨부 완료';
    else return status ? '작성 완료' : '작성 중';
  };

  return (
    <Container isClicked={isClicked}>
      <Checkbox onClick={() => handleCheckBoxClick(index)}>
        <input id={id} type="checkbox" />
      </Checkbox>
      <File>
        <h4>{fullName}</h4>
        <FileInfo>
          <span>{date}</span>
          <span>
            {status === undefined
              ? '첨부 완료'
              : status === true
              ? '작성 완료'
              : '작성 중'}
          </span>
        </FileInfo>
      </File>
    </Container>
  );
};

export default Attachment;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  width: 300px;
  height: 60px;
  border: 1px solid
    ${props =>
      props.isClicked ? props.theme.blueTitle : props.theme.grayBorder};
  border-radius: 10px;
`;

const Checkbox = styled.label`
  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const File = styled.div`
  margin-left: 20px;
  line-height: 1.5;
  h4 {
    font-size: 14px;
  }
`;
const FileInfo = styled.div`
  font-size: 12px;
  span {
    margin-right: 10px;
    color: ${props => props.theme.mediumGray};
  }
`;
