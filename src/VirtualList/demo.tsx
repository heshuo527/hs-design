import React from 'react';
import VirtualList from '.';
import './index.less';

function Item({ style, index }) {
  return (
    <div
      className="item"
      style={{
        ...style,
        backgroundColor: index % 2 === 0 ? 'burlywood' : 'cadetblue',
      }}
    >
      {index}
    </div>
  );
}

function demo() {
  const list = new Array(100000).fill(0).map((_item, i) => i);
  console.log(list);
  return (
    <>
      列表项高度固定 - 虚拟列表实现
      <VirtualList containerHeight={500} itemCount={list.length} itemHeight={50}>
        {Item}
      </VirtualList>
    </>
  );
}
export default demo;
