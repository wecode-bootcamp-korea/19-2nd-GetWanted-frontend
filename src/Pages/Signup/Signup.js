import React, { useState } from 'react';
import styled from 'styled-components';
import Signinputs from './Components/Signinputs';
import { useHistory, useLocation } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { SIGNUP_API } from '../../config';

const Signup = props => {
  const location = useLocation();
  const history = useHistory();
  const [showModal, setShowModal] = useState(true);

  const [InputActive, setInputActive] = useState({
    name: false,
    phonenumber: false,
    password: false,
    repwd: false,
  });

  const [inValue, setValue] = useState({
    email: location.state.email,
    name: '',
    phonenumber: '',
    password: '',
    repwd: '',
    position: '',
  });
  const [pwdValidation, setPwdValidation] = useState(false);

  const closeModal = () => {
    setShowModal(prev => !prev);
  };

  const goToMain = () => {
    history.push('/');
    closeModal();
  };

  const handleBorder = e => {
    const { name } = e.target;

    setInputActive({
      ...InputActive,
      [name]: !InputActive[name],
    });
  };

  const inputValue = e => {
    const { name, value } = e.target;
    setValue({ ...inValue, [name]: value });
  };

  const passwordCheck = e => {
    if (inValue.password !== inValue.repwd) {
      setPwdValidation(!pwdValidation);
      alert('비밀번호가 일치하지 않습니다!');
    }
    if (inValue.password === inValue.repwd) dataSend();
  };

  const dataSend = () => {
    fetch(`${SIGNUP_API}`, {
      method: 'POST',
      body: JSON.stringify({
        email: inValue.email,
        name: inValue.name,
        phonenumber: inValue.phonenumber,
        password: inValue.password,
        repwd: inValue.repwd,
        position: inValue.position,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data['MESSAGE'] === 'SUCCESS') {
          alert('회원가입 성공!');
          history.push('/login');
        } else if (data['MESSAGE'] === 'INVALID_EMAIL') {
          alert('올바른 이메일 형식이 아닙니다');
        } else if (data['MESSAGE'] === 'INVALID_PASSWORD') {
          alert('비밀번호 형식은 6글자 이상입니다');
        } else if (data['MESSAGE'] === 'INVALID_NUMBER') {
          alert('연락처 형식은 010-1234-5678 입니다');
        }
      });
  };

  return (
    showModal && (
      <Background>
        <SignupWrapper>
          <ModalHeader>
            <h3>회원가입</h3>
            <CloseButton onClick={goToMain}>
              <IoMdClose />
            </CloseButton>
          </ModalHeader>
          <ModalBody>
            <Form>
              {signUpList.map((content, idx) => {
                return (
                  <Signinputs
                    key={content.id}
                    idx={idx}
                    name={content.name}
                    type={content.type}
                    title={content.title}
                    placeholder={content.placeholder}
                    handleBorder={handleBorder}
                    inputValue={inputValue}
                    InputActive={InputActive}
                  />
                );
              })}
              <TypeSection>
                <input
                  type="radio"
                  name="position"
                  value="프론트엔드"
                  onClick={inputValue}
                />
                프론트엔드
                <input
                  type="radio"
                  name="position"
                  value="백엔드"
                  onClick={inputValue}
                />
                백엔드
                <input
                  type="radio"
                  name="position"
                  value="풀스택"
                  onClick={inputValue}
                />
                풀스택
              </TypeSection>
            </Form>
            <Button onClick={passwordCheck}>회원가입하기</Button>
          </ModalBody>
        </SignupWrapper>
      </Background>
    )
  );
};

export default Signup;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  ${props => props.theme.flexCenter}
`;

const SignupWrapper = styled.div`
  background-color: white;
  max-width: 400px;
  border-radius: 10px;
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
  padding: 30px;
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
  background-color: ${props => props.theme.blueTitle};
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const signUpList = [
  {
    id: 0,
    title: '이름',
    type: 'text',
    placeholder: '이름을 입력해주세요',
    name: 'name',
  },
  {
    id: 1,
    title: '휴대폰 번호',
    type: 'text',
    placeholder: '(예시)010-3456-7890',
    name: 'phonenumber',
  },
  {
    id: 2,
    title: '비밀번호',
    type: 'password',
    placeholder: '비밀 번호를 6자리 이상 입력해주세요',
    name: 'password',
  },
  {
    id: 3,
    title: '비밀번호 확인',
    type: 'password',
    placeholder: '비밀 번호를 다시 한 번 입력해주세요',
    name: 'repwd',
  },
];
