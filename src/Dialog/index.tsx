import React, { Fragment, useState } from 'react'
import Button from '../Button'
import { scopedClassMaker, buttonClassNames } from '../types/classes'
import classnames from 'classnames'
import './index.less'

export interface DialogType {
  children: React.ReactNode
  title: any
  content: any
  onText?: string
  okType?: 'default' | 'dashed' | 'primary' | 'danger'
  cancelText?: string
  cancelType?: 'default' | 'dashed' | 'primary' | 'danger'
  onSize?: 'small' | 'default'
  cancelSize?: 'small' | 'default'
  style?: React.CSSProperties
  /**
   * 点击确认按钮的回调
   */
  onConfirm?: (e: React.MouseEvent) => any
  /**
   * 点击取消按钮的回调
   */
  onCancel?: (e: React.MouseEvent) => any
  /**
   * 点击蒙版时的回调
   */
  onMask?: (e: React.MouseEvent) => any
}

const scopedClass = scopedClassMaker('my-dialog')
const sc = scopedClass

const Dialog: React.FC<DialogType> = (props) => {

  const [open, setOpen] = useState<Boolean>(false)
  const { children, title, content, style, onConfirm, onCancel, onMask } = props

  let onText = props.onText
  if (onText) {
    onText = props.onText
  }

  let cancelText = props.onText
  if (cancelText) {
    cancelText = props.cancelText
  }

  let okType = props.okType
  if (!okType) {
    okType = 'primary'
  }

  let cancelType = props.cancelType
  if (!cancelType) {
    cancelType = 'default'
  }

  const onTextClick = (event: React.MouseEvent) => {
    if (props.onConfirm) {
      props.onConfirm(event)
    }
    if (open) {
      setOpen(!open)
    }
  }

  const cancelTextOnClick = (event: React.MouseEvent) => {
    if (props.onCancel) {
      props.onCancel(event)
    }
    if (open) {
      setOpen(!open)
    }
  }

  const onMaskOnclick = (event: React.MouseEvent) => {
    if (props.onMask) {
      props.onMask(event)
    }
  }

  return (
    <>
      <Button
        type='primary'
        onClick={() => setOpen(!open)}
      > {children} </Button>
      {
        open ?
          <Fragment>
            <div
              className={sc('mask')}
              onClick={onMaskOnclick}
            ></div>
            <div
              className={sc('')}
              style={style}
            >
              <header className={sc('tit')}>{title}</header>
              <nav className={sc('con')}>{content}</nav>
              <footer className={sc('foo')}>
                {
                  cancelText ?
                    <button onClick={cancelTextOnClick}
                      className={classnames(buttonClassNames(cancelType))}
                    >{cancelText}</button> :
                    null
                } {
                  onText ?
                    <button
                      onClick={onTextClick}
                      className={classnames(buttonClassNames(okType))}
                    >{onText}</button> :
                    null
                }
              </footer>
            </div>
          </Fragment>
          : null
      }
    </>
  )
}

export default Dialog
