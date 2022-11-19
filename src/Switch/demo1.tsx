import React, { useState } from 'react'
import Switch from '.'

function demo1() {

  const [checked, setChecked] = useState(false)

  return (
    <Switch disabled checked={checked} onClick={() => setChecked(!checked)} ></Switch>
  )
}

export default demo1
