import React, { useState } from 'react';
import Button from '.';
import {
  MyIcon,
  SettingIcon,
  LoadingIcon,
  ToggleIcon,
  SearchIcon,
  SearchSIcon,
  DoneIcon,
} from '../icon/Icon';

function demo5() {
  const [onClickSpin, setOnClickSpin] = useState(false);

  const actOnClick = () => {
    console.log('我执行了');
  };

  return (
    <>
      <Button type="primary" icon={<LoadingIcon loading />} onClick={actOnClick}>
        Loading
      </Button>
      <Button
        type="primary"
        icon={<ToggleIcon loading={onClickSpin} />}
        onClick={() => setOnClickSpin(!onClickSpin)}
      >
        Click Me
      </Button>
      <Button type="primary" icon={<SearchIcon />}>
        Search
      </Button>
      <Button type="primary" icon={<DoneIcon />}>
        DoneSearch
      </Button>
    </>
  );
}

export default demo5;
