import React, { ReactNode } from 'react';
import classnames from 'classnames';
import './index.less';

export interface RowProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  gutter?: number | [number, number];
  align?: 'top' | 'middle' | 'bottom';
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
}

export interface ColProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  span?: number;
  offset?: number;
  pull?: number;
  push?: number;
  xs?: number | ColProps;
  sm?: number | ColProps;
  md?: number | ColProps;
  lg?: number | ColProps;
  xl?: number | ColProps;
}

const Row: React.FC<RowProps> = (props) => {
  const {
    children,
    className,
    style,
    gutter = 0,
    align = 'top',
    justify = 'start',
  } = props;

  const classes = classnames('hs-row', className, {
    [`hs-row-align-${align}`]: true,
    [`hs-row-justify-${justify}`]: true,
  });

  const rowStyle: React.CSSProperties = {
    ...style,
    marginLeft: Array.isArray(gutter) ? `-${gutter[0] / 2}px` : `-${gutter / 2}px`,
    marginRight: Array.isArray(gutter) ? `-${gutter[0] / 2}px` : `-${gutter / 2}px`,
  };

  const childrenWithGutter = React.Children.map(children, (child) => {
    if (!child) return null;
    const childElement = child as React.ReactElement;
    return React.cloneElement(childElement, {
      style: {
        ...childElement.props.style,
        paddingLeft: Array.isArray(gutter) ? gutter[0] / 2 : gutter / 2,
        paddingRight: Array.isArray(gutter) ? gutter[0] / 2 : gutter / 2,
      },
    });
  });

  return (
    <div className={classes} style={rowStyle}>
      {childrenWithGutter}
    </div>
  );
};

const Col: React.FC<ColProps> = (props) => {
  const {
    children,
    className,
    style,
    span,
    offset = 0,
    pull = 0,
    push = 0,
    xs,
    sm,
    md,
    lg,
    xl,
  } = props;

  const classes = classnames('hs-col', className, {
    [`hs-col-span-${span}`]: span !== undefined,
    [`hs-col-offset-${offset}`]: offset > 0,
    [`hs-col-pull-${pull}`]: pull > 0,
    [`hs-col-push-${push}`]: push > 0,
    [`hs-col-xs-${typeof xs === 'number' ? xs : (xs as ColProps)?.span}`]:
      typeof xs === 'number' || (xs as ColProps)?.span !== undefined,
    [`hs-col-sm-${typeof sm === 'number' ? sm : (sm as ColProps)?.span}`]:
      typeof sm === 'number' || (sm as ColProps)?.span !== undefined,
    [`hs-col-md-${typeof md === 'number' ? md : (md as ColProps)?.span}`]:
      typeof md === 'number' || (md as ColProps)?.span !== undefined,
    [`hs-col-lg-${typeof lg === 'number' ? lg : (lg as ColProps)?.span}`]:
      typeof lg === 'number' || (lg as ColProps)?.span !== undefined,
    [`hs-col-xl-${typeof xl === 'number' ? xl : (xl as ColProps)?.span}`]:
      typeof xl === 'number' || (xl as ColProps)?.span !== undefined,
  });

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export { Row, Col };
export default Row;
