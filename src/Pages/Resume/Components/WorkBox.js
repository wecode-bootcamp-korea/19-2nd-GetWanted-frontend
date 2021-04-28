import React, { useEffect, useState } from 'react';
import { AiOutlineSave, AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

const WorkBox = ({
  clickSave,
  workHistory,
  setWorkHistory,
  handleLoadWork,
  workBox,
  setWorkBox,
  boxId,
  id,
  work,
  isNew,
}) => {
  const [isWorking, setIsWorking] = useState(false);

  const handleIsWorking = e => {
    setIsWorking(!isWorking);
  };

  const deleteBox = boxId => {
    const newWorkBox = workBox.filter(el => {
      return el !== boxId;
    });
    setWorkBox(newWorkBox);

    const historyDeleted = workHistory.filter(el => {
      return el.id !== boxId;
    });
    setWorkHistory(historyDeleted);
  };

  return (
    <BoxContainer id={id}>
      <FromToContainer>
        <Dates>
          <div className="fromDate">
            <Year
              onChange={handleLoadWork}
              className="year"
              name="startYear"
              placeholder="YYYY"
              value={!isNew ? work.startYear : undefined}
            />
            .
            <Month
              onChange={handleLoadWork}
              name="startMonth"
              className="month"
              placeholder="MM"
              value={!isNew ? work.startMonth : undefined}
            />
          </div>

          {!isWorking && (
            <div className="toDate">
              -
              <Year
                onChange={handleLoadWork}
                className="year"
                name="startYear"
                placeholder="YYYY"
                value={!isNew ? work.endYear : undefined}
              />
              .
              <Month
                onChange={handleLoadWork}
                name="startMonth"
                className="month"
                placeholder="MM"
                value={!isNew ? work.endMonth : undefined}
              />
            </div>
          )}
        </Dates>
        <Form id={boxId}>
          <input
            name="isWorking"
            onClick={() => handleIsWorking()}
            onChange={handleLoadWork}
            type="checkbox"
            defaultChecked={!isNew ? work.isWorking : undefined}
          />
          <label>현재 재직중</label>
        </Form>
      </FromToContainer>

      <WorkDetailsContainer>
        <WorkTitle
          onChange={handleLoadWork}
          name="companyName"
          size="18px"
          placeholder="회사명"
          value={!isNew ? work.companyName : undefined}
        />
        <WorkTitle
          onChange={handleLoadWork}
          name="position"
          size="16px"
          placeholder="부서명/직책"
          value={!isNew ? work.position : undefined}
        />
        <textarea
          onChange={handleLoadWork}
          name="details"
          placeholder="주요 성과"
          value={!isNew ? work.details : undefined}
        />
      </WorkDetailsContainer>
      <BoxButtons>
        <button id={boxId} onClick={() => clickSave(boxId)}>
          <AiOutlineSave />
        </button>
        <button id={boxId} onClick={() => deleteBox(boxId)}>
          <AiOutlineClose />
        </button>
      </BoxButtons>
    </BoxContainer>
  );
};

export default WorkBox;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const FromToContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const Dates = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Year = styled.input`
  width: 40px;
`;
const Month = styled.input`
  width: 30px;
`;

const Form = styled.form`
  font-size: 16px;
  color: ${props => props.theme.mediumGray};
`;

const WorkDetailsContainer = styled.div`
  textarea {
    width: 100%;
    border-style: none;
    outline: none;
    resize: none;
    font-size: 16px;
  }
`;

const WorkTitle = styled.input`
  width: 100%;
  border-style: none;
  font-size: ${props => props.size};
`;

const BoxButtons = styled.div`
  display: flex;
  align-items: baseline;

  button {
    border-style: none;
    background-color: transparent;
    color: ${props => props.theme.mediumGray};
    font-size: 20px;
    cursor: pointer;
    margin-left: 5px;
  }
`;
