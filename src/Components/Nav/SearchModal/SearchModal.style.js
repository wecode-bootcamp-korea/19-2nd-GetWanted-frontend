import styled from 'styled-components';

export const SearchMoalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const SearchModalInner = styled.div`
  ${props => props.theme.flexCenter};
  position: fixed;
  top: 0%;
  width: 100%;
  height: 200px;
  background-color: #fff;

  svg {
    position: absolute;
    bottom: 30px;
    right: 30px;
    color: ${props => props.theme.mainGray};
    font-size: 25px;
    cursor: pointer;
  }
`;

export const SearchBox = styled.div`
  position: relative;
  width: 70%;
  height: 60px;
  border-radius: 50px;
  border: 1px solid ${props => props.theme.blueTitle};

  svg {
    position: absolute;
    top: 20px;
    left: 30px;
    color: ${props => props.theme.mainGray};
    font-size: 20px;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 80%;
  padding: 10px 0;
  margin: 8px 0 0 80px;
  background: none;
  color: ${props => props.theme.mainGray};
  border: none;
  font-size: 20px;
`;
