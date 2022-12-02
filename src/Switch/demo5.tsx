import React, { useState } from 'react';
import Switch from '.';
import { Button } from 'hs-design';

function demo5() {
  const [ischecked, setChecked] = useState(false);

  return (
    <>
      <Switch toggleChecked={ischecked}></Switch>
      <br />
      <br />
      <Button type="primary" onClick={() => setChecked(!ischecked)}>
        Toggle Checked
      </Button>
    </>
  );
}

export default demo5;
