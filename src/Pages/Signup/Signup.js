import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

const Signup = props => {
  const [InputActive, setInputActive] = useState({
    name: false,
    phone: false,
    pwd: false,
    Repwd: false,
  });
  // const [inputValue, setInputValue] = useState('');

  const handleBorder = e => {
    const { name } = e.target;

    setInputActive({
      ...InputActive,
      [name]: !InputActive[name],
    });
  };

  return (
    <SignupWrapper>
      <ModalHeader>
        <h3>회원가입</h3>
        <CloseButton>
          <IoMdClose />
        </CloseButton>
      </ModalHeader>
      <ModalBody>
        <Form>
          <label for="0">
            <NameInput InputActive={InputActive}>
              이름
              <input
                type="text"
                placeholder="이름을 입력해주세요"
                id="0"
                name="name"
                onFocus={handleBorder}
                onBlur={handleBorder}
              />
            </NameInput>
          </label>

          <label for="1">
            <PhoneInput InputActive={InputActive}>
              휴대폰 번호
              <input
                type="text"
                placeholder="(예시)010-3456-7890"
                id="1"
                name="phone"
                onFocus={handleBorder}
                onBlur={handleBorder}
                // onKeyUp={() => addEnter}
                // value={inputValue}
              />
            </PhoneInput>
          </label>

          <label for="2">
            <PwdInput InputActive={InputActive}>
              비밀번호
              <input
                type="password"
                name="pwd"
                placeholder="비밀 번호를 6자리 이상 입력해주세요"
                id="2"
                onFocus={handleBorder}
                onBlur={handleBorder}
              />
            </PwdInput>
          </label>

          <label for="3">
            <RePwd InputActive={InputActive}>
              비밀번호 확인
              <input
                type="password"
                name="repwd"
                placeholder="비밀 번호를 다시 한 번 입력해주세요"
                id="3"
                onFocus={handleBorder}
                onBlur={handleBorder}
              />
            </RePwd>
          </label>

          <TypeSection>
            <input type="radio" name="jobtype" value="프론트엔드" />
            프론트엔드
            <input type="radio" name="jobtype" value="백엔드" />
            백엔드
            <input type="radio" name="jobtype" value="풀스택" />
            풀스택
          </TypeSection>
        </Form>
        <Button onClick={handleBorder}>회원가입하기</Button>
      </ModalBody>
    </SignupWrapper>
  );
};

export default Signup;

const SignupWrapper = styled.div`
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
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${props => props.theme.lightGray};
    font-size: 14px;
    font-weight: 400;
  }
`;

const NameInput = styled.div`
  input {
    width: 343px;
    height: 50px;
    padding-right: 15px;
    padding-left: 15px;
    margin: 20px 0;
    border: 1px solid
      ${props =>
        props.InputActive.name ? props.theme.blueTitle : props.theme.grayBtn};

    border-radius: 5px;
    font-size: 15px;

    &::placeholder {
      color: ${props => props.theme.lightGray};
      font-size: 14px;
    }
  }
`;

const PhoneInput = styled.div`
  input {
    width: 343px;
    height: 50px;
    padding-right: 15px;
    padding-left: 15px;
    margin: 20px 0;
    border: 1px solid
      ${props =>
        props.InputActive.phone ? props.theme.blueTitle : props.theme.grayBtn};
    border-radius: 5px;
    font-size: 15px;

    &::placeholder {
      color: ${props => props.theme.lightGray};
      font-size: 14px;
    }
  }
`;

const PwdInput = styled.div`
  input {
    width: 343px;
    height: 50px;
    padding-right: 15px;
    padding-left: 15px;
    margin: 20px 0;
    border: 1px solid
      ${props =>
        props.InputActive.pwd ? props.theme.blueTitle : props.theme.grayBtn};
    border-radius: 5px;
    font-size: 15px;

    &::placeholder {
      color: ${props => props.theme.lightGray};
      font-size: 14px;
    }
  }
`;

const RePwd = styled.div`
  input {
    width: 343px;
    height: 50px;
    padding-right: 15px;
    padding-left: 15px;
    margin: 20px 0;
    border: 1px solid
      ${props =>
        props.InputActive.repwd ? props.theme.blueTitle : props.theme.grayBtn};
    border-radius: 5px;
    font-size: 15px;

    &::placeholder {
      color: ${props => props.theme.lightGray};
      font-size: 14px;
    }
  }
`;

const TypeSection = styled.div`
  ${props => props.theme.flexCenter};
  margin-right: 20px;

  input {
    width: 20px;
    height: 20px;
    margin: 10px;
  }
`;

const Button = styled.button`
  width: 342px;
  height: 54px;
  margin: 15px 0;
  border: none;
  border-radius: 27px;
  background-color: ${props =>
    props.isActive ? props.theme.blueTitle : props.theme.grayBtn};
  color: ${props => props.theme.mainGray};
  font-weight: 600;
  cursor: pointer;
`;
