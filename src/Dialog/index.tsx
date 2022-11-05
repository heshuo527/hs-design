import React, { Fragment, useState } from 'react'
import Button from '../Button'
import {scopedClassMaker} from '../types/classes'
import './index.less'

export interface DialogType {
  children: React.ReactNode
  title: any
  content: any
}

const scopedClass = scopedClassMaker('my-dialog')
const sc = scopedClass

const Dialog: React.FC<DialogType> = (props) => {

  const [open, setOpen] = useState<Boolean>(false)
  const [close, setClose] = useState<Boolean>(false)

  const { children, title, content } = props
  return (
    <>
      <Button
        type='primary'
        onClick={() => setOpen(!open)}
      > {children} </Button>
      {
        open ?
          <Fragment>
            <div className={sc('mask')}></div>
            <div className={sc('')}>
              <div className={sc('tit')}>{title}</div>
              <div className={sc('con')}>{content}</div>
              <button onClick={() => setOpen(!open)} className={sc('off')}>取消</button>
              <button onClick={() => setOpen(!open)} className={sc('done')}>完成</button>
            </div>
          </Fragment>
          : null
      }
    </>
  )
}

export default Dialog
