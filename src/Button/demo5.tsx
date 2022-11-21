import React from 'react'
import Button from '.'
import { MyIcon, SettingIcon } from '../icon/Icon'

function demo5() {

  const demoOnClick = () => {
    console.log('我不会执行');
  }

  const actOnClick = () => {
    console.log('我执行了');

  }

  return (
    <>
      <Button type='primary' icon={<MyIcon />} onClick={actOnClick}>disabled off</Button>
      <Button type='primary'  ghost icon={<SettingIcon />} onClick={actOnClick}>disabled off</Button>
    </>

  )
}

export default demo5
