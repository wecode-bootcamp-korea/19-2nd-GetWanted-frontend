import React, { useState, useEffect } from 'react';
import * as styled from './JobList.style';
import JobItem from './Components/JobItems';
import FilterBoxModal from './Components/FilterBoxModal';
import { GET_JOBLIST_API } from './config/config';
import { MdArrowDropDown } from 'react-icons/md';
import axios from 'axios';

const JobList = () => {
  const [ItemList, setItemList] = useState([]);
  const [showTagBox, setShowTagBox] = useState(false);
  const [selected, setSelected] = useState(0);
  const [tagCount, setTagCount] = useState(0);
  const [heartCount, setHeartCount] = useState(0);

  const handleSelectTag = item => {
    setSelected(item.id);
    setTagCount(1);
  };

  const handleResetTag = item => {
    setSelected(0);
    setTagCount(0);
  };

  const handleCloseModal = () => {
    setShowTagBox(false);
  };

  const handleShowModal = () => {
    setShowTagBox(true);
  };

  const getListData = async () => {
    axios.get(`${GET_JOBLIST_API}`).then(({ data }) => {
      setItemList(data.notification_list);
      setHeartCount(data.total);
    });
  };

  useEffect(() => {
    getListData();
  }, []);

  const handleChangeList = () => {
    if (selected === 0) {
      axios.get(`${GET_JOBLIST_API}`).then(({ data }) => {
        setItemList(data.notification_list);
        setSelected(0);
      });
      setShowTagBox(false);
    } else {
      axios.get(`${GET_JOBLIST_API}?tag=${selected}`).then(({ data }) => {
        setItemList(data.notification_list);
      });
      setShowTagBox(false);
    }
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
            heartCount={heartCount}
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
