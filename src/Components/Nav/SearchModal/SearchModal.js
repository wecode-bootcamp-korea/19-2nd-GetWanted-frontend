import React from 'react';
import * as styled from './SearchModal.style';
import { BsSearch } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

const SearchMoal = ({
  show,
  handleClickCloseModal,
  onChangeInput,
  handleSearchInput,
  handleEnterCloseModal,
}) => {
  return (
    show && (
      <styled.SearchMoalWrap onKeyPress={handleEnterCloseModal}>
        <styled.SearchModalInner>
          <MdClose onClick={handleClickCloseModal} />
          <styled.SearchBox>
            <BsSearch />
            <styled.SearchInput
              placeholder="회사, 지역, 포지션 검색"
              onChange={onChangeInput}
              onKeyPress={handleSearchInput}
            />
          </styled.SearchBox>
        </styled.SearchModalInner>
      </styled.SearchMoalWrap>
    )
  );
};

export default SearchMoal;
