import React, { useState } from 'react'
import { classes } from '../utils'
import './index.less'

export interface SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  size?: 'small' | 'default'
  onChange?: (checked: boolean, e: React.MouseEvent) => any
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  derivedChecked?: boolean
  onClick?: React.MouseEventHandler<Element>
}

export interface SwitchState {
  derivedChecked: boolean
}

const componentName = 'Switch'

const Switch: React.FC<SwitchProps> = (props) => {

  const [defaultChecked, setDefaultChecked] = useState(false)

  /* let defaultProps = {
    size: 'default',
    defaultChecked: false,
    disabled: false
  } */

  /*  const getDerivedStateFromProps = (
     nextProps: SwitchProps,
     prevState: SwitchState
   ) => {
     const { checked } = nextProps
     const { derivedChecked } = prevState
     if ('checked' in nextProps && checked !== derivedChecked) {
       return { derivedChecked: checked }
     }
     return null
   } */

  const handleClick: React.MouseEventHandler = e => {
    const { disabled, onChange } = props
    if (disabled) {
      return
    }
    const { derivedChecked } = props
    setDefaultChecked(!derivedChecked)

    if (onChange) {
      onChange(!derivedChecked, e)
    }
  }

  const cn = componentName
  const { size, disabled, style, className } = props
  const { derivedChecked } = props
  const switchClassName = classes(cn, '', [className, size], {
    checked: derivedChecked,
    disabled
  })
  console.log('我执行了', props);

  return (
    <span
      className={switchClassName}
      onClick={handleClick}
      style={style}
    >
      <span className={classes(cn, 'core')} />
    </span>
  )
}

export default Switch
