import React, { useState } from 'react';
import * as styled from './JobItem.style';
import { FaHeart } from 'react-icons/fa';

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
