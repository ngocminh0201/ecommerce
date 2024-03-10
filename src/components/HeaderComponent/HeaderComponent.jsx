import { Col, Row } from 'antd'
import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
      <Row>
      <Col span={6}>col-8</Col>
      <Col span={12}>col-8</Col>
      <Col span={6}>
        col-8
      </Col>
    </Row>
    </div>
  )
}

export default HeaderComponent