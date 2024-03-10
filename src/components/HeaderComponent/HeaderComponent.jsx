import { Col } from 'antd'
import React from 'react'
import { WapperHeaderAccount, WapperTextHeader, WapperTextHeaderSmall, WrapperHeader } from './style'
import Search from 'antd/es/transfer/search'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined

} from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WapperTextHeader>ECOMMERCE WEB</WapperTextHeader>
        </Col>

        <Col span={12}>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
          // onSearch={onSearch}
          />
        </Col>

        <Col span={6} style={{display: 'flex', gap: '20px'}}>
          <WapperHeaderAccount>
            <UserOutlined style={{ fontSize: '36px' }} />
            <div>
              <WapperTextHeaderSmall>Đăng nhập/Đăng ký</WapperTextHeaderSmall>
              <div>
                <WapperTextHeaderSmall>Tài khoản</WapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{ fontSize: '36px', color: '#fff' }} />
            <WapperTextHeaderSmall>Giỏ hàng</WapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent