import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { ButtonProps } from './index';

const defaultProps = {
  disabled: false,
  onClick: jest.fn(),
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('test Button component', () => {
  it('should render the correct default button', () => {
    // render 方法返回一个包裹对象, 对象包裹一些对DOM的查询和获取方法
    const wrapper = render(<Button {...defaultProps}>hs</Button>);
    const element = wrapper.getByText('hs') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    // 断言他是一个button组件
    expect(element.tagName).toEqual('BUTTON');
    // 元素上是否存在disabled禁用属性
    expect(element.disabled).toBeFalsy();
    // fireEvent触发事件
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('should render the correct button className', () => {
    const wrapper = render(<Button>hs</Button>);
    const element = wrapper.getByText('hs');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('hs-button hs-button-default hs-button-medium');
  });
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>hs</Button>);
    const element = wrapper.getByText('hs') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
