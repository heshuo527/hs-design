import React from 'react';
import { Row, Col } from '../Grid';
import './demo.less';

const demo = () => {
  return (
    <div>
      <h4>带间距</h4>
      <Row gutter={16}>
        <Col span={8}><div className="demo-box">col-8</div></Col>
        <Col span={8}><div className="demo-box demo-box-alt">col-8</div></Col>
        <Col span={8}><div className="demo-box">col-8</div></Col>
      </Row>
      <h4 style={{ marginTop: 24 }}>对齐方式</h4>
      <Row align="middle" style={{ height: 100, backgroundColor: '#f0f0f0' }}>
        <Col span={8}><div className="demo-box">col-8</div></Col>
        <Col span={8}><div className="demo-box demo-box-alt" style={{ height: 50 }}>col-8</div></Col>
        <Col span={8}><div className="demo-box">col-8</div></Col>
      </Row>
      <h4 style={{ marginTop: 24 }}>偏移</h4>
      <Row>
        <Col span={8}><div className="demo-box">col-8</div></Col>
        <Col span={8} offset={8}><div className="demo-box demo-box-alt">col-8 offset-8</div></Col>
      </Row>
    </div>
  );
};

export default demo;
