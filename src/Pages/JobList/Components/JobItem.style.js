import styled from 'styled-components';

export const JobItem = styled.article`
  width: 270px;
  height: 375px;
  margin: 10px;
  border-radius: 10px;
`;

export const JobItemImg = styled.div`
  position: relative;
  height: 185px;

  img {
    width: 100%;
    height: 185px;
    border: 1px solid ${props => props.theme.grayBtn};
    border-radius: 10px;
  }
`;

export const JobHeartBtn = styled.span`
  ${props => props.theme.flexCenter}
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: rgba(113, 113, 113, 0.7);
  cursor: pointer;

  svg {
    margin-right: 10px;
    color: ${props => (props.liked ? 'red' : props.theme.grayBtn)};
  }
`;

export const HeartCount = styled.span`
  font-size: 14px;
  color: #fff;
`;

export const JobItemContent = styled.div`
  margin-top: 20px;
  cursor: pointer;
`;

export const ItemTask = styled.h3`
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 600;
`;

export const ItemCompany = styled.p`
  padding: 5px 10px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
`;

export const ItemLocation = styled.p`
  padding: 5px 10px;
  color: ${props => props.theme.lightGray};
  font-size: 14px;
`;

export const ItemBonus = styled.p`
  padding: 5px 10px;
  color: ${props => props.theme.mainGray};
  font-size: 13px;
  font-weight: 400;
`;
