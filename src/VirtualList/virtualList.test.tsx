import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import VirtualList, { VirtualListProps } from './index';

function Item({ style, index }) {
  return (
    <div
      className="item"
      style={{
        ...style,
      }}
    >
      {index}
    </div>
  );
}

const list = new Array(100).fill(0).map((_item, i) => {
  return i;
});

const testProps: VirtualListProps = {
  containerHeight: 100,
  itemHeight: 100,
  itemCount: list.length,
};

const testVirtual = (props: VirtualListProps) => {
  return <VirtualList {...props}>{Item}</VirtualList>;
};

let wrapper: RenderResult,
  virtualElement: any,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe('test virtualList component', () => {
  beforeEach(() => {
    wrapper = render(testVirtual(testProps));
    virtualElement = wrapper.getByTestId('test-virtual');
    activeElement = wrapper.getByText('1');
    // disabledElement = wrapper.getByText('disabled')
  });
  it('should render the correct virtualList', () => {
    expect(virtualElement).toBeInTheDocument();
  });
});
