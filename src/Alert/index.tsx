import React, { MouseEventHandler, useState } from 'react';
import classnames from 'classnames';
import { CloseIcon } from '../icon/Icon';
import Transition from '../utils/transition';
import './index.less';

export type AlertType = 'success' | 'default' | 'danger' | 'warning';
export interface AlertProps {
  title?: string;
  /**
   * 描述
   */
  description?: string;
  type?: AlertType;
  onClose?: MouseEventHandler;
  closable?: Boolean;
  icon?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { type, title, description, closable, onClose, icon } = props;
  const [hide, setHide] = useState(false);
  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose(e);
    }
    setHide(true);
  };

  const classes = classnames({
    'hs-alert': true,
    'hs-alert-default': type === 'default',
    'hs-alert-success': type === 'success',
    'hs-alert-danger': type === 'danger',
    'hs-alert-warning': type === 'warning',
  });

  return (
    <Transition in={!hide} timeout={500} animation="zoom-in-top">
      <div className={classes}>
        {icon}
        <span className="bold-title">{title}</span>
        {description && <p className="he-alert-desc">{description}</p>}
        {closable && (
          <span className="hs-alert-close" onClick={handleClose}>
            <CloseIcon color="#fff" />
          </span>
        )}
      </div>
    </Transition>
  );
};

Alert.defaultProps = {
  title: '请添加title属性修改内容哦',
  closable: true,
  type: 'default',
};

export default Alert;
