import React, { useContext, useState, FunctionComponentElement, ReactNode } from 'react'
import classNames from 'classNames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

export interface SubMenuProps {
  index?: number
  title: string
  ClassName?: string
  children?: ReactNode
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, ClassName }) => {

  const [menuOpen, setOpen] = useState(false)
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', ClassName, {
    'is-active': context.index === index
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }

  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}

  const hoverEvent = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => {
      handleMouse(e, true)
    },
    onMouseLeave: (e: React.MouseEvent) => {
      handleMouse(e, false)
    }
  } : {}

  const renderChildren = () => {
    const subMenuClasses = classNames('viking-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childrenElement = child as unknown as FunctionComponentElement<MenuItemProps>
      if (childrenElement.type.displayName === 'MenuItem') {
        return childrenElement
      } else {
        console.error('Warning: Submenu has a child which is not a MenuItem component');
      }
    })

    return (
      <ul className={subMenuClasses}>
        {childrenComponent}
      </ul>
    )
  }

  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className='submenu-title' {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
