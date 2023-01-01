import React, {
  FC,
  Children,
  ReactNode,
  useState,
  FunctionComponentElement,
  MouseEventHandler,
} from 'react';
import classnames from 'classnames';
import './index.less';
import { TabItemProps } from './tabItem';

/* 横向还是纵向 */
export type TabsMode = 'horizontal' | 'vertical';
export type tabsType = 'line' | 'card';
export interface TabsProps {
  /**
   * 当前激活面板的index, 默认为0
   */
  mode?: TabsMode;
  defaultIndex?: number;
  className?: string;
  onSelect?: (selectedIndex: number) => void;
  onClick?: MouseEventHandler;
  type?: tabsType;
  children?: ReactNode;
}

const Tabs: FC<TabsProps> = (props) => {
  const { defaultIndex, className, onSelect, type, mode, onClick, children } = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const handleClick = (e: React.MouseEvent, index: number, disabled: boolean | undefined) => {
    if (!disabled) {
      setActiveIndex(index);
      if (onSelect) {
        onSelect(index);
      }
      if (onClick) {
        onClick(e);
      }
    }
  };
  const navClass = classnames('hs-tabs-nav', {
    'nav-line': type === 'line',
    'nav-card': type === 'card',
    'nav-horizontal': mode === 'horizontal',
    'nav-vertical': mode === 'vertical',
  });
  const renderNavLinks = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabItemProps>;
      const { label, disabled } = childElement.props;
      const classes = classnames('hs-tabs-nav-item', {
        'is-active': activeIndex === index,
        disabled: disabled,
      });
      return (
        <li
          className={classes}
          key={`hs-nav-item-${index}`}
          onClick={(e) => {
            handleClick(e, index, disabled);
          }}
        >
          {label}
        </li>
      );
    });
  };
  const renderContent = () => {
    return Children.map(children, (child, index) => {
      if (index === activeIndex) {
        return child;
      }
    });
  };
  return (
    <div className={`hs-tabs ${className}`}>
      <ul className={navClass}>{renderNavLinks()}</ul>
      <div className="hs-tabs-content">{renderContent()}</div>
    </div>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  type: 'line',
  mode: 'horizontal',
};

export default Tabs;
