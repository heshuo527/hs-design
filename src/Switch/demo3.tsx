import React, { useState } from 'react'
import Switch from '.'

function demo3() {

  const [checked, setChecked] = useState(false)
  const [isChecked, setIsChecked] = useState(true)

  return (
    <>
      <Switch disabled checked={checked} onChange={() => setChecked(!checked)} ></Switch>
      <br />
      <br />
      <Switch disabled checked={isChecked} onChange={() => setIsChecked(!isChecked)} ></Switch>
    </>
  )
}

export default demo3
