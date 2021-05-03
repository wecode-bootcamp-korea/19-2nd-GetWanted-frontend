import styled from 'styled-components';

export const Mymenu = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 17.5%;
  width: 170px;
  height: 373px;
  border: 1px solid ${props => props.theme.grayBorder};
`;

export const MyMenuList = styled.li`
  padding: 13px 10px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;

  &:first-child {
    position: relative;
    &:after {
      position: absolute;
      top: 10px;
      right: 40px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: ${props => props.theme.blueTitle};
      content: '';
    }
  }

  &:nth-child(3) {
    border-top: 1px solid ${props => props.theme.grayBorder};
  }

  &:last-child {
    border-top: 1px solid ${props => props.theme.grayBorder};
    background-color: #f2f4f7;
  }
`;

export const MyMenuItem = styled.a`
  color: #000;
  text-decoration: none;
  text-align: center;
`;
