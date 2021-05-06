import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { RESUME_API } from '../../config';
import InputLine from './Components/InputLine';
import AddBtn from './Components/AddBtn';
import WorkBox from './Components/WorkBox';
import FinishBtn from './Components/FinishBtn';
import styled from 'styled-components';

const Resume = () => {
  const [workBox, setWorkBox] = useState([0]);
  const [workHistory, setWorkHistory] = useState([]);
  const [loadInput, setLoadInput] = useState({
    id: '',
    title: '',
    fullName: '',
    email: '',
    phone: '',
    intro: '',
  });
  const [loadWork, setLoadWork] = useState({
    id: '',
    isWorking: '',
    startYear: '',
    startMonth: '',
    endYear: '',
    endMonth: '',
    position: '',
  });

  const [isFinal, setIsFinal] = useState('');
  const location = useLocation();
  const history = useHistory();
  const params = useParams();
  const token = localStorage.getItem('token');

  const handleBasicInfo = e => {
    const { name, value } = e.target;
    setLoadInput(loadInput => ({ ...loadInput, [name]: value }));
  };

  const handleLoadWork = e => {
    const { name, value } = e.target;
    setLoadWork(loadWork => ({ ...loadWork, [name]: value }));
  };

  useEffect(() => {
    if (!location.state.isNew) {
      fetch(`${RESUME_API}/${params.id}`, {
        headers: {
          authorization: token,
        },
      })
        .then(res => res.json())
        .then(info => {
          const results = info.RESULTS;
          setLoadInput({
            id: results.id,
            title: results.title,
            fullName: results.fullName,
            email: results.email,
            phone: results.phone,
            intro: results.intro,
          });
          setWorkHistory(results.workInfo);
        });
    } else {
      fetch(`${RESUME_API}`, {
        headers: {
          authorization: token,
        },
      })
        .then(res => res.json())
        .then(info => {
          const results = info.RESULTS;
          setLoadInput({
            id: results.id,
            title: results.title,
            fullName: results.fullName,
            email: results.email,
            phone: results.phone,
          });
        });
    }
  }, []);

  const clickAdd = () => {
    setWorkBox([...workBox, workBox.length]);
  };

  const clickSave = id => {
    loadWork.id = id;
    workHistory.push(loadWork);
    setLoadWork({});
    alert('저장 완료 😏');
  };

  const handleIsFinal = final => {
    setIsFinal(final);

    const resumeInfo = {
      title: loadInput.title,
      fullName: loadInput.fullName,
      email: loadInput.email,
      phone: loadInput.phone,
      intro: loadInput.intro,
      workInfo: workHistory,
      isFinal: isFinal,
    };

    fetch(`${RESUME_API}`, {
      method: 'POST',
      headers: {
        authorization: token,
      },
      body: JSON.stringify(resumeInfo),
    })
      .then(res => res.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          alert('성공');
          history.push('/storage');
        } else {
          alert('실패');
        }
      });
  };

  useEffect(() => {
    const resumeInfo = {
      title: loadInput.title,
      fullName: loadInput.fullName,
      email: loadInput.email,
      phone: loadInput.phone,
      intro: loadInput.intro,
      workInfo: workHistory,
      isFinal: isFinal,
    };
  }, [isFinal]);

  return (
    <ResumeContainer>
      <ResumeFormContainer>
        <ResumeForm>
          <BasicInfo>
            <ResumeTitle>
              <InputLine
                handleBasicInfo={handleBasicInfo}
                info="title"
                sizeBig={true}
                placeholder={'이력서 제목 (필수)'}
                loadInput={loadInput.title}
              />
            </ResumeTitle>
            <div>
              <InputLine
                handleBasicInfo={handleBasicInfo}
                info="fullName"
                placeholder={'이름 (필수)'}
                loadInput={loadInput.fullName}
              />
              <InputLine
                handleBasicInfo={handleBasicInfo}
                info="email"
                placeholder={'이메일 (필수)'}
                loadInput={loadInput.email}
              />
              <InputLine
                handleBasicInfo={handleBasicInfo}
                info="phone"
                placeholder={'연락처 (필수) ex.010-0000-0000'}
                loadInput={loadInput.phone}
              />
            </div>
          </BasicInfo>
          <div>
            <BoxTitle>간단 소개글</BoxTitle>
            <AboutText
              name="intro"
              onChange={handleBasicInfo}
              placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요.(3-5줄 권장)"
              value={loadInput.intro}
            />
          </div>
          <div>
            <BoxTitle>경력</BoxTitle>
            <AddBtn
              clickAdd={clickAdd}
              workBox={workBox}
              setWorkBox={setWorkBox}
            />
            {!location.state.isNew
              ? workHistory.map(work => {
                  return (
                    <WorkBox
                      workHistory={workHistory}
                      setWorkHistory={setWorkHistory}
                      handleLoadWork={handleLoadWork}
                      key={work.id}
                      id={work.id}
                      isNew={location.state.isNew}
                      workBox={workBox}
                      setWorkBox={setWorkBox}
                      clickSave={clickSave}
                      work={work}
                    />
                  );
                })
              : workBox.map(boxId => {
                  return (
                    <WorkBox
                      workHistory={workHistory}
                      setWorkHistory={setWorkHistory}
                      handleLoadWork={handleLoadWork}
                      boxId={boxId}
                      key={boxId}
                      id={boxId}
                      isNew={location.state.isNew}
                      workBox={workBox}
                      setWorkBox={setWorkBox}
                      clickSave={clickSave}
                    />
                  );
                })}
          </div>
        </ResumeForm>
      </ResumeFormContainer>
      <ResumeFooter>
        <FinishBtn handleIsFinal={handleIsFinal} status="0" value="임시 저장" />
        <FinishBtn handleIsFinal={handleIsFinal} status="1" value="작성 완료" />
      </ResumeFooter>
    </ResumeContainer>
  );
};

export default Resume;

const ResumeContainer = styled.div`
  position: relative;
`;

const ResumeFormContainer = styled.div`
  ${props => props.theme.flexCenter};
  flex-direction: column;
  width: 70%;
  margin: 190px auto 80px; auto;
`;

const ResumeForm = styled.div`
  width: 100%;
  margin-bottom: 50px;
  font-size: 18px;
`;

const BasicInfo = styled.div`
  margin-bottom: 80px;
`;

const ResumeTitle = styled.div`
  margin-bottom: 80px;
`;

const BoxTitle = styled.div`
  border-bottom: 1px solid ${props => props.theme.grayBorder};
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const AboutText = styled.textarea`
  margin-bottom: 80px;
  width: 100%;
  border-style: none;
  outline: none;
  resize: none;
  font-size: 16px;
`;

const ResumeFooter = styled.div`
  position: fixed;
  bottom: 0;
  ${props => props.theme.flexAround}
  width: 100%;
  height: 80px;
  border-top: 1px solid ${props => props.theme.grayBorder};
  background-color: white;
`;
