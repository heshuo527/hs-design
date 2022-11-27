import React from 'react';
import './index.less';
import '../style/base.less';
export interface DialogType {
    asyncOpen?: boolean;
    children?: React.ReactNode;
    title?: any;
    content?: any;
    onText?: string;
    okType?: 'default' | 'dashed' | 'primary' | 'danger';
    cancelText?: string;
    cancelType?: 'default' | 'dashed' | 'primary' | 'danger';
    type?: 'default' | 'dashed' | 'primary' | 'danger';
    onSize?: 'small' | 'default';
    cancelSize?: 'small' | 'default';
    style?: React.CSSProperties;
    className?: string;
    maskClosable?: boolean;
    onDialogSize?: 'small' | 'medium' | 'large';
    /**
     * 点击确认按钮的回调
     */
    onConfirm?: (e: React.MouseEvent) => any;
    /**
     * 点击取消按钮的回调
     */
    onCancel?: (e: React.MouseEvent) => any;
    /**
     * 点击蒙版时的回调
     */
    onMask?: (e: React.MouseEvent) => any;
    /**
     * 点击主按钮时的回调
     */
    onDialog?: (e: React.MouseEvent) => any;
}
declare const Dialog: React.FC<DialogType>;
export default Dialog;
