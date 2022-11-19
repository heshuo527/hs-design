import React, { useState } from 'react'
import Switch from '.'

function demo1() {

  const [checked, setChecked] = useState(false)

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <Switch checked onClick={(checked) => checked=true}></Switch>
  )
}

export default demo1
