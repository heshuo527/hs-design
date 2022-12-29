import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alert, { AlertProps } from './index';

const defaultProps: AlertProps = {
  title: 'hs',
  description: 'design',
  type: 'default',
  onClose: jest.fn(),
  closable: true,
};

describe('test alert component', () => {
  it('should render the correct default alert', () => {
    const wrapper = render(<Alert {...defaultProps} />);
    const element = wrapper.getByText('hs');
    const element2 = wrapper.getByText('design');
    expect(element).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
    expect(element.tagName).toEqual('SPAN');
    expect(element2.tagName).toEqual('P');
  });
  it('should render the correct alert htmlElement', () => {
    const wrapper = render(<Alert {...defaultProps} />);
    const element = wrapper.getByText('hs');
    const element2 = wrapper.getByText('design');
    expect(element).toBeInTheDocument();
    expect(element).toContainHTML('<span class="bold-title">hs</span>');
    expect(element2).toContainHTML('<p class="he-alert-desc">design</p>');
  });
  it('should render the correct alert className', () => {
    const wrapper = render(<Alert {...defaultProps} />);
    const element = wrapper.getByText('hs');
    const element2 = wrapper.getByText('design');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('bold-title');
    expect(element2).toHaveClass('he-alert-desc');
  });
});
