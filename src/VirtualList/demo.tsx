import React from 'react';
import VirtualList from '.';
import './index.less';

const Item = ({ style, index }) => {
  let rand = Math.floor(Math.random() * 10);
  return (
    <div
      className="item"
      style={{
        ...style,
        backgroundColor: index % 2 === 0 ? '#c0e2a9' : '#a8c0f9',
      }}
    >
      <img src={`${imgDemo[rand]}`} alt="" />
      {index}
    </div>
  );
};

const imgDemo = [
  'https://img1.imgtp.com/2022/12/11/J3Qo7ONE.jpg',
  'https://img1.imgtp.com/2022/12/11/ZwrXRL2E.jpg',
  'https://img1.imgtp.com/2022/12/11/4WtKmZRT.jpg',
  'https://img1.imgtp.com/2022/12/11/XfHhouuO.jpg',
  'https://img1.imgtp.com/2022/12/11/JqpEE0uD.jpg',
  'https://img1.imgtp.com/2022/12/11/iih0bOCe.jpg',
  'https://img1.imgtp.com/2022/12/11/05vFZyJy.jpg',
  'https://img1.imgtp.com/2022/12/11/tiAh9sqY.jpg',
  'https://img1.imgtp.com/2022/12/11/hURNJufW.jpg',
  'https://img1.imgtp.com/2022/12/11/AOxFmhOq.jpg',
  'https://img1.imgtp.com/2022/12/11/SkdIfOmd.jpg',
  'https://img1.imgtp.com/2022/12/11/Y5mZjAz7.jpg',
];

const demo = () => {
  const list = new Array(100000).fill(0).map((_item, i) => {
    return i;
  });
  return (
    <VirtualList containerHeight={600} itemCount={list.length} itemHeight={100}>
      {Item}
    </VirtualList>
  );
};
export default demo;
