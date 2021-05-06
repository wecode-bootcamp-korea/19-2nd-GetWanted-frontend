import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useHistory, useLocation } from 'react-router-dom';
import { LOGIN_API } from '../../../config';
import styled from 'styled-components';
import PassChange from '../Components/PassChange';

const Userpassword = () => {
  const [isActive, setIsActive] = useState(false);
  const [passWord, setPassWord] = useState('');
  const [passChangeClick, setPassChangeClick] = useState(false);

  const location = useLocation();
  const history = useHistory();

  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(prev => !prev);
  };

  const goToMain = () => {
    history.push('/');
    closeModal();
  };

  const handleBorder = () => {
    setIsActive(!isActive);
  };

  const valueInput = e => {
    const { value } = e.target;

    setPassWord(value);
  };

  const goToLogin = () => {
    fetch(`${LOGIN_API}`, {
      method: 'POST',
      body: JSON.stringify({
        email: location.state.email,
        password: passWord,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data['MESSAGE'] === 'SUCCESS') {
          alert('로그인 성공!');
          history.push('/');
          localStorage.setItem('token', data.TOKEN);
        } else if (data['MESSAGE'] === 'INCORRECT_PASSWORD') {
          alert('비밀번호가 일치하지 않습니다!');
        }
      });
  };

  const ChangePassword = () => {
    setPassChangeClick(true);
  };

  const handleEnterEvent = e => {
    if (e.keyCode === 13) {
      goToLogin();
    }
  };

  return (
    showModal && (
      <Background>
        {passChangeClick ? (
          <PassChange
            goToMain={goToMain}
            isActive={isActive}
            handleBorder={handleBorder}
            email={location.state.email}
          />
        ) : (
          <PassWrapper>
            <ModalHeader>
              <h3>비밀번호 입력</h3>
              <CloseButton onClick={goToMain}>
                <IoMdClose />
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              <Form isActive={isActive}>
                <label for="password-input">
                  비밀번호
                  <input
                    type="password"
                    placeholder="비밀번호"
                    id="password-input"
                    name="password"
                    onChange={valueInput}
                    onFocus={handleBorder}
                    onBlur={handleBorder}
                    onKeyDown={handleEnterEvent}
                  />
                  <Button onClick={goToLogin}>로그인</Button>
                </label>
              </Form>
              <Password onClick={ChangePassword}>비밀번호 초기화/변경</Password>
            </ModalBody>
          </PassWrapper>
        )}
      </Background>
    )
  );
};

export default Userpassword;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  ${props => props.theme.flexCenter}
`;

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

const Password = styled.button`
  padding-top: 20px;
  border: none;
  background-color: white;
  color: ${props => props.theme.blueTitle};
  font-weight: bold;
`;
