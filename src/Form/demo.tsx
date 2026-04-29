import React from 'react';
import { Form, FormItem } from '../Form';
import Input from '../Input';
import Button from '../Button';

const demo = () => {
  const handleFinish = (values: any) => {
    console.log('表单提交成功:', values);
    alert(`提交成功！\n用户名: ${values.username}\n密码: ${values.password}`);
  };

  const handleFinishFailed = (values: any, errors: any) => {
    console.log('表单提交失败:', values, errors);
  };

  return (
    <Form layout="horizontal" onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
      <FormItem
        label="用户名"
        name="username"
        rules={[
          { required: true, message: '请输入用户名' },
          { min: 3, message: '用户名至少3个字符' },
        ]}
      >
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem
        label="密码"
        name="password"
        rules={[
          { required: true, message: '请输入密码' },
          { min: 6, message: '密码至少6个字符' },
        ]}
      >
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <FormItem label=" ">
        <Button type="primary" htmlType="submit">提交</Button>
        <Button htmlType="reset" style={{ marginLeft: 8 }}>重置</Button>
      </FormItem>
    </Form>
  );
};

export default demo;
