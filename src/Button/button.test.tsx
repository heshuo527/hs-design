import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';
import { ButtonProps } from './index';

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  type: 'primary',
  size: 'medium',
  className: 'hs-design',
};

describe('测试 Button 组件', () => {
  it('default Button', () => {
    // render 方法返回一个包裹对象, 对象包裹一些对DOM的查询和获取方法
    const wrapper = render(<Button>Nice</Button>);
    // getByText 通过表标签的text获取DOM
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
  });
});
