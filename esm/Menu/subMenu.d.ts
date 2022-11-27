import React, { ReactNode } from 'react';
export interface SubMenuProps {
    index?: string;
    title: string;
    ClassName?: string;
    children?: ReactNode;
    icon?: React.ReactNode;
}
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
