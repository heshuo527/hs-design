import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dialog, { DialogProps } from '.';

const defaultProps: DialogProps = {
  cancelText: '取消',
  okType: 'primary',
  title: '标题',
  content: '内容',
  cancelType: 'default',
  onSize: 'default',
  cancelSize: 'default',
  maskClosable: false,
  type: 'primary',
  onDialog: jest.fn(),
  disabled: false,
};

describe('test dialog component', () => {
  it('should render the correct default dialog', () => {
    const wrapper = render(<Dialog {...defaultProps}>hs</Dialog>);
    const element = wrapper.getByText('hs');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    fireEvent.click(element);
    expect(defaultProps.onDialog).toHaveBeenCalled();
    expect(defaultProps.disabled).toBeFalsy();
  });
  it('should render the correct dialog className', () => {
    const wrapper = render(<Dialog>hs</Dialog>);
    const element = wrapper.getByText('hs');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('hs-button hs-button-primary hs-button-medium');
  });
  it('should render the correct dialog htmlElement', () => {
    const wrapper = render(<Dialog>hs</Dialog>);
    const element = wrapper.getByText('hs');
    expect(element).toBeInTheDocument();
    expect(element).toContainHTML(
      '<button class="hs-button hs-button-primary hs-button-medium" type="button"> hs </button>',
    );
  });
  it('should render the correct dialog attribute', () => {
    const wrapper = render(<Dialog>hs</Dialog>);
    const element = wrapper.getByText('hs');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('type', 'button');
  });
});
