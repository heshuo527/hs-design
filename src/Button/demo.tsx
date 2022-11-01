import React from 'react'
import Button from '.'

const Demo1 = () => {
  return (
    <>
      <Button onClick={() =>
        console.log(1)
      } >Default</Button>
      <Button onClick={() =>
        console.log(1)
      } type='primary'>Primary</Button>
      <Button onClick={() =>
        console.log(1)
      } disabled type='dashed'>Dashed</Button>
      <Button onClick={() =>
        console.log(1)
      } disabled type='danger'>Danger</Button>
    </>
  )
}

export default Demo1
