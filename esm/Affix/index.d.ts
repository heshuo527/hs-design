import React from 'react';
import './index.less';
export interface AffixProps {
    distance?: number;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
declare const Affix: React.FC<AffixProps>;
export default Affix;
