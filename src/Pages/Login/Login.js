import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { FaRegEnvelope, FaComment } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { EMAIL_API } from '../../config';
import { KAKAO_LOGIN_API_URL } from '../../config';
const { Kakao } = window;

const Login = props => {
  const history = useHistory();

  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${KAKAO_LOGIN_API_URL}`, {
          method: 'POST',
          body: JSON.stringify({
            Authorization: authObj.access_token,
          }),
        })
          .then(res => res.json())
          .then(res => {
            if (res.TOKEN) {
              localStorage.setItem('TOKEN', res.TOKEN);
              alert('GetWanted에 오신 것을 환영합니다');
              history.push('/');
            }
          });
      },
    });
  };

  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(true);

  const goToMain = () => {
    history.push('/main');
    closeModal();
  };

  const closeModal = () => {
    setShowModal(prev => !prev);
  };

  const valueInput = e => {
    const { value } = e.target;

    setEmail(value);
  };

  const handleEnterEvent = e => {
    if (e.keyCode === 13) {
      sendEmail(email);
    }
  };

  const sendEmail = email => {
    fetch(`${EMAIL_API}`, {
      method: 'POST',
      body: JSON.stringify({ email: email }),
    })
      .then(res => res.json())
      .then(data => {
        if (data['MESSAGE'] === 'SUCCESS') {
          history.push({ pathname: '/userpass', state: { email: email } });
          localStorage.setItem('TOKEN', data.access_token);
        } else if (data['MESSAGE'] === 'INVALID_EMAIL') {
          alert('옳지 않은 이메일 형식입니다.');
        } else if (data['MESSAGE'] === 'ACCOUNT_NOT_EXIST') {
          history.push({ pathname: '/signup', state: { email: email } });
        } else if (data['MESSAGE'] === 'USE_SOCIAL_LOGIN') {
          alert('소셜 로그인을 사용해 주세요!');
        }
        console.log(data);
      });
  };

  //동의하기 절차를 위한 테스트용으로 필요함
  useEffect(() => {
    sendUnlink();
  }, []);

  function sendUnlink() {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
  }

  return (
    showModal && (
      <Background>
        <LoginWrapper>
          <ModalHeader>
            <img alt="로고이미지" src={'/images/getwanted.jpg'}></img>
            <CloseButton onClick={goToMain}>
              <IoMdClose />
            </CloseButton>
          </ModalHeader>
          <ModalBody>
            <h1>
              개발자를 위한
              <br />
              커리어 플랫폼,겟원티드
            </h1>
            <h2>
              커리어 성장과 행복을 위한 여정 <br />
              지금 겟원티드에서 시작하세요.
            </h2>
            <Form isEmail={email.length === 0 || email.includes('@')}>
              <label htmlFor="email-input">
                이메일
                <input
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  id="email-input"
                  name="email"
                  onChange={valueInput}
                  onKeyDown={handleEnterEvent}
                />
                <CheckP isEmail={email.length === 0 || email.includes('@')}>
                  올바른 이메일 형식이 아닙니다
                </CheckP>
                <Button onClick={() => sendEmail(email)}>
                  <FaRegEnvelope />
                  이메일로 시작하기
                </Button>
                <span>or</span>
              </label>
            </Form>
            <Button
              bgColor={'#f9dc02'}
              color={'#361d1c'}
              onClick={kakaoLoginClickHandler}
            >
              <FaComment color={'#361d1c'} />
              카카오톡으로 시작하기
            </Button>
            <Button bgColor={'white'} color={'black'} brColor={'gray'}>
              <FcGoogle />
              구글로 시작하기
            </Button>
            <P>
              걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
              <br />
              회원가입 시<span>개인정보 처리방침</span>과 <span>이용약관</span>
              을 확인하였으며, 동의합니다.
            </P>
          </ModalBody>
        </LoginWrapper>
      </Background>
    )
  );
};

export default Login;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  ${props => props.theme.flexCenter}
`;

const LoginWrapper = styled.div`
  max-width: 400px;
  border: 1px solid black;
  background-color: white;
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
  border: none;
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

  h1 {
    font-size: 26px;
    font-weight: 600;
    line-height: 1.54;
  }

  h2 {
    font-size: 16px;
    margin: 16px 0 5px 0;
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
    padding: 0 15px 0 15px;
    margin: 20px 0 0 0;
    border: 1px solid ${props => (props.isEmail ? props.theme.grayBtn : 'red')};
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

const CheckP = styled.div`
  display: ${props => (props.isEmail ? 'none' : 'block')};
  color: red;
  text-align: left;
  padding: 10px 0;
`;
const Button = styled.button`
  width: 342px;
  height: 54px;
  margin-top: ${props => (props.bgColor ? 0 : '20px')};

  border: ${props => (props.brColor ? `2px solid #cacaca` : 'none')};
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
