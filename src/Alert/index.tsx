import React from 'react';
import classnames from 'classnames';

export interface AlertProps {
  children?: React.ReactNode;
  type?: string;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { children, type } = props;
  return (
    <div
      className={classnames({
        'hs-alert': true,
        'hs-alert-default': type === 'default',
      })}
    >
      {children}
    </div>
  );
};

export default Alert;
