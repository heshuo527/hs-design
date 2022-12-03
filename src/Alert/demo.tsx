import React from 'react';
import { Alert } from 'hs-design';

function demo() {
  return (
    <>
      <Alert type="default" closable title="type default"></Alert>
      <Alert type="success" closable title="type success"></Alert>
      <Alert type="danger" closable title="type danger"></Alert>
      <Alert type="warning" closable title="type warning"></Alert>
    </>
  );
}

export default demo;
