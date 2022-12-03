import React, { useState } from 'react';
import Switch from '.';
import Button from '../Button';

function demo5() {
  const [isChecked, setChecked] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  return (
    <>
      <Switch toggleChecked={isChecked}></Switch>
      <Button type="primary" onClick={() => setChecked(!isChecked)}>
        Toggle Checked
      </Button>
      <Switch disabled={isDisabled}></Switch>
      <Button type="primary" onClick={() => setDisabled(!isDisabled)}>
        Toggle Disabled
      </Button>
    </>
  );
}

export default demo5;
