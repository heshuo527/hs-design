import React from 'react'
import Button from '.'

const Demo1 = () => {
  return (
    <>
      <Button onClick={() => console.log('被点击了')}>Default</Button>
      <Button type='primary'>Primary</Button>
      <Button type='dashed'>Dashed</Button>
      <Button type='danger'>Danger</Button>
    </>
  )
}

export default Demo1
