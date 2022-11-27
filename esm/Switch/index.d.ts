import React from 'react';
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
    onChange?: (checked: boolean, e: React.MouseEvent) => any;
    style?: React.CSSProperties;
}
export interface SwitchState {
    derivedChecked?: boolean;
}
declare const Switch: React.FC<SwitchProps & SwitchState>;
export default Switch;
