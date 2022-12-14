import React from 'react';
import classnames from 'classnames';
import './index.less';

export interface BUttonProps {
  children?: React.ReactNode;
  type?: 'default' | 'dashed' | 'primary' | 'danger';
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  ghost?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  onClick?: React.MouseEventHandler;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<BUttonProps> = (props) => {
  const {
    icon,
    loading,
    size,
    type,
    htmlType,
    ghost,
    style,
    className,
    disabled,
    children,
    ...rest
  } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled) {
      return;
    }
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <button
      className={classnames({
        'hs-button': true,
        'hs-button-default': type === 'default',
        'hs-button-primary': type === 'primary',
        'hs-button-dashed': type === 'dashed',
        'hs-button-danger': type === 'danger',
        'hs-button-small': size === 'small',
        'hs-button-medium': size === 'medium',
        'hs-button-large': size === 'large',
        'hs-button-ghost': ghost,
        'hs-button-disabled': disabled,
      })}
      style={style}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {props.icon && props.icon}
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'default',
  size: 'medium',
};

export default Button;
