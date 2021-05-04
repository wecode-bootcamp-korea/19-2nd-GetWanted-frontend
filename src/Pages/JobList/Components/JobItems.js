import React, { useState } from 'react';
import * as styled from './JobItem.style';
import { FaHeart } from 'react-icons/fa';
import { GET_LIKE_API } from '../../../config';
import axios from 'axios';

const JobItems = ({
  name,
  company,
  image,
  area,
  heartCount,
  handleEnterDetail,
}) => {
  const [liked, setLiked] = useState(false);

  const handletoggleHeart = () => {
    setLiked(!liked);
    if (liked === true) {
      axios.post(`${GET_LIKE_API}`, {
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozOX0.0Ost57a2IAb9DhqvnAPvKkkYrG-OZgg0Y1CWDaf8XtY',
        },
        body: JSON.stringify({
          notification: heartCount,
        }),
      });
    } else {
      axios.post(`${GET_LIKE_API}`, {
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozOX0.0Ost57a2IAb9DhqvnAPvKkkYrG-OZgg0Y1CWDaf8XtY',
        },
        body: JSON.stringify({
          notification: heartCount - 1,
        }),
      });
    }
  };

  return (
    <styled.JobItem>
      <styled.JobItemImg>
        <img src={image} alt="기업사진"></img>
        <styled.JobHeartBtn liked={liked} onClick={handletoggleHeart}>
          <FaHeart />
          <styled.HeartCount>
            {liked ? heartCount + 1 : heartCount}
          </styled.HeartCount>
        </styled.JobHeartBtn>
      </styled.JobItemImg>
      <styled.JobItemContent onClick={() => handleEnterDetail}>
        <styled.ItemTask>{name}</styled.ItemTask>
        <styled.ItemCompany>{company}</styled.ItemCompany>
        <styled.ItemLocation>{area}</styled.ItemLocation>
        <styled.ItemBonus>채용보상금 1,000,000원</styled.ItemBonus>
      </styled.JobItemContent>
    </styled.JobItem>
  );
};

export default JobItems;
