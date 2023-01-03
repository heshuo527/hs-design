import React, {
  ChangeEvent,
  CSSProperties,
  ReactElement,
  ReactNode,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
import { SearchIcon } from '../icon/Icon';
import classnames from 'classnames';
import './index.less';

type InputSize = 'small' | 'lager';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size?: InputSize;
  children?: ReactNode;
  icon?: any;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: React.MouseEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  onPressEnter?: React.KeyboardEventHandler;
  suffix?: string | React.ReactNode;
  addonAfter?: string | React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    children,
    onChange,
    style,
    className,
    suffix,
    addonAfter,
    ...restProps
  } = props;

  const classes = classnames('hs-input-wrapper', {
    [`input-size-${size}`]: size,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend,
  });

  const classes2 = classnames('hs-input-inner', {
    'is-disabled': disabled,
  });

  const fixControlledValue = (value: any) => {
    console.log(111);
    if (typeof value === 'undefined' || value === null) {
      console.log('typeof', value);
      return '';
    }
    console.log('value', value);
    return value;
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    const { onPressEnter, onKeyDown } = props;
    if (onPressEnter && e.keyCode === 13) {
      onPressEnter(e);
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  const handleClick: React.MouseEventHandler = (e) => {
    const { onClick } = props;
    if (onClick) {
      onClick(e);
      console.log('111');
    }
  };

  if ('value' in props) {
    console.log(restProps.defaultValue);
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }
  return (
    <div className={classes} style={style}>
      {prepend && <div className="hs-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper">{children}</div>}
      <input
        ref={ref}
        className={classes2}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
      {append && (
        <div className="hs-input-group-append" onClick={handleClick}>
          {append}
        </div>
      )}
    </div>
  );
});

export default Input;
