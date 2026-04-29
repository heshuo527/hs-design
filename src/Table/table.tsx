import React from 'react';
import classnames from 'classnames';
import './index.less';

export interface Column {
  title: string;
  dataIndex?: string;
  key: string;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (text: any, record: any, index: number) => React.ReactNode;
}

export interface TableProps {
  columns: Column[];
  dataSource: any[];
  className?: string;
  style?: React.CSSProperties;
  onRow?: (record: any, index: number) => {
    onClick?: React.MouseEventHandler;
    className?: string;
    style?: React.CSSProperties;
  };
  rowKey?: string | ((record: any) => string);
  bordered?: boolean;
  hoverable?: boolean;
}

const Table: React.FC<TableProps> = (props) => {
  const {
    columns,
    dataSource,
    className,
    style,
    onRow,
    rowKey,
    bordered,
    hoverable,
  } = props;

  const classes = classnames('hs-table', className, {
    'hs-table-bordered': bordered,
    'hs-table-hoverable': hoverable,
  });

  const getRowKey = (record: any, index: number): string => {
    if (typeof rowKey === 'function') {
      return rowKey(record);
    }
    if (typeof rowKey === 'string') {
      return record[rowKey];
    }
    return record.key || index;
  };

  const renderCells = (record: any, rowIndex: number) => {
    return columns.map((column, colIndex) => {
      const { dataIndex, key, render, align } = column;
      const text = dataIndex ? record[dataIndex] : '';
      const content = render ? render(text, record, rowIndex) : text;

      const cellClasses = classnames('hs-table-cell', {
        [`hs-table-cell-align-${align || 'left'}`]: true,
      });

      return (
        <td key={key || colIndex} className={cellClasses}>
          {content}
        </td>
      );
    });
  };

  return (
    <table className={classes} style={style}>
      <thead className="hs-table-thead">
        <tr>
          {columns.map((column, index) => {
            const { title, key, width, align } = column;
            const headerClasses = classnames('hs-table-cell hs-table-header-cell', {
              [`hs-table-cell-align-${align || 'left'}`]: true,
            });
            return (
              <th
                key={key || index}
                className={headerClasses}
                style={{ width }}
              >
                {title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="hs-table-tbody">
        {dataSource.map((record, rowIndex) => {
          const rowProps = onRow ? onRow(record, rowIndex) : {};
          const rowKeyValue = getRowKey(record, rowIndex);

          const rowClasses = classnames('hs-table-row', rowProps.className, {
            'hs-table-row-hoverable': hoverable,
          });

          return (
            <tr
              key={rowKeyValue}
              className={rowClasses}
              style={rowProps.style}
              onClick={rowProps.onClick}
            >
              {renderCells(record, rowIndex)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
