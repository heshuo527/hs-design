import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Affix from './index';

describe('test Affix component', () => {
  it('should render the correct default affix', () => {
    const wrapper = render(<Affix>hs</Affix>);
    const element = wrapper.getByText('hs');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('DIV');
  });
  it('should render the correct include htmlText', () => {
    const wrapper = render(<Affix>hs</Affix>);
    const element = wrapper.getByText('hs');
    expect(element).toContainHTML('<div class="hs-affix-demo">hs</div>');
  });
});
