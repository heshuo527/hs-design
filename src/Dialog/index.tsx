import React, { Fragment, useState } from 'react'
import Button from '../Button'
import './index.less'

export interface DialogType {
  visible?: boolean
  children: React.ReactNode
  title: any
  content: any
}

const Dialog: React.FC<DialogType> = (props) => {

  const [open, setOpen] = useState<Boolean>(false)
  const { visible, children, title, content } = props

  return (
    <>
      <Button
        type='primary'
        onClick={() => setOpen(!open)}
      > {children} </Button>
      {
        open ?
          <Fragment>
            <div className='my-dialog-mask'></div>
            <div className='my-dialog-nav'>
              <div>{title}</div>
              <div>{content}</div>
            </div>
          </Fragment>
          : null
      }
    </>
  )
}

export default Dialog
