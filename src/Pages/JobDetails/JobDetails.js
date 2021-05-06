import React, { useEffect, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Slide from './Components/Slide';
import Map from './Components/Map';
import ApplicationBox from './Components/ApplicationBox';
import AsideButton from './Components/AsideButton';
import Tag from './Components/Tag';
import {
  JOB_DETAILS_API,
  JOB_DETAILS_USER_API,
  JOB_DETAILS_RESUME_API,
} from '../../config';
const token = localStorage.getItem('token');
const JobDetails = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(true);
  const [details, setDetails] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [resumeList, setResumeList] = useState([]);
  const params = useParams();

  const reuseFetch = (api, method, token, payload) => {
    const options = {
      method: method,
      headers: {
        authorization: token,
      },
    };
    if (method === 'POST') {
      options.body = JSON.stringify(payload);
    }
    return fetch(api, options).then(res => res.json());
  };

  const handleAside = value => {
    if (value === '지원하기') {
      reuseFetch(
        `${JOB_DETAILS_USER_API}?notification=${params.id}`,
        'GET',
        token
      )
        .then(result => {
          if (result.MESSAGE === 'ALREADY_APPLY') {
            alert('이미 지원한 공고입니다!');
          } else {
            setIsAsideOpen(false);
            setUserInfo(result.USER_INFORMATION);
          }
        })
        .catch(err => console.log(err));

      reuseFetch(`${JOB_DETAILS_RESUME_API}`, 'GET', token)
        .then(list => {
          setResumeList(
            list.RESULTS.fileresume_list.concat(list.RESULTS.resume_list)
          );
        })
        .catch(err => console.log(err));
    }
    if (value === '제출하기') {
      const applied = {
        notification_id: `${params.id}`,
      };
      reuseFetch(`${JOB_DETAILS_USER_API}`, 'POST', token, applied)
        .then(result => {
          alert('제출 완료 🙃');
          setIsAsideOpen(true);
        })
        .catch(err => console.log(err));
    }
  };

  useEffect(() => {
    fetch(`${JOB_DETAILS_API}/${params.id}`)
      .then(res => res.json())
      .then(jobDetails => {
        setDetails(jobDetails.NOTIFICATION_DETAIL);
      });
  }, []);

  return (
    <Container>
      {details.map(info => {
        return (
          <Fragment key={info.notification_id}>
            <InfoContainer>
              <Slide images={info.image_list} />
              <div className="summary">
                <Title>{info.title}</Title>
                <CompanyTitle>
                  <Company>{info.company_name}</Company>
                  <City>⎜{info.company_area}</City>
                </CompanyTitle>
                <Tags>
                  <Tag tagList={info.tag_list} />
                </Tags>
              </div>
              <div className="jobDetailsInfo">
                <DetailsInfo
                  dangerouslySetInnerHTML={{ __html: info.description }}
                ></DetailsInfo>
              </div>
              <LocationInfo>
                <LocationAddress>
                  <City>근무지역</City>
                  <span>{info.company_address}</span>
                </LocationAddress>
                <Map
                  companyName={info.company_name}
                  lat={info.latitude}
                  lon={info.longitude}
                />
              </LocationInfo>
            </InfoContainer>
            <AsideContainer>
              {isAsideOpen ? (
                <Aside>
                  <h3>채용보상금</h3>
                  <AwardInfo>
                    <li>
                      <h4>추천인</h4>
                      <p>500,000원</p>
                    </li>
                    <li>
                      <h4>지원자</h4>
                      <p>500,000원</p>
                    </li>
                  </AwardInfo>
                  <Buttons>
                    <AsideButton type="white" value="북마크하기" />
                    <AsideButton
                      handleAside={handleAside}
                      value="지원하기"
                      submitReady={true}
                    />
                  </Buttons>
                </Aside>
              ) : (
                <ApplicationBox
                  handleAside={handleAside}
                  setIsAsideOpen={setIsAsideOpen}
                  userInfo={userInfo}
                  resumeList={resumeList}
                />
              )}
            </AsideContainer>
          </Fragment>
        );
      })}
    </Container>
  );
};

export default JobDetails;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: 80px auto;
  color: #333;
`;

const InfoContainer = styled.div`
  width: 600px;
`;

const CompanyImg = styled.img`
  width: 600px;
  height: 400px;
`;

const Title = styled.div`
  margin: 20px 0px 10px 0px;
  font-size: 20px;
  font-weight: 600;
`;

const CompanyTitle = styled.div`
  font-size: 16px;
  line-height: 1.7;
`;
const Company = styled.span`
  font-weight: 600;
`;

const City = styled.span`
  color: ${props => props.theme.mediumGray};
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const DetailsInfo = styled.p`
  margin-top: 20px;
  line-height: 1.7;
  font-size: 16px;
`;

const LocationInfo = styled.div`
  border-top: 1px solid ${props => props.theme.grayBorder};
  margin-top: 60px;
`;

const LocationAddress = styled.div`
  margin: 20px 0;
  span {
    margin-right: 20px;
  }
`;

const AsideContainer = styled.aside`
  width: 340px;
`;

const Aside = styled.div`
  position: fixed;
  width: 340px;
  height: 300px;
  padding: 20px;
  border: 1px solid ${props => props.theme.grayBorder};
  font-size: 15px;
  font-weight: 600;
`;

const AwardInfo = styled.ul`
  display: flex;
  margin-top: 20px;
  line-height: 1.5;
  li {
    margin-right: 40px;
    h4 {
      color: ${props => props.theme.mediumGray};
    }
  }
`;

const Buttons = styled.div`
  margin-top: 40px;
`;
