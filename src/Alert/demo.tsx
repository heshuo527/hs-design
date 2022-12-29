import React from 'react';
import { Alert } from 'hs-design';

function demo() {
  return (
    <>
      <Alert type="default" closable title="type default" />
      <Alert type="success" closable title="type success" />
      <Alert type="danger" closable title="type danger" />
      <Alert type="warning" closable title="type warning" />
    </>
  );
}

export default demo;
