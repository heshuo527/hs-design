import React from 'react'
import { Row, Col } from './index'

function demo() {
  return (
    <>
      <Row>
        <Col span={12}>Col-12</Col>
        <Col span={12}>Col-12</Col>
      </Row>
      <Row>
        <Col span={8}>Col-8</Col>
        <Col span={8}>Col-8</Col>
        <Col span={8}>Col-8</Col>
      </Row>
    </>

  )
}

export default demo
