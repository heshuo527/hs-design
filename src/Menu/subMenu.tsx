import React, { useContext, useState, FunctionComponentElement, ReactNode } from 'react';
import classnames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';
import { UpArrowsIcon } from '../icon/Icon';

export interface SubMenuProps {
  index?: string;
  title: string;
  ClassName?: string;
  children?: ReactNode;
  icon?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, ClassName, icon }) => {
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenu as Array<string>;
  // /* includes () 方法用于判断字符串是否包含指定的子字符串---返回的是布尔值 */
  const isOpen = index && context.mode === 'vertical' ? openedSubMenus.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpen);
  const classes = classnames('menu-item submenu-item', ClassName, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical',
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };

  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };

  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};

  const hoverEvent =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const renderChildren = () => {
    const subMenuClasses = classnames('viking-submenu', {
      'menu-opened': menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childrenElement = child as unknown as FunctionComponentElement<MenuItemProps>;
      if (childrenElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childrenElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error('Warning: Submenu has a child which is not a MenuItem component');
      }
    });

    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <UpArrowsIcon className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
