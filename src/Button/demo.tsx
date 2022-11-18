import React from 'react'
import Button from '.'

const Demo1 = () => {
  return (
    <>
      <Button ghost disabled >Default</Button>
      <Button type='primary' >Primary</Button>
      <Button type='dashed'>Dashed</Button>
      <Button disabled type='danger'>Danger</Button>
    </>
  )
}

export default Demo1
