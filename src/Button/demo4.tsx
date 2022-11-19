import React from 'react'
import Button from '.'

function demo4() {

  const demoOnClick = () => {
    console.log('我不会执行');

  }

  const actOnClick = () => {
    console.log('我执行了');

  }

  return (
    <>
      <Button onClick={actOnClick}>disabled off</Button>
      <Button disabled onClick={() => console.log('我不会执行')} type='primary'>disabled</Button>
      <Button disabled size='large' onClick={demoOnClick} type='danger'>disabled</Button>
      <Button disabled ghost type='primary'>disabled ghost</Button>
    </>

  )
}

export default demo4
