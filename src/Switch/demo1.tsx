import React, { useState } from 'react'
import Switch from '.'

function demo1() {

  const [checked, setChecked] = useState(false)

  return (
    <Switch checked={checked} onChange={() => setChecked(!checked)} ></Switch>
  )
}

export default demo1
