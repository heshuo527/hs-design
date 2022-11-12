import React, { Fragment, ReactNode } from 'react'
import { scopedClassMaker } from '../types/classes'
import Button from '../Button'
import './index.less'

interface AlertProps {
  visible: boolean
  onClick?: React.MouseEventHandler<Element>
  children: ReactNode
}

const scopedClass = scopedClassMaker('my-alert')
const sc = scopedClass

const Alert: React.FC<AlertProps> = (props) => {
  return (
    props.visible ?
      <Fragment>
        <div className={sc('mask')}></div>
        <div className={sc('')}>
          <header className={sc('hea')}>
            提示
          </header>
          <main className={sc('main')}>
            {props.children}
          </main>
          <footer className={sc('foo')}>
            <Button type='primary'>ok</Button>
            <Button type='primary'>no</Button>
          </footer>
        </div>
      </Fragment>
      : null
  )
}

export default Alert
