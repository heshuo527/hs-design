import React from 'react';
import { Form, FormItem } from '../Form';
import Input from '../Input';
import Button from '../Button';

const demo = () => {
  const handleFinish = (values: any) => {
    console.log('表单提交成功:', values);
    alert(`提交成功！\n邮箱: ${values.email}\n年龄: ${values.age}`);
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return '请输入有效的邮箱地址';
    }
    return true;
  };

  const validateAge = (value: string) => {
    const age = parseInt(value, 10);
    if (isNaN(age) || age < 1 || age > 150) {
      return '请输入有效的年龄';
    }
    return true;
  };

  return (
    <Form layout="vertical" onFinish={handleFinish}>
      <FormItem
        label="邮箱"
        name="email"
        rules={[
          { required: true, message: '请输入邮箱' },
          { validator: validateEmail },
        ]}
      >
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormItem
        label="年龄"
        name="age"
        rules={[
          { required: true, message: '请输入年龄' },
          { validator: validateAge },
        ]}
      >
        <Input placeholder="请输入年龄" />
      </FormItem>
      <FormItem
        label="个人网站"
        name="website"
        rules={[
          {
            pattern: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
            message: '请输入有效的网址',
          },
        ]}
      >
        <Input placeholder="请输入个人网站（选填）" />
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">提交</Button>
      </FormItem>
    </Form>
  );
};

export default demo;
