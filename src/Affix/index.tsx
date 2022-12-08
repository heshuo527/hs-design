import React, { useEffect } from 'react';
import classes from '../utils/classes';
import './index.less';

export interface AffixProps {
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Affix: React.FC<AffixProps> = (props) => {
  const cn = 'affix';
  const { distance, className, style, children, ...rest } = props;

  let top: number = 0;
  let wrapperRef: HTMLDivElement;
  let affixRef: HTMLDivElement;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setTop();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setTop = () => {
    if (window.scrollY === 0) {
      top = affixRef.getBoundingClientRect().top;
      // 挂载时若窗口滚动不为 0，先滚动至 0
    } else {
      const { scrollX, scrollY } = window;
      window.scrollTo(scrollX, 0);
      top = affixRef.getBoundingClientRect().top;
      window.scrollTo(scrollX, scrollY);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > top - distance!) {
      const { top, bottom, left, right } = wrapperRef.getBoundingClientRect();
      wrapperRef.style.width = right - left + 'px';
      wrapperRef.style.height = bottom - top + 'px';
      wrapperRef.style.left = left + 'px';
      wrapperRef.style.top = distance + 'px';
      wrapperRef.style.position = 'fixed';
    } else {
      wrapperRef.style.position = 'static';
    }
  };

  const saveAffixRef = (node: HTMLDivElement) => {
    affixRef = node;
  };

  const saveWrapperRef = (node: HTMLDivElement) => {
    wrapperRef = node;
  };

  return (
    <div className={classes(cn, '')} ref={saveAffixRef}>
      <div
        className={classes(cn, 'wrapper', [className])}
        ref={saveWrapperRef}
        style={style}
        {...rest}
      >
        <div className="hs-affix-demo">{children}</div>
      </div>
    </div>
  );
};

Affix.defaultProps = {
  distance: 0,
};

export default Affix;
