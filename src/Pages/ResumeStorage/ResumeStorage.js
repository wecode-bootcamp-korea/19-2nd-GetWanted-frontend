import React, { Component } from 'react';
import StorageButton from './Components/StorageButton';
import styled from 'styled-components';

const ResumeStorage = () => {
  return (
    <Container>
      <StorageBox>
        <StorageButton type="write" />
      </StorageBox>
    </Container>
  );
};

export default ResumeStorage;

const Container = styled.div`
  height: 100vh;
  padding-top: 80px;
  background-color: #f8f8fa;
`;

const StorageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto;
`;
