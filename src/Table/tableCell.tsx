import React, { ReactNode } from 'react';
import classnames from 'classnames';

export interface TableCellProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TableCell: React.FC<TableCellProps> = (props) => {
  const { children, className, style } = props;

  const classes = classnames('hs-table-cell', className);

  return (
    <td className={classes} style={style}>
      {children}
    </td>
  );
};

export default TableCell;
