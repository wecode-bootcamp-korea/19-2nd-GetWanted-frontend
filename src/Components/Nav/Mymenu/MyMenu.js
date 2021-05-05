import React from 'react';
import * as styled from './MyMenu.style';

const MyMenu = ({ show, myMenuClickEvent }) => {
  return (
    show && (
      <styled.Mymenu>
        {MYMENU.map((element, index) => {
          return (
            <styled.MyMenuList>
              <styled.MyMenuItem
                key={index}
                id={index}
                onClick={() => myMenuClickEvent(index)}
              >
                {element}
              </styled.MyMenuItem>
            </styled.MyMenuList>
          );
        })}
      </styled.Mymenu>
    )
  );
};

export default MyMenu;

const MYMENU = [
  'MY 원티드',
  '프로필',
  '지원 현황',
  '제안받기 현황',
  '좋아요',
  '북마크',
  '추천',
  '포인트',
  '로그아웃',
];
