import React from 'react';
import Table from '../Table';
import Button from '../Button';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '分数',
    dataIndex: 'score',
    key: 'score',
    align: 'center' as const,
    render: (text: number) => {
      const color = text >= 60 ? '@link' : '@error';
      return <span style={{ color }}>{text}</span>;
    },
  },
  {
    title: '操作',
    key: 'action',
    align: 'center' as const,
    render: (_: any, record: any) => (
      <Button size="small" onClick={() => console.log('查看', record.name)}>查看</Button>
    ),
  },
];

const dataSource = [
  {
    key: '1',
    name: '张三',
    score: 85,
  },
  {
    key: '2',
    name: '李四',
    score: 45,
  },
  {
    key: '3',
    name: '王五',
    score: 72,
  },
];

const demo = () => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      bordered
      hoverable
    />
  );
};

export default demo;
