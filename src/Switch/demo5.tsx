import React, { useState } from 'react'
import Switch from '.'
import Button from '../Button'

function demo5() {

  const [checked, setChecked] = useState(false)

  return (
    <>
      <Switch checked={checked} ></Switch>
      <br />
      <br />
      <Button type='primary' onClick={() => setChecked(!checked)}>Toggle Checked</Button>
    </>
  )

}

export default demo5
