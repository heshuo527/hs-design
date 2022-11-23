import React from "react";
import { render, RenderResult } from '@testing-library/react'

import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}

const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical'
}

const generateMenu = (props) => {
  return (
    <Menu {...props}>
      <MenuItem index={'0'}>
        cool link
      </MenuItem>
      <MenuItem index={'1'} disabled>
        cool link2
      </MenuItem>
      <MenuItem index={'2'}>
        cool link3
      </MenuItem>
    </Menu>
  )
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem based on default props', () => {
    // expect(menuElement).toBeInTheDocument()
  })
  it('click items should change active and call the right callback', () => {

  })
  it('should render vertical mode when mode is set to vertical', () => {

  })
})


