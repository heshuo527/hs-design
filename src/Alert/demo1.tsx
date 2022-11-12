import React, { useState } from 'react'
import Alert from '.'
import Button from '../Button'


const demo1 = () => {

  const [x, setX] = useState(false)

  return (
    <>
      <Button type='primary' onClick={() => setX(!x)}>click</Button>
      <Alert visible={x}>h1</Alert>
    </>
  )
}

export default demo1
