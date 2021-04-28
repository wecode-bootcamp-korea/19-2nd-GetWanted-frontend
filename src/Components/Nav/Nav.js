import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsSearch, BsBell } from 'react-icons/bs';
import { GET_LOGIN_API } from '../../config';
import axios from 'axios';
import * as styled from './Nav.style';
import MyMenu from './Mymenu/MyMenu';
import SearchModal from './SearchModal/SearchModal';

const Nav = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [onModal, setOnModal] = useState(false);
  const [userToken, setUserToken] = useState(false);
  const history = useHistory();

  const goToResume = index => {
    if (index === 3) {
      history.push('/resume');
    } else {
      history.push('/');
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOnModal = () => {
    setOnModal(!onModal);
  };

  const goToLogin = () => {
    history.push('/login');
  };

  const goToMain = () => {
    history.push('/');
  };

  const handleCloseModal = () => {
    setOnModal(false);
  };

  useEffect(() => {
    axios.get(`${GET_LOGIN_API}`, {
      headers: {
        accessToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMX0.BjBx25V__6w4dNPPVC32UX6OZgQTNOs42oaoBk8xHFE',
      },
    });
    setUserToken(true);
  }, []);

  const clickLogout = index => {
    if (index === 8) {
      localStorage.removeItem('userInfo');
      history.push('/');
    }
  };

  return (
    <styled.NavWrap>
      <styled.NavInner>
        <styled.Logo onClick={goToMain}>
          <a href="/">
            <img src={'/images/getwanted.jpg'} alt="로고이미지" />
          </a>
        </styled.Logo>
        <styled.MainMenu>
          {MAINMENU.map((element, index) => {
            return (
              <styled.MainMenuLink
                key={index}
                href="/"
                onClick={() => goToResume(index)}
              >
                {element}
              </styled.MainMenuLink>
            );
          })}
        </styled.MainMenu>
        <styled.RightMenu>
          <styled.SearchBtn onClick={handleOnModal}>
            <BsSearch />
          </styled.SearchBtn>
          <styled.BellBtn>
            <BsBell />
          </styled.BellBtn>
          <styled.LoginBtn userToken={userToken} onClick={goToLogin}>
            로그인 / 회원가입
          </styled.LoginBtn>
          <styled.ProfileBtn userToken={userToken} onClick={toggleDropdown}>
            <styled.Profile src="https://lh5.googleusercontent.com/-f0sfd8ImFIg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckeMzt3LWccaKNGXrrK9Z__0dBeEQ/s96-c/photo.jpg" />
            <styled.NewPoint>N</styled.NewPoint>
          </styled.ProfileBtn>
          <styled.AdminPage>
            <styled.EnterPrise>기업 서비스</styled.EnterPrise>
          </styled.AdminPage>
        </styled.RightMenu>
      </styled.NavInner>
      <MyMenu show={dropdownVisible} clickLogout={clickLogout}></MyMenu>
      <SearchModal
        show={onModal}
        handleCloseModal={handleCloseModal}
      ></SearchModal>
    </styled.NavWrap>
  );
};

export default Nav;

const MAINMENU = ['채용공고', '커리어 성장', '직군별 연봉', '이력서', '매치업'];
