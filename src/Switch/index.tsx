import React, { useState } from 'react';
import classnames from 'classnames';
import './index.less';

export interface SwitchProps {
  /**
   * 默认false就是默认关闭状态
   * 默认true就是默认打开状态
   */
  checked?: Boolean;
  children?: React.ReactNode;
  disabled?: Boolean;
  size?: 'small' | 'default';
  onChange?: React.MouseEventHandler;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
  toggleChecked?: Boolean;
}

const Switch: React.FC<SwitchProps> = (props) => {
  const { size, disabled } = props;
  if (!props.checked) {
    props.checked === false;
  }

  const [checked, setChecked] = useState(props.checked);
  const { children, onChange, onClick } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled) {
      return;
    }
    if (onChange) {
      onChange(e);
    }
    if (onClick) {
      onClick(e);
    }
    if (checked !== undefined) {
      setChecked(!checked);
    }
  };

  return (
    <span
      className={classnames({
        'hs-switch': true,
        'hs-switch-default': size === 'default',
        'hs-switch-small': size === 'small',
        'hs-switch-checked': checked,
        'hs-switch-checked-toggle': props.toggleChecked,
        'hs-switch-disabled': disabled,
      })}
      onClick={handleClick}
    >
      <span className="hs-switch-core">{children}</span>
    </span>
  );
};

Switch.defaultProps = {
  disabled: false,
  size: 'default',
};

export default Switch;
