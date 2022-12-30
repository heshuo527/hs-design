import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch, { SwitchProps } from '.';

const defaultProps: SwitchProps = {
  onClick: jest.fn(),
};

describe('test switch component', () => {
  it('should has click wave effect', () => {
    const { container } = render(<Switch {...defaultProps} />);
    const element = container.querySelector('.hs-switch');
    const element2 = container.querySelector('.hs-switch-core');
    expect(element).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
    expect(element?.tagName).toEqual('SPAN');
    expect(element2?.tagName).toEqual('SPAN');
    fireEvent.click(element2!);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('should render the correct switch className', () => {
    const { container } = render(<Switch />);
    const element = container.querySelector('.hs-switch');
    const element2 = container.querySelector('.hs-switch-core');
    expect(element).toHaveClass('hs-switch hs-switch-default');
    expect(element2).toHaveClass('hs-switch-core');
  });
  it('should render the correct switch htmlElement', () => {
    const { container } = render(<Switch />);
    const element = container.querySelector('.hs-switch');
    const element2 = container.querySelector('.hs-switch-core');
    expect(element).toContainHTML(
      '<span class="hs-switch hs-switch-default"><span class="hs-switch-core"/></span>',
    );
    expect(element2).toContainHTML('<span class="hs-switch-core"/>');
  });
});
