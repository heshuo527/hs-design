import React, { FunctionComponentElement, useState } from 'react'
import classNames from 'classNames'
import { TabItemProps } from './tabItem'
import './index.less'

export interface TabsProps {
  defaultIndex: number
  mode?: 'horizontal' | 'vertical'
  className?: string
  onSelect?: (selectedIndex: number) => void
  type?: 'line' | 'card'
  children?: React.ReactNode
}

export const Tabs: React.FC<TabsProps> = (props) => {
  const {
    defaultIndex,
    mode,
    className,
    onSelect,
    type,
    children,
  } = props

  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const handleClick = (e: React.MouseEvent, index: number, disabled: boolean | undefined) => {
    if (disabled) {
      setActiveIndex(index)
      if (onSelect) {
        onSelect(index)
        console.log('handleClick', index);
      }
    }
  }

  const navClass = classNames('viking-tabs-nav', {
    'nav-line': type === 'line',
    'nav-card': type === 'card'
  })

  const renderNavLinks = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabItemProps>
      const { label, disabled } = childElement.props
      const classes = classNames('viking-tabs-nav-item', {
        'is-active': activeIndex === index,
        'disabled': disabled,
      })
      return (
        <li
          className={classes}
          key={`nav-item-${index}`}
          onClick={(e) => { handleClick(e, index, disabled) }}
        >
          {label}
        </li>
      )
    })
  }

  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      if (index === activeIndex) {
        return child
      }
    })
  }

  return (
    <div className={`viking-tabs ${className}`}>
      <ul className={navClass}>
        {renderNavLinks()}
      </ul>
      <div className='viking-tabs-content'>
        {renderContent()}
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  defaultIndex: 0,
  type: 'line'
}

export default Tabs
