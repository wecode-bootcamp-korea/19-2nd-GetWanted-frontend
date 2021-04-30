import styled from 'styled-components';

export const ApplicationWrap = styled.div`
  width: 100%;
  background-color: #f6f6f6;
`;

export const ApplicationInner = styled.section`
  display: flex;
  justify-content: flex-start;
  width: 70%;
  margin: 0 auto;
  padding: 50px 0;
`;

export const ApplicationTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

export const ApplicationAside = styled.aside`
  width: 15%;
  height: 300px;
  margin-right: 1%;
`;

export const AsideTitle = styled.li`
  padding: 40px 0;
  color: ${props => props.theme.lightGray};
  font-size: 15px;
`;

export const AsideMenu = styled.li`
  padding: 10px 0;
  font-size: 16px;
  font-weight: 200;
  color: ${props => props.theme.blueTitle};
  font-weight: 600;
  cursor: pointer;
`;

export const ApplicationContent = styled.div`
  width: 84%;
  padding: 100 0;
`;

export const ApplyList = styled.ul`
  width: 80%;
  margin: auto;
  ${props => props.theme.flexAround};
`;

export const ListItem = styled.li`
  position: relative;
  width: 150px;
  height: 150px;
  padding-top: 30px;

  & + &:after {
    position: absolute;
    top: 20px;
    left: -5px;
    width: 1px;
    height: 100px;
    content: '';
    background-color: ${props => props.theme.grayBorder};
  }
`;

export const Count = styled.p`
  text-align: center;
  font-size: 40px;
  color: ${props =>
    props.id === props.selected
      ? props.theme.blueTitle
      : props.theme.lightGray};
`;

export const CountName = styled.p`
  margin-top: 30px;
  color: ${props =>
    props.id === props.selected
      ? props.theme.blueTitle
      : props.theme.lightGray};
  text-align: center;
  font-size: 18px;
`;

export const ApplyListHeader = styled.div`
  position: relative;
  height: 50px;
  margin: 30px 0;

  svg {
    position: absolute;
    top: 14px;
    right: 170px;
    font-size: 20px;
    color: ${props => props.theme.lightGray};
  }
`;

export const ApplyCount = styled.p`
  float: left;
  padding-top: 10px;
  line-height: 30px;
`;

export const ApplySearch = styled.input`
  float: right;
  width: 150px;
  padding: 15px 0;
  background: none;
  font-size: 16px;

  &::placeholder {
    text-align: right;
    font-size: 16px;
    color: ${props => props.theme.lightGray};
  }
`;

export const ListContentHeader = styled.ul`
  ${props => props.theme.flexBetween};
`;

export const ListHeader = styled.li`
  ${props => props.theme.flexCenter};
  width: 20%;
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.grayBorder};
  font-size: 14px;
  color: ${props => props.theme.mediumGray};

  &:first-child {
    padding-left: 20px;
    width: 35%;
    justify-content: flex-start;
  }

  &:nth-child(2) {
    width: 30%;
  }

  &:last-child {
    padding-right: 10px;
  }
`;

export const ListContentWrap = styled.div`
  height: 500px;
`;

export const ItemListInner = styled.ul`
  padding: 15px 15px;
  background-color: #fff;
  ${props => props.theme.flexBetween};
  border-bottom: 1px solid ${props => props.theme.grayBorder};
`;

export const ItemList = styled.li`
  ${props => props.theme.flexCenter};
  width: 20%;

  img {
    width: 20px;
    height: 20px;
  }

  &:first-child {
    width: 35%;
    justify-content: flex-start;
  }

  &:nth-child(2) {
    width: 30%;
  }

  p {
    font-size: 14px;
    text-align: center;
    margin-left: 10px;
  }
`;

export const Company = styled.p`
  margin-left: 10px;
`;

export const Apply = styled.p`
  color: ${props =>
    props.apply ? props.theme.lightGray : props.theme.blueTitle};
`;
