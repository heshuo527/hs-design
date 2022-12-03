import React from 'react';
import { FillIcon, ErrorIcon } from '../icon/Icon';
import { Alert } from 'hs-design';

function demo() {
  return (
    <>
      <Alert type="success" closable title="Study on time" icon={<FillIcon />}></Alert>
      <Alert
        type="default"
        closable
        description="不要熬夜哦亲亲"
        title="Don stay up late"
        icon={<ErrorIcon />}
      ></Alert>
    </>
  );
}

export default demo;
