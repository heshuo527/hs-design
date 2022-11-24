import React from 'react';
import './index.less';
export interface DialogType {
    children: React.ReactNode;
    title: any;
    content: any;
    buttonName: [any, any];
}
declare const Dialog: React.FC<DialogType>;
export default Dialog;
