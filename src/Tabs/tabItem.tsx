import React, { FC, ReactNode, ReactElement } from 'react';
import './index.less';

export interface TabItemProps {
  /**
   * Tab选项上面的文字
   */
  label: string | ReactElement;
  /**
   * Tab选项是否被禁用
   */
  disabled?: boolean;
  children?: ReactNode;
}

export const TabItem: FC<TabItemProps> = ({ children }) => {
  return <div className="hs-tab-panel">{children}</div>;
};

TabItem.defaultProps = {
  label: '请添加label属性, 修改文字',
};

export default TabItem;
