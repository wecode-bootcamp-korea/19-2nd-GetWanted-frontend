import React from 'react';
import styled from 'styled-components';

const Tag = ({ tagList }) => {
  console.log(tagList);
  return (
    <>
      {tagList.map(tag => (
        <TagButton>{tag.name}</TagButton>
      ))}
    </>
  );
};

export default Tag;

const TagButton = styled.button`
  height: 30px;
  padding: 0 10px;
  margin-right: 5px;
  border-style: none;
  border-radius: 20px;
  font-size: 12px;
  background-color: #f3f5f9;
  color: ${props => props.theme.mainGray};
`;
