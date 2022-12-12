import React from 'react';
import { useState } from 'react';
import { flushSync } from 'react-dom';

export interface VirtualProps {
  containerHeight: number;
  itemHeight: number;
  itemCount: number;
  children: any;
}

const FixedSizeList: React.FC<VirtualProps> = (props) => {
  const { containerHeight, itemHeight, itemCount, children } = props;
  // children 语义不好，赋值给 Component
  const Component = children;

  const contentHeight = itemHeight * itemCount; // 内容高度
  const [scrollTop, setScrollTop] = useState(0); // 滚动高度

  // 继续需要渲染的 item 索引有哪些
  let startIdx = Math.floor(scrollTop / itemHeight);
  let endIdx = Math.floor((scrollTop + containerHeight) / itemHeight);

  // 上下额外多渲染几个 item，解决滚动时来不及加载元素出现短暂的空白区域的问题
  const paddingCount = 2;
  startIdx = Math.max(startIdx - paddingCount, 0); // 处理越界情况
  endIdx = Math.min(endIdx + paddingCount, itemCount - 1);

  const top = itemHeight * startIdx; // 第一个渲染 item 到顶部距离

  // 需要渲染的 items
  const items: any = [];
  for (let i = startIdx; i <= endIdx; i++) {
    items.push(
      <Component
        key={i}
        index={i}
        style={{
          position: 'absolute',
          left: 0,
          top: i * itemHeight,
          width: '100%',
          height: itemHeight,
        }}
      />,
    );
  }

  return (
    <div
      style={{
        height: containerHeight,
        overflow: 'auto',
        position: 'relative',
      }}
      onScroll={(e: any) => {
        flushSync(() => {
          setScrollTop(e.target.scrollTop);
        });
      }}
    >
      <div style={{ height: contentHeight }}>{items}</div>
    </div>
  );
};

export default FixedSizeList;
