import React from 'react';
import * as styled from './SearchModal.style';
import { BsSearch } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

const SearchMoal = ({ show, handleCloseModal }) => {
  return (
    show && (
      <styled.SearchMoalWrap>
        <styled.SearchModalInner>
          <MdClose onClick={handleCloseModal} />
          <styled.SearchBox>
            <BsSearch />
            <styled.SearchInput placeholder="회사, 지역, 포지션 검색" />
          </styled.SearchBox>
        </styled.SearchModalInner>
      </styled.SearchMoalWrap>
    )
  );
};

export default SearchMoal;
