import React from 'react'
import classes from '../utils/classes'
import './index.less'

export interface ButtonProps {
  icon?: string
  position?: 'left' | 'right'
  size?: 'small' | 'medium' | 'large'
  type?: 'default' | 'dashed' | 'primary' | 'danger'
  ghost?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  loading?: boolean
  onClick?: React.MouseEventHandler
  disabled?: boolean
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

const componentName = 'Button'

const Xbutton: React.FC<ButtonProps> = (props) => {

  /* const renderIcon = () => {
    const { icon, size, loading } = props
    const className = classes(componentName, 'icon', [size], { loading })
    return loading ? (
      <Icon name="loading" className={className} />
    ) : (
      icon && <Icon name={icon} className={className} />
    )
  } */

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

  return (
    <button
      className={buttonClassName}
      style={style}
      type={htmlType}
      disabled={disabled}
      {...rest}
    >
      <span className={classes(cn, 'inner')}>{children}</span>
    </button>
  )
}


export default Xbutton
