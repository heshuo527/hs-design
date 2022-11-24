import React from 'react';
import './index.less';
export interface BUttonProps {
    children?: React.ReactNode;
    type?: 'default' | 'dashed' | 'primary' | 'danger';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    icon?: string;
    position?: 'left' | 'right';
    size?: 'small' | 'medium' | 'large';
    ghost?: boolean;
    htmlType?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    className?: string;
    style?: React.CSSProperties;
}
declare const Button: React.FC<BUttonProps>;
export default Button;
