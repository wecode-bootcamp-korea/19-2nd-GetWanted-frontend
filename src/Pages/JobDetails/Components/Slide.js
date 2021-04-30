import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const Slide = ({ images }) => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    if (x === 0) {
      setX(-100 * (images.length - 1));
    } else {
      setX(x + 100);
    }
  };

  const goRight = () => {
    if (x === -100 * (images.length - 1)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  };

  return (
    <SlideContainer>
      {images.map(img => {
        return (
          <CompanyImg key={img.id} x={x}>
            <img src={img.image_url} />
          </CompanyImg>
        );
      })}
      <Buttons>
        <LeftButton onClick={goLeft}>
          <AiOutlineLeft size="2em" />
        </LeftButton>
        <RightButton onClick={goRight}>
          <AiOutlineRight size="2em" />
        </RightButton>
      </Buttons>
    </SlideContainer>
  );
};

export default Slide;

const SlideContainer = styled.div`
  position: relative;
  display: flex;
  width: 600px;
  height: 400px;
  overflow: hidden;
`;

const CompanyImg = styled.div`
  width: 100%;
  transform: translateX(${props => props.x}%);
  transition: 0.5s;
  img {
    width: 600px;
    height: 400px;
  }
`;

const Buttons = styled.div`
  button {
    position: absolute;
    top: 50%;
    background-color: transparent;
    color: white;
    border-style: none;
    cursor: pointer;
  }
`;

const LeftButton = styled.button`
  left: 10px;
`;

const RightButton = styled.button`
  right: 10px;
`;
