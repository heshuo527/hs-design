import React, { useState } from 'react';
import { Button } from 'hs-design';
import { LoadingIcon, ToggleIcon, SearchIcon, DoneIcon } from '../icon/Icon';

function demo5() {
  const [onClickSpin, setOnClickSpin] = useState(false);

  const actOnClick = () => {
    console.log('我执行了');
  };

  return (
    <>
      <Button type="primary" icon={<LoadingIcon loading color="#fff" />} onClick={actOnClick}>
        Loading
      </Button>
      <Button
        type="primary"
        icon={<ToggleIcon color="#fff" loading={onClickSpin} />}
        onClick={() => setOnClickSpin(!onClickSpin)}
      >
        Click Me
      </Button>
      <Button type="primary" icon={<SearchIcon color="#fff" />}>
        Search
      </Button>
      <Button type="primary" icon={<DoneIcon color="#fff" />}>
        DoneSearch
      </Button>
    </>
  );
}

export default demo5;
