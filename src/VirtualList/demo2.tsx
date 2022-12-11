import React from 'react';
import MyVirtualList from '.';
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
  const list = new Array(10000).fill(0).map((item, i) => i);

  return (
    <>
      列表项高度固定 - 虚拟列表实现
      <MyVirtualList containerHeight={300} itemCount={list.length} itemHeight={30}>
        {Item}
      </MyVirtualList>
    </>
  );
}
export default demo;
