import React, { useState } from 'react';
import classnames from 'classnames';
import { CloseIcon } from '../icon/Icon';
import Transition from '../utils/transition';
import './index.less';

export interface AlertProps {
  title: string;
  /**
   * 描述
   */
  description?: string;
  children?: React.ReactNode;
  type?: 'success' | 'default' | 'danger' | 'warning';
  onClose?: () => void;
  closable?: Boolean;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { children, type, title, description, closable, onClose } = props;
  const [hide, setHide] = useState(false);
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setHide(true);
  };

  return (
    <Transition in={!hide} timeout={300} animation="zoom-in-top">
      <div
        className={classnames({
          'hs-alert': true,
          'hs-alert-default': type === 'default',
          'hs-alert-success': type === 'success',
          'hs-alert-danger': type === 'danger',
          'hs-alert-warning': type === 'warning',
        })}
      >
        <span className="bold-title">{title}</span>
        {description && <p className="he-alert-desc">{description}</p>}
        {closable && (
          <span className="hs-alert-close" onClick={handleClose}>
            <CloseIcon />
          </span>
        )}
        {children}
      </div>
    </Transition>
  );
};

export default Alert;
