import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as styled from './JobList.style';
import JobItem from './Components/JobItems';
import FilterBoxModal from './Components/FilterBoxModal';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GET_JOBLIST_API } from '../../config';
import { MdArrowDropDown } from 'react-icons/md';
import axios from 'axios';

const JobList = props => {
  const decode = x => {
    return decodeURI(x);
  };

  const location = useLocation();
  const history = useHistory();

  const [itemList, setItemList] = useState([]);
  const [showTagBox, setShowTagBox] = useState(false);
  const [selected, setSelected] = useState(0);
  const [tagCount, setTagCount] = useState(0);
  const [page, setPage] = useState(0);

  const handleSelectTag = item => {
    setSelected(item.id);
    setTagCount(1);
    setShowTagBox(false);
    history.push(`/?tag=${item.id}`);
  };

  const handleResetTag = () => {
    setSelected(0);
    setTagCount(0);
  };

  const handleCloseModal = () => {
    setShowTagBox(false);
  };

  const handleShowModal = () => {
    setShowTagBox(true);
  };

  const handleEnterDetail = id => {
    history.push(`/jobdetails/${id}`);
  };

  const getCompanyList = () => {
    const change = decode(location.search);

    axios.get(`${GET_JOBLIST_API}${change}`).then(({ data }) => {
      setItemList(
        change.includes('page')
          ? [...itemList, ...data.notification_list]
          : data.notification_list
      );
    });
  };

  const fetchMoreData = () => {
    setPage(page + 1);
    setTimeout(() => {
      history.push(`/?page=${page}`);
    }, 2000);
  };

  // API 재호출 수정
  useEffect(() => {
    getCompanyList();
  }, [location.search]);

  return (
    <styled.JobListWrap>
      <styled.TagFilterLine>
        <styled.TagFilterBox onClick={handleShowModal}>
          <styled.FilterBoxTitle>태그</styled.FilterBoxTitle>
          <styled.FilterBoxText>딱 맞는 기업찾기</styled.FilterBoxText>
          <MdArrowDropDown />
        </styled.TagFilterBox>
      </styled.TagFilterLine>
      <InfiniteScroll
        dataLength={itemList.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>😅로딩중이예요!😅</h4>}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'start',
          flexWrap: 'wrap',
          width: '70%',
          margin: '0 auto',
        }}
      >
        {itemList.map(item => {
          return (
            <JobItem
              key={item.id}
              name={item.title}
              image={item.image}
              area={item.area}
              company={item.company}
              heartCount={item.like_count}
              handleEnterDetail={handleEnterDetail}
              id={item.id}
            />
          );
        })}
      </InfiniteScroll>
      <FilterBoxModal
        handleCloseModal={handleCloseModal}
        handleSelectTag={handleSelectTag}
        handleResetTag={handleResetTag}
        showTagBox={showTagBox}
        tagCount={tagCount}
        selected={selected}
        // handleChangeList={handleChangeList}
      />
    </styled.JobListWrap>
  );
};

export default JobList;
