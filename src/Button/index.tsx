import React from 'react';
import classnames from 'classnames';
import './index.less';

export type ButtonType = 'default' | 'dashed' | 'primary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonHtmlType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  children?: React.ReactNode;
  type?: ButtonType;
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: ButtonSize;
  ghost?: boolean;
  htmlType?: ButtonHtmlType;
  loading?: boolean;
  onClick?: React.MouseEventHandler;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = (props) => {
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

  const classes = classnames({
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
  });

  return (
    <button
      className={classes}
      style={style}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {props.icon && icon}
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'default',
  size: 'medium',
};

export default Button;
