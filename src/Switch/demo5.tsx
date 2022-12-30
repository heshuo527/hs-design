import React, { useState } from 'react';
import { Switch } from 'hs-design';
import { Button } from 'hs-design';

function demo5() {
  const [isChecked, setChecked] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  return (
    <>
      <Switch toggleChecked={isChecked} />
      <Button type="primary" onClick={() => setChecked(!isChecked)}>
        Toggle Checked
      </Button>
      <Switch disabled={isDisabled} />
      <Button type="primary" onClick={() => setDisabled(!isDisabled)}>
        Toggle Disabled
      </Button>
    </>
  );
}

export default demo5;
