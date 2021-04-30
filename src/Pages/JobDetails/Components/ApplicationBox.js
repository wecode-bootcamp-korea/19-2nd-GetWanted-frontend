import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Attachement from './Attachment';
import AsideButton from './AsideButton';

const ApplicationBox = ({
  handleAside,
  setIsAsideOpen,
  userInfo,
  resumeList,
}) => {
  const [submitReady, setSubmitReady] = useState(false);

  const resumeCheck = resumeList.map(resume => {
    return false;
  });
  const [isCheckBoxClicked, setIsCheckBoxClicked] = useState([...resumeCheck]);

  const handleCheckBoxClick = index => {
    const newArr = [...isCheckBoxClicked];
    newArr[index] = !newArr[index];
    setIsCheckBoxClicked(newArr);
  };

  const checkSubmitReady = () => {
    let bool = false;
    for (let clicked of isCheckBoxClicked) {
      if (clicked) {
        bool = true;
        break;
      }
    }
    setSubmitReady(bool);
  };

  useEffect(() => {
    checkSubmitReady();
  }, [isCheckBoxClicked]);

  const handleGoBack = () => {
    setIsAsideOpen(true);
  };

  return (
    <Container>
      <ApplyBox>
        <Title>
          <h2>지원하기</h2>
          <GoBack onClick={handleGoBack}>뒤로</GoBack>
        </Title>
        <Applicant>
          <h3>지원 정보</h3>

          <ApplicantInfo>
            <h4>이름</h4>
            <ApplicantInput
              type="name"
              name="name"
              defaultValue={userInfo.fullName}
            />
          </ApplicantInfo>
          <ApplicantInfo>
            <h4>이메일</h4>
            <ApplicantInput
              type="text"
              name="email"
              defaultValue={userInfo.email}
            />
          </ApplicantInfo>
          <ApplicantInfo>
            <h4>연락처</h4>
            <ApplicantInput
              type="text"
              name="phone"
              defaultValue={userInfo.phone}
            />
          </ApplicantInfo>
        </Applicant>
        <AttachmentFiles>
          <h3>첨부 파일</h3>
          {resumeList &&
            resumeList.map((item, index) => {
              return (
                <Attachement
                  id={item.id}
                  key={item.id}
                  index={index}
                  fullName={item.name}
                  date={item.date}
                  status={item.status}
                  handleCheckBoxClick={handleCheckBoxClick}
                  isClicked={isCheckBoxClicked[index]}
                />
              );
            })}
          <AsideButton
            submitReady={submitReady}
            handleAside={handleAside}
            value="제출하기"
          />
        </AttachmentFiles>
      </ApplyBox>
    </Container>
  );
};

export default ApplicationBox;

const Container = styled.div`
  position: fixed;
  overflow: scroll;
  width: 340px;
  height: 620px;
  border: 1px solid ${props => props.theme.grayBorder};
  font-weight: 500;
`;

const ApplyBox = styled.div``;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.grayBorder};
`;
const GoBack = styled.button`
  border-style: none;
  background-color: transparent;
  color: ${props => props.theme.mediumGray};
  font-size: 16px;
  cursor: pointer;
`;
const Applicant = styled.div`
  padding: 20px;
  line-height: 1.7;

  h3 {
    margin-bottom: 10px;
  }
`;
const ApplicantInfo = styled.div`
  display: flex;
  padding: 20px 0px;
  border-bottom: 1px solid ${props => props.theme.grayBorder};

  h4 {
    width: 60px;
  }
`;

const ApplicantInput = styled.input`
  width: 200px;
  font-size: 16px;
  color: black;
`;

const AttachmentFiles = styled.div`
  padding: 20px;

  h3 {
    margin-bottom: 30px;
  }
`;
