import * as React from 'react';
import './style/index.less';
export interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number;
    className?: string;
    style?: React.CSSProperties;
    loading?: boolean;
    onClick?: React.MouseEventHandler;
}
export declare const MyIcon: React.FunctionComponent<IconProps>;
export declare const SettingIcon: React.FunctionComponent<IconProps>;
export declare const LoadingIcon: React.FunctionComponent<IconProps>;
export declare const SearchIcon: React.FunctionComponent<IconProps>;
export declare const SearchSIcon: React.FunctionComponent<IconProps>;
export declare const DoneIcon: React.FunctionComponent<IconProps>;
export declare const UpArrowsIcon: React.FunctionComponent<IconProps>;
export declare const ToggleIcon: React.FunctionComponent<IconProps>;
