import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { PASS_RESET_API } from '../../../config';

const PassChange = props => {
  const history = useHistory();
  const [email, setEmail] = useState(props.email);

  const valueInput = e => {
    const { value } = e.target;
    setEmail(value);
  };

  const sendNewPass = () => {
    fetch(`${PASS_RESET_API}`, {
      method: 'PATCH',
      body: JSON.stringify({ email: email }),
    })
      .then(res => res.json())
      .then(data => {
        if (data['MESSAGE'] === 'SUCCESS') {
          history.push('/login');
        }
      });
  };

  const handleEnterEvent = e => {
    if (e.keyCode === 13) {
      sendNewPass();
    }
  };

  return (
    <PassWrapper>
      <ModalHeader>
        <h3>비밀번호 재설정</h3>
        <CloseButton onClick={props.goToMain}>
          <IoMdClose />
        </CloseButton>
      </ModalHeader>
      <ModalBody>
        <Form isActive={props.isActive}>
          <label for="password-input">
            이메일
            <input
              type="text"
              value={props.email}
              id="password-input"
              name="password"
              onChange={valueInput}
              onFocus={props.handleBorder}
              onBlur={props.handleBorder}
              onKeyDown={handleEnterEvent}
            />
            <Button onClick={sendNewPass}>전송</Button>
          </label>
        </Form>
        <BottomP>*비밀번호를 재설정할 이메일 계정을 입력해주세요!</BottomP>
      </ModalBody>
    </PassWrapper>
  );
};

export default PassChange;

const PassWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
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
  border: 1px solid white;
  border-radius: 10px;
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
    margin: 20px 0 0 0;
    border: 1px solid
      ${props => (props.isActive ? props.theme.blueTitle : props.theme.grayBtn)};
    border-radius: 5px;
    font-size: 15px;
    &::placeholder {
      color: ${props => props.theme.lightGray};
      font-size: 14px;
    }
  }
`;

const Button = styled.button`
  width: 342px;
  height: 54px;
  margin-top: ${props => (props.bgColor ? 0 : '20px')};
  border: none;
  border-radius: 27px;
  background-color: ${props => props.theme.blueTitle};
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const BottomP = styled.p`
  padding-top: 20px;
  background-color: white;
  color: ${props => props.theme.lightGray};
  font-size: 12px;
`;
