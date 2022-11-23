import React from 'react'
import { Tabs, TabItem } from './index'

function demo() {
  return (
    <Tabs defaultIndex={1} onSelect={(index) => console.log(index)} >
      <TabItem  label='1'>this is content one</TabItem>
      <TabItem label='2'>this is content two</TabItem>
      <TabItem label='3'>this is content three</TabItem>
      <TabItem label='4'>this is content three</TabItem>
    </Tabs>
  )
}

export default demo
