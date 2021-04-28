import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegEnvelope, FaComment } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Login = props => {
  const [isActive, setIsActive] = useState(false);

  const handleBorder = () => {
    setIsActive(!isActive);
  };
  return (
    <LoginWrapper>
      <ModalHeader>
        <img alt="로고이미지" src={'/images/getwanted.jpg'}></img>
        <CloseButton>
          <IoMdClose />
        </CloseButton>
      </ModalHeader>
      <ModalBody>
        <h1>
          직장인을 위한
          <br />
          커리어 플랫폼,원티드
        </h1>
        <h2>
          커리어 성장과 행복을 위한 여정 <br />
          지금 원티드에서 시작하세요.
        </h2>
        <Form isActive={isActive}>
          <label for="email-input">
            이메일
            <input
              type="email"
              placeholder="이메일을 입력해주세요"
              id="email-input"
              onFocus={handleBorder}
              onBlur={handleBorder}
            />
            <Button>
              <FaRegEnvelope />
              이메일로 시작하기
            </Button>
            <span>or</span>
          </label>
        </Form>
        <Button bgColor={'#f9dc02'} color={'#361d1c'}>
          <FaComment color={'#361d1c'} />
          카카오톡으로 시작하기
        </Button>
        <P>
          걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
          <br />
          회원가입 시<span>개인정보 처리방침</span>과 <span>이용약관</span>을
          확인하였으며, 동의합니다.
        </P>
      </ModalBody>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  max-width: 400px;
  border: 1px solid black;
`;

const ModalHeader = styled.div`
  position: relative;
  padding: 16px 20px;
  display: flex;
  justify-content: center;
  img {
    width: 150px;
  }
`;

const CloseButton = styled.button`
  background-color: white;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  svg {
    width: 54px;
    height: 54px;
    padding: 15px;
    border: none;
    background-color: white;
  }
`;

const ModalBody = styled.div`
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 26px;
    font-weight: 600;
    margin-top: 24px;
    line-height: 1.54;
  }

  h2 {
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 40px;
    line-height: 1.5;
    color: ${props => props.theme.mediumGray};
  }
`;

const Form = styled.div`
  display: flex;
  justify-content: center;

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${props => props.theme.lightGray};
    font-size: 14px;
    font-weight: 400;
  }

  input {
    width: 343px;
    height: 50px;
    padding-right: 15px;
    padding-left: 15px;
    margin: 20px 0;
    border: 1px solid
      ${props => (props.isActive ? props.theme.blueTitle : props.theme.grayBtn)};
    border-radius: 5px;
    font-size: 15px;

    &::placeholder {
      color: ${props => props.theme.lightGray};
      font-size: 14px;
    }
  }
  span {
    display: block;
    margin: 10px auto;
    font-size: 14px;
  }
`;
const Button = styled.button`
  width: 342px;
  height: 54px;
  border: none;
  border-radius: 27px;
  background-color: ${props =>
    props.bgColor ? props.bgColor : props.theme.blueTitle};
  color: ${props => (props.color ? props.color : 'white')};
  font-weight: 600;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
`;

const P = styled.p`
  margin-top: 20px;
  font-size: 12px;
  line-height: 18px;
  color: ${props => props.theme.lightGray};

  span {
    color: ${props => props.theme.blueTitle};
    text-decoration: underline;
    cursor: pointer;
  }
`;
