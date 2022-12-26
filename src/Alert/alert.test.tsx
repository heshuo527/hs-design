import React from 'react';
import { config } from 'react-transition-group';
import { render, fireEvent } from '@testing-library/react';
import Alert, { AlertProps } from './index';

config.disabled = true;
jest.mock('../Icon/icon', () => {
  return (props: any) => {
    return <span>{props.icon}</span>;
  };
});

const testProps: AlertProps = {
  title: 'title',
  onClose: jest.fn(),
};

const typeProps: AlertProps = {
  ...testProps,
  type: 'success',
  description: 'hello world',
  closable: false,
};

describe('test Alert Component', () => {
  it('should render the correct default Alert', () => {
    const { getByText, container, queryByText } = render(<Alert {...testProps} />);
    expect(queryByText('title'));
  });
});
