import React from 'react';
import { Row, Col } from '../Grid';
import './demo.less';

const demo = () => {
  return (
    <div>
      <h4>基础栅格</h4>
      <Row>
        <Col span={12}><div className="demo-box">col-12</div></Col>
        <Col span={12}><div className="demo-box demo-box-alt">col-12</div></Col>
      </Row>
      <Row style={{ marginTop: 16 }}>
        <Col span={8}><div className="demo-box">col-8</div></Col>
        <Col span={8}><div className="demo-box demo-box-alt">col-8</div></Col>
        <Col span={8}><div className="demo-box">col-8</div></Col>
      </Row>
      <Row style={{ marginTop: 16 }}>
        <Col span={6}><div className="demo-box">col-6</div></Col>
        <Col span={6}><div className="demo-box demo-box-alt">col-6</div></Col>
        <Col span={6}><div className="demo-box">col-6</div></Col>
        <Col span={6}><div className="demo-box demo-box-alt">col-6</div></Col>
      </Row>
    </div>
  );
};

export default demo;
