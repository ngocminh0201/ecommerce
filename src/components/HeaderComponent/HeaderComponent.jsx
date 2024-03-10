import { Col } from 'antd'
import React from 'react'
import { WapperHeaderAccount, WapperTextHeader, WapperTextHeaderSmall, WrapperHeader } from './style'
import Search from 'antd/es/transfer/search'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined

} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WapperTextHeader>ECOMMERCE WEB</WapperTextHeader>
        </Col>

        <Col span={12}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            placeholder="input search text"
            textButton="Tìm kiếm"
          // onSearch={onSearch}
          />
        </Col>

        <Col span={6} style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
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