import React, { useState, useEffect } from 'react';
import { GET_JOBLIST_API } from '../config/config';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import axios from 'axios';
import * as styled from './FilterBoxModal.style';

const FilterBoxModal = ({
  showTagBox,
  handleCloseModal,
  handleSelectTag,
  handleResetTag,
  tagCount,
  selected,
  handleChangeList,
}) => {
  const [tagMenu, setTagMenu] = useState([]);

  const getTagListData = async () => {
    axios.get(`${GET_JOBLIST_API}/tag`).then(({ data }) => {
      setTagMenu(data.tag_list);
    });
  };

  useEffect(() => {
    getTagListData();
  }, []);

  return (
    showTagBox && (
      <styled.FilterBoxWrap>
        <styled.FilterBoxInner>
          <styled.FilterBoxHeader>
            <styled.ResetBox onClick={handleResetTag}>
              <BsArrowCounterclockwise />
              <span>초기화</span>
            </styled.ResetBox>
            <styled.TagCount>
              태그<styled.Count>{tagCount}</styled.Count>
            </styled.TagCount>
            <styled.CloseBtn onClick={handleCloseModal}>
              <MdClose />
            </styled.CloseBtn>
          </styled.FilterBoxHeader>
          <styled.InnerText>
            기업의 특별한 복지, 혜택 등 태그를 선택하여 나에게 꼭 맞는 포지션을
            찾아보세요!
          </styled.InnerText>
          <styled.TagHeader>1. 카테고리 선택</styled.TagHeader>
          <styled.TagBox>
            {tagMenu.map(item => (
              <styled.Tag
                key={item.id}
                id={item.id}
                selected={selected}
                onClick={() => handleSelectTag(item)}
              >
                {item.name}
              </styled.Tag>
            ))}
          </styled.TagBox>
          <styled.InnerSmallText>
            해당 태그를 1개 클릭시 만족하는 포지션이 노출됩니다.
          </styled.InnerSmallText>
          <styled.SubmitBtn onClick={handleChangeList}>확인</styled.SubmitBtn>
        </styled.FilterBoxInner>
      </styled.FilterBoxWrap>
    )
  );
};

export default FilterBoxModal;
