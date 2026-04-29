import React, { ReactNode } from 'react';
import classnames from 'classnames';

export interface TableRowProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
}

const TableRow: React.FC<TableRowProps> = (props) => {
  const { children, className, style, onClick } = props;

  const classes = classnames('hs-table-row', className);

  return (
    <tr className={classes} style={style} onClick={onClick}>
      {children}
    </tr>
  );
};

export default TableRow;
