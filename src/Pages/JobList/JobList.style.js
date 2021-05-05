import styled from 'styled-components';

export const JobListWrap = styled.div`
  padding-top: 80px;
  background-color: #fff;
`;

export const TagFilterLine = styled.section`
  width: 100%;
  height: 60px;
  padding-top: 5px;
  /* border: 1px solid ${props => props.theme.grayBorder}; */
`;

export const TagFilterBox = styled.div`
  ${props => props.theme.flexBetween};
  width: 12%;
  padding: 8px 15px;
  margin-left: 15%;
  border: 1px solid ${props => props.theme.grayBorder};
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: #f6f6f6;
  }

  svg {
    font-size: 25px;
  }
`;

export const FilterBoxTitle = styled.h4`
  font-size: 14px;
`;

export const FilterBoxText = styled.span`
  color: ${props => props.theme.lightGray};
  font-size: 14px;
`;

export const JobListContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto;
`;
