import React, { useState } from 'react';
import { Switch } from 'hs-design';

function demo2() {
  const [checked, setChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Switch checked={checked} size="small" onChange={() => setChecked(!checked)}></Switch>
      <br />
      <br />
      <Switch checked={isChecked} onChange={() => setIsChecked(!isChecked)}></Switch>
    </>
  );
}

export default demo2;
