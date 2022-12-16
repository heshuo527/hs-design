import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';
import { ButtonProps } from '../Button';

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
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element);
  });
});
