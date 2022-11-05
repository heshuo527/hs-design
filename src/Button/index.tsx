import React from 'react'
import classnames from 'classnames'
import './index.less'

export interface BUttonProps {
  /**
   * 按钮的子元素
   * @description  一般是文案
   */
  children: React.ReactNode;
  /**
   *  按钮类型
   * @default  "default"
   */
  type?: 'default' | 'dashed' | 'primary' | 'danger';
  disabled?: false;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<BUttonProps> = (props) => {

  const { children } = props
  let type = props.type
  if (!type) {
    type = 'default'
  }

  let disabled = props.disabled
  if (!disabled) {
    disabled = false
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick(event)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={classnames({
        'my-button': true,
        'my-button-default': type === 'default',
        'my-button-primary': type === 'primary',
        'my-button-dashed': type === 'dashed',
        'my-button-danger': type === 'danger',
      })} disabled>{children}</button>
  )
}

export default Button
