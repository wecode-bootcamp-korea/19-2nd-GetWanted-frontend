import styled from 'styled-components';

export const FilterBoxWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const FilterBoxInner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 420px;
  border-radius: 5px;
  background-color: #fff;
`;

export const FilterBoxHeader = styled.div`
  ${props => props.theme.flexBetween};
  height: 50px;
`;

export const CloseBtn = styled.button`
  margin: 0 10px;
  padding: 0 10px;
  background: none;
  color: ${props => props.theme.mainGray};
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

export const TagCount = styled.p`
  font-weight: 500;
  position: relative;
`;

export const Count = styled.span`
  position: absolute;
  top: -1px;
  left: 35px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.theme.blueTitle};
  font-size: 15px;
  color: #fff;
  line-height: 18px;
  text-align: center;
`;

export const ResetBox = styled.div`
  ${props => props.theme.flexBetween}
  color: ${props => props.theme.mainGray};
  font-size: 13px;
  line-height: 40px;
  cursor: pointer;

  svg {
    margin-left: 20px;
    margin-right: 5px;
    font-size: 16px;
  }
`;

export const InnerText = styled.p`
  width: 60%;
  padding: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const TagHeader = styled.p`
  padding: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const TagBox = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Tag = styled.button`
  margin: 0 5px 10px 5px;
  padding: 10px 20px;
  background-color: ${props =>
    props.id === props.selected ? props.theme.blueTitle : '#f6f6f6'};
  color: ${props =>
    props.id === props.selected ? '#fff' : props.theme.mainGray};
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

export const InnerSmallText = styled.p`
  padding: 20px 0 0px 20px;
  font-size: 12px;
  color: ${props => props.theme.lightGray};
`;

export const SubmitBtn = styled.button`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 92%;
  padding: 15px 0;
  background-color: ${props => props.theme.blueTitle};
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;
