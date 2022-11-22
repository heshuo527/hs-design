import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'
import './index.less'

/* 横向还是纵向 */
export type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void

export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  children?: React.ReactNode
  onSelect?: (selectIndex: number) => void
}

interface IMenuContext {
  index: number
  onSelect?: SelectCallback
  mode?: MenuMode;
}
export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)

  const classes = classNames(
    'my-menu',
    className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childrenElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childrenElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childrenElement, {
          index
        })
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component');
      }
    })
  }
  return (
    <ul className={classes} style={style} >
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu
