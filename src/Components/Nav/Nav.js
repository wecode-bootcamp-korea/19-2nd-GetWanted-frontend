import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { BsSearch, BsBell } from 'react-icons/bs';
import * as styled from './Nav.style';
import MyMenu from './Mymenu/MyMenu';
import SearchModal from './SearchModal/SearchModal';

const Nav = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [onModal, setOnModal] = useState(false);
  const [userToken, setUserToken] = useState(
    localStorage.getItem('accessToken')
  );
  const [searchInput, setSearchInput] = useState('');
  const [keyword, setKeyword] = useState('');
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

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

  const handleClickCloseModal = () => {
    setOnModal(false);
  };

  const handleEnterCloseModal = e => {
    if (e.key === 'Enter') {
      setOnModal(false);
    }
  };

  const handleSearchInput = e => {
    if (e.key === 'Enter') {
      setKeyword(searchInput);
    }
  };

  const onChangeInput = e => {
    setSearchInput(e.target.value);
  };

  const clickLogout = () => {
    localStorage.removeItem('accessToken');
    setUserToken(localStorage.getItem('accessToken'));
    history.push('/');
  };

  const goToApply = () => {
    history.push('/apply');
  };

  const myMenuClickEvent = index => {
    console.log(index);
    if (index === 8) {
      clickLogout();
    }
    if (index === 2) {
      goToApply();
    }
  };

  useEffect(() => {
    history.push(`/?search=${keyword}`);
  }, [keyword]);

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
      <MyMenu show={dropdownVisible} myMenuClickEvent={myMenuClickEvent} />
      <SearchModal
        show={onModal}
        handleClickCloseModal={handleClickCloseModal}
        onChangeInput={onChangeInput}
        handleSearchInput={handleSearchInput}
        handleEnterCloseModal={handleEnterCloseModal}
      />
    </styled.NavWrap>
  );
};

export default Nav;

const MAINMENU = ['채용공고', '커리어 성장', '직군별 연봉', '이력서', '매치업'];
