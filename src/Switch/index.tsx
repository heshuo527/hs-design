import React from 'react'
import classnames from 'classNames'
import './index.less'

export interface SwitchProps {
  checked?: Boolean
  /**
   * 开关初始状态为false
   */
  defaultChecked?: false
  children?: React.ReactNode
  disabled?: Boolean
  size?: 'small' | 'default'
  onClick?: React.MouseEventHandler
  onChange?: (checked: boolean, e: React.MouseEvent) => any
  style?: React.CSSProperties;
}

export interface SwitchState {
  derivedChecked: boolean
}

export type SwitchClickEventHandler = SwitchChangeEventHandler;

export type SwitchChangeEventHandler = (
  checked: boolean,
  event: React.MouseEvent<HTMLButtonElement>,
) => void;

const Switch: React.FC<SwitchProps> = (props) => {
  const { children, onChange, checked } = props

  let disabled = props.disabled
  if (!disabled) {
    disabled = false
  }

  const handleClick: React.MouseEventHandler = e => {
    if (disabled) {
      return
    }
  }

  return (
    <span
      className={classnames({
        'my-switch': true,
        'my-switch-disable': disabled,
        'my-switch-checked': checked,
      })}
      onClick={handleClick}
    >
      <span className='my-switch-core'>{children}</span>
    </span>
  )
}

export default Switch
