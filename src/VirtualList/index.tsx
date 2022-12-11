import React, { useState, ReactNode, useEffect, CSSProperties, FC } from 'react';
import classnames from 'classnames';
import { flushSync } from 'react-dom';
import './index.less';

export interface VirtualListProps {
  /**
   * 容器高度
   */
  containerHeight: number;
  /**
   * 每个元素高度
   */
  itemHeight: number;
  /**
   * 元素数量
   */
  itemCount: number;
  children?: any;
  classNames?: string;
  /**
   * 上下额外渲染的数量
   */
  contentCount?: number;
  /**
   * 处理越界情况
   */
  crossCount?: number;
}

const VirtualList: FC<VirtualListProps> = (props) => {
  const { containerHeight, itemHeight, itemCount, children, classNames, contentCount, crossCount } =
    props;
  let Component = children;
  const contentHeight = itemCount! * itemHeight; // 先算出总高度
  const [scrollTop, setScrollTop] = useState(0); // 滚动位置

  // 继续需要渲染的item索引有哪些
  let startIndex = Math.floor(scrollTop / itemHeight);
  let endIndex = Math.floor((scrollTop + containerHeight) / itemHeight);

  startIndex = Math.max(startIndex - contentCount!, crossCount!); //处理越界情况
  endIndex = Math.min(endIndex + contentCount!, itemCount);
  const top = itemHeight * startIndex; //第一个渲染的item到顶部距离

  // 需要渲染的items
  const items: any = [];
  for (let i = startIndex; i <= endIndex; i++) {
    items.push(<Component key={i} index={i} style={{ height: itemHeight }} imgDemo></Component>);
  }

  // 滚动时的回调
  const onScrollHandle = (e: any) => {
    // 处理异步函数导致的空白现象
    // 改为同步更新, 但可能有性能问题, 可以做节流+RAF优化
    // flushSync 可以优先渲染里面的子元素
    flushSync(() => {
      setScrollTop(e.target.scrollTop);
    });
  };

  const classes = classnames('hs-virtual-container', classNames);
  console.log(items);

  return (
    <div className={classes} style={{ height: containerHeight }} onScroll={onScrollHandle}>
      <div style={{ height: contentHeight }}>
        <div style={{ height: top }}></div>
        {items}
      </div>
    </div>
  );
};
VirtualList.defaultProps = {
  contentCount: 0,
  crossCount: 0,
};
export default VirtualList;
