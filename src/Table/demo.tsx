import React from 'react';
import Table from '../Table';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center' as const,
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
];

const dataSource = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '北京市朝阳区',
  },
  {
    key: '2',
    name: '李四',
    age: 28,
    address: '上海市浦东新区',
  },
  {
    key: '3',
    name: '王五',
    age: 36,
    address: '广州市天河区',
  },
];

const demo = () => {
  return <Table columns={columns} dataSource={dataSource} />;
};

export default demo;
