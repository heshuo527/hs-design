import React, { useState, ReactNode, useEffect, CSSProperties, FC } from 'react';
import classnames from 'classnames';
import { flushSync } from 'react-dom';
import './index.less';

export interface VirtualListProps {
  /**
   * 容器高度
   */
  containerHeight?: number;
  /**
   * 每个元素高度
   */
  itemHeight: number;
  /**
   * 元素数量
   */
  itemCount?: number;
  children?: any;
  classNames?: string;
}

/* export function throttle(fn: Function, delay: number) {
  let flag = true
  return function (this: Function, ...args: Array<any>) {
    const context = this
    if (flag) {
      flag = false
      fn.apply(context, args)
      setTimeout(() => {
        flag = true
      }, delay);
    }
  }
} */

const VirtualList: FC<VirtualListProps> = (props) => {
  const { containerHeight, itemHeight, itemCount, children, classNames } = props;

  let Component = children;

  const contentHeight = itemCount! * itemHeight; // 先算出总高度
  const [scrollTop, setScrollTop] = useState(0); // 滚动位置

  // 继续需要渲染的item索引有哪些
  let startIndex = Math.floor(scrollTop / itemHeight);
  let endIndex = Math.floor((scrollTop + itemHeight) / itemHeight);

  // 上下额外渲染的数量
  const paddingCount = 9;
  startIndex = Math.max(startIndex - paddingCount, 0); //处理越界情况
  endIndex = Math.min(endIndex + paddingCount, itemCount! - 1);
  const top = itemHeight * startIndex; //第一个渲染的item到顶部距离

  // 需要渲染的items
  const items: any = [];
  for (let i = startIndex; i <= endIndex; i++) {
    items.push(<Component key={i} index={i} style={{ height: itemHeight }} />);
  }

  /* const classes = classnames('hs-virtual-container', classNames) */
  return (
    <div
      className="hs-virtual"
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={(e: any) => {
        // 处理异步函数导致的空白现象
        // 改为同步更新, 但可能有性能问题, 可以做节流+RAF优化
        flushSync(() => {
          setScrollTop(e.target.scrollTop);
        });
      }}
    >
      <div style={{ height: contentHeight }}>
        <div style={{ height: top }}></div>
        {items}
      </div>
    </div>
  );
};
export default VirtualList;
