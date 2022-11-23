import React from 'react'

export interface TabItemProps {
  // tap 选项上面的文字
  label: string | React.ReactElement
  // tab 选项是否禁用
  disabled?: boolean
  children?: React.ReactNode
}

export const TabItem: React.FC<TabItemProps> = ({ children }) => {
  return (
    <div className='viking-tab-panel'>
      {children}
    </div>
  )
}

export default TabItem
