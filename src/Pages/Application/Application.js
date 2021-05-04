import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as styled from './Application.style';
import { GET_APPLYLIST_API } from '../../config';
import { BsSearch } from 'react-icons/bs';

const Application = props => {
  const [selected, setSelected] = useState(0);
  const [apply, setApply] = useState(false);
  const [applyList, setApplyList] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const getApplyListData = () => {
    axios
      .get(`${GET_APPLYLIST_API}`, {
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMX0.BjBx25V__6w4dNPPVC32UX6OZgQTNOs42oaoBk8xHFE',
        },
      })
      .then(({ data }) => {
        setApplyList(data.APPLYLIST);
      });
  };

  useEffect(() => {
    getApplyListData();
  }, []);

  const toggleCompensation = () => {
    setApply(!apply);
  };

  const clickApplyMenu = index => {
    setSelected(index);
  };

  const onChangeInput = e => {
    setSearchInput(e.target.value);
    if (!e.target.value) {
      setApplyList(ITEMINFO);
    }
  };

  const handlePressSubmit = e => {
    if (e.key === 'Enter') {
      const filterdList = applyList.filter(item => {
        return item.company_name.toLowerCase().includes(searchInput);
      });
      setApplyList(filterdList);
    }
  };

  return (
    <styled.ApplicationWrap>
      <styled.ApplicationInner>
        <styled.ApplicationAside>
          <ul>
            <styled.ApplicationTitle>지원 현황</styled.ApplicationTitle>
            <styled.AsideTitle>지원</styled.AsideTitle>
            <styled.AsideMenu>지원한 포지션</styled.AsideMenu>
          </ul>
        </styled.ApplicationAside>
        <styled.ApplicationContent>
          <styled.ApplyList>
            {APPLICATION.map((element, index) => {
              return (
                <styled.ListItem
                  key={index}
                  id={index}
                  selected={selected}
                  onClick={clickApplyMenu}
                >
                  <styled.Count id={index} selected={selected}>
                    {element.count}
                  </styled.Count>
                  <styled.CountName id={index} selected={selected}>
                    {element.title}
                  </styled.CountName>
                </styled.ListItem>
              );
            })}
          </styled.ApplyList>
          <styled.ApplyListHeader>
            <styled.ApplyCount>총 0건</styled.ApplyCount>
            <styled.ApplySearch
              onChange={onChangeInput}
              onKeyPress={handlePressSubmit}
              placeholder="회사 / 지원자명 검색"
            />
            <BsSearch />
          </styled.ApplyListHeader>
          <styled.ListContentHeader>
            {LISTHEADER.map((element, index) => {
              return (
                <styled.ListHeader key={index} id={index}>
                  {element}
                </styled.ListHeader>
              );
            })}
          </styled.ListContentHeader>
          <styled.ListContentWrap>
            {applyList.map(element => {
              return (
                <styled.ItemListInner key={element.id} id={element.id}>
                  <styled.ItemList>
                    <img src={element.img} alt="회사사진"></img>
                    <styled.Company>{element.company_name}</styled.Company>
                  </styled.ItemList>
                  <styled.ItemList>
                    <p>{element.apply_position}</p>
                  </styled.ItemList>
                  <styled.ItemList>
                    <p>{element.apply_date}</p>
                  </styled.ItemList>
                  <styled.ItemList>
                    <p>작성 중</p>
                  </styled.ItemList>
                  <styled.ItemList>
                    <styled.Apply apply={apply} onClick={toggleCompensation}>
                      {apply ? '취소' : '신청'}
                    </styled.Apply>
                  </styled.ItemList>
                </styled.ItemListInner>
              );
            })}
          </styled.ListContentWrap>
        </styled.ApplicationContent>
      </styled.ApplicationInner>
    </styled.ApplicationWrap>
  );
};

export default Application;

const APPLICATION = [
  {
    count: 64,
    title: '전체',
  },
  {
    count: 4,
    title: '지원 완료',
  },
  {
    count: 30,
    title: '서류 통과',
  },
  {
    count: 30,
    title: '최종 합격',
  },
  {
    count: 0,
    title: '불합격',
  },
];

const LISTHEADER = [
  '지원 회사',
  '지원 포지션',
  '작성 시간',
  '진행 상태',
  '보상금 신청',
];

const ITEMINFO = [
  {
    id: 1,
    img:
      'https://static.wanted.co.kr/images/wdes/0_5_61698d3c-a685-40b7-826e-522c4b1aaec2.jpg',
    company_name: '모두의 싸인',
    apply_position: '프론트엔드개발자',
    apply_date: '2021.04.21',
    writing: '지원완료',
  },
  {
    id: 2,
    img:
      'https://static.wanted.co.kr/images/wdes/0_5_61698d3c-a685-40b7-826e-522c4b1aaec2.jpg',
    company_name: '원티드',
    position: '백엔드개발자',
    date: '2021.04.25',
    writing: '작성중',
  },
];
