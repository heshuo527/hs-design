import React from 'react'
import classnames from 'classNames'
import './index.less'

export interface SwitchProps {
  /**
   * 默认false就是默认关闭状态
   * 默认true就是默认打开状态
   */
  checked?: Boolean
  children?: React.ReactNode
  disabled?: Boolean
  size?: 'small' | 'default'
  onChange?: (checked: boolean, e: React.MouseEvent) => any
  style?: React.CSSProperties;
}

export interface SwitchState {
  derivedChecked?: boolean
}

const Switch: React.FC<SwitchProps & SwitchState> = (props) => {

  const { children, onChange } = props
  let { size, disabled, checked, derivedChecked } = props

  if (!disabled) {
    disabled = false
  }

  if (!size) {
    size = 'default'
  }

  const handleClick: React.MouseEventHandler = e => {
    if (disabled) {
      return
    }
    if (onChange) {
      onChange(!checked, e)
    }
  }


  return (
    <span
      className={classnames({
        'hs-switch': true,
        'hs-switch-default': size === 'default',
        'hs-switch-small': size === 'small',
        'hs-switch-checked': checked || derivedChecked,
        'hs-switch-disabled': disabled,
      })}
      onClick={handleClick}
    >
      <span className='hs-switch-core'>{children}</span>
    </span>
  )
}

export default Switch
