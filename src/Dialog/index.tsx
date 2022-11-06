import React, { Fragment, useState } from 'react'
import Button from '../Button'
import { scopedClassMaker } from '../types/classes'
import './index.less'

export interface DialogType {
  children: React.ReactNode
  title: any
  content: any
  buttonName: [any, any]
}

const scopedClass = scopedClassMaker('my-dialog')
const sc = scopedClass

const Dialog: React.FC<DialogType> = (props) => {

  const [open, setOpen] = useState<Boolean>(false)

  const { children, title, content, buttonName } = props

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
              <header className={sc('tit')}>{title}</header>
              <nav className={sc('con')}>{content}</nav>
              <footer className={sc('foo')}>
                <button onClick={() => setOpen(!open)} className={sc('off')}>{buttonName[0]}</button>
                <button onClick={() => setOpen(!open)} className={sc('done')}>{buttonName[1]}</button>
              </footer>
            </div>
          </Fragment>
          : null
      }
    </>
  )
}

export default Dialog
