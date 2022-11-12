import React, { useState } from 'react'
import Switch from '.'

const demo1 = () => {

  const [derivedChecked, setDerivedChecked] = useState(false)
  return (
    <Switch defaultChecked onClick={() => setDerivedChecked(!derivedChecked)}></Switch>
  )
}
export default demo1
