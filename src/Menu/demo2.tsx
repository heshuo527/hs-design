import React from 'react'
import { Menu, MenuItem, SubMenu } from '.'

const demo = () => {
  return (
    <Menu mode='vertical' defaultIndex={'0'} onSelect={() => console.log(111)} defaultOpenSubMenu={['3']}>
      <MenuItem>
        首页
      </MenuItem>
      <MenuItem>
        作品集
      </MenuItem>
      <MenuItem disabled>
        关于我们
      </MenuItem>
      <SubMenu title='dropdown' >
        <MenuItem>
          dropdown 1
        </MenuItem>
        <MenuItem>
          dropdown 2
        </MenuItem>
      </SubMenu>
      <MenuItem>
        常见问题
      </MenuItem>
    </Menu>
  )
}

export default demo
