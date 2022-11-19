import React, { useState } from 'react'
import Switch from '.'

function demo4() {

  const [checked, setChecked] = useState(false)
  const [isChecked, setIsChecked] = useState(true)

  return (
    <>
      <Switch checked={checked} onChange={() => setChecked(!checked)} ></Switch>
      <br />
      <br />
      <Switch checked={isChecked} onChange={() => setIsChecked(!isChecked)} ></Switch>
    </>
  )
}

export default demo4
