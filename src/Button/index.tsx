import React from 'react'
import classnames from 'classnames'
import classes from '../utils/classes';
import './index.less'

export interface BUttonProps {
  children?: React.ReactNode;
  type?: 'default' | 'dashed' | 'primary' | 'danger';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

  icon?: string
  position?: 'left' | 'right'
  size?: 'small' | 'medium' | 'large'
  ghost?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  loading?: boolean
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  className?: string
  style?: React.CSSProperties
}

const componentName = 'button'

const Button: React.FC<BUttonProps> = (props) => {

  const cn = componentName
  const {
    position,
    icon,
    loading,
    size,
    type,
    htmlType,
    ghost,
    style,
    className,
    disabled,
    children,
    ...rest
  } = props

  const buttonClassName = classes(cn, '', [position, size, type, className], {
    ghost,
    disabled
  })

  /* const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick(event)
    }
  } */

  return (
    <button
      className={buttonClassName}
      style={style}
      type={htmlType}
      disabled={disabled}
      {...rest}>{children}</button>
  )
}

export default Button


/* onClick={handleClick}
className={classnames({
  'my-button': true,
  'my-button-default': type === 'default',
  'my-button-primary': type === 'primary',
  'my-button-dashed': type === 'dashed',
  'my-button-danger': type === 'danger',
})} */
