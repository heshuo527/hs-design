import React from 'react'
import classnames from 'classnames'
import classes from '../utils/classes'
import './index.less'

export interface BUttonProps {
  children?: React.ReactNode;
  type?: 'default' | 'dashed' | 'primary' | 'danger';
  disabled?: boolean;
  icon?: string
  position?: 'left' | 'right'
  size?: 'small' | 'medium' | 'large'
  ghost?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  loading?: boolean
  onClick?: React.MouseEventHandler
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  className?: string
  style?: React.CSSProperties
}

const Button: React.FC<BUttonProps> = (props) => {

  let {
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

  if (!type) {
    type = 'default'
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick(event);
    }
  }

  return (
    <button
      className={classnames({
        'my-button': true,
        'my-button-default': type === 'default',
        'my-button-primary': type === 'primary',
        'my-button-dashed': type === 'dashed',
        'my-button-danger': type === 'danger',
        'my-button-small': size === 'small',
        'my-button-medium': size === 'medium',
        'my-button-large': size === 'large',
        'my-button-ghost': ghost,
        'my-button-disabled': disabled,
      })}
      style={style}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
      {...rest}>{children}</button>
  )
}

export default Button
