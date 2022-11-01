import React from 'react'
import classnames from 'classnames'
import './index.less'

export interface BUttonProps {
  children: React.ReactNode;
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

}

const Button: React.FC<BUttonProps> = (props) => {

  const { children } = props
  let type = props.type
  if (!type) {
    type = 'default'
  }

  return (
    <button
      className={classnames({
        'my-button': true,
        'my-button-primary': type === 'primary',
        'my-button-dashed': type === 'dashed',
        'my-button-danger': type === 'danger',
      })}>{children}</button>
  )
}

export default Button
