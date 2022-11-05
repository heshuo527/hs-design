import React, { useState } from 'react'
import classnames from 'classnames'
import './index.less'

export interface DialogType {
  visible: boolean
  type?: 'default'
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Dialog: React.FC<DialogType> = (props) => {

  const [open, setOpen] = useState<Boolean>(false)
  const { visible, type, children, onClick } = props

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick(event)
    }
  }

  return (
    <button
      onClick={handleOnClick}
      className={classnames({
        "my-dialog": true,
        'my-dialog-default': type == 'default',
      })}
    > {children}</button >
  )
}

export default Dialog
