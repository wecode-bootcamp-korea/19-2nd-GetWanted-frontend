import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as styled from './JobList.style';
import JobItem from './Components/JobItems';
import FilterBoxModal from './Components/FilterBoxModal';
import { GET_JOBLIST_API } from '../../config';
import { MdArrowDropDown } from 'react-icons/md';
import axios from 'axios';

const JobList = props => {
  const [ItemList, setItemList] = useState([]);
  const [showTagBox, setShowTagBox] = useState(false);
  const [selected, setSelected] = useState(0);
  const [tagCount, setTagCount] = useState(0);
  const history = useHistory();
  const location = useLocation();

  const decode = x => {
    return decodeURI(x);
  };

  const handleSelectTag = item => {
    setSelected(item.id);
    setTagCount(1);
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
    console.log('실행');
    history.push(`/jobdetails/?${id}`);
  };

  const handleSearchFilter = () => {
    const change = decode(location.search);
    const searchpage = change === '?search=' ? '' : `${change}`;
    axios.get(`${GET_JOBLIST_API} + ${searchpage}`).then(({ data }) => {
      setItemList(data.notification_list);
    });
  };

  useEffect(() => {
    handleSearchFilter();
  }, [location.search]);

  const handleChangeList = () => {
    const query = selected === 0 ? '' : `?tag=${selected}`;
    axios.get(`${GET_JOBLIST_API} + ${query}`).then(({ data }) => {
      setItemList(data.notification_list);
      setShowTagBox(false);
    });
  };

  return (
    <styled.JobListWrap>
      <styled.TagFilterLine>
        <styled.TagFilterBox onClick={handleShowModal}>
          <styled.FilterBoxTitle>태그</styled.FilterBoxTitle>
          <styled.FilterBoxText>딱 맞는 기업찾기</styled.FilterBoxText>
          <MdArrowDropDown />
        </styled.TagFilterBox>
      </styled.TagFilterLine>
      <styled.JobListContent>
        {ItemList.map(item => (
          <JobItem
            key={item.id}
            name={item.title}
            image={item.image}
            area={item.area}
            company={item.company}
            heartCount={item.like_count}
            handleEnterDetail={handleEnterDetail}
          />
        ))}
      </styled.JobListContent>
      <FilterBoxModal
        handleCloseModal={handleCloseModal}
        handleSelectTag={handleSelectTag}
        handleResetTag={handleResetTag}
        showTagBox={showTagBox}
        tagCount={tagCount}
        selected={selected}
        handleChangeList={handleChangeList}
      />
    </styled.JobListWrap>
  );
};

export default JobList;
