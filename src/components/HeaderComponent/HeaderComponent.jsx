import { Badge, Col } from 'antd'
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
    <div style={{width: '100%', background: 'rgb(26, 148, 255)', display: 'flex', justifyContent: 'center'}}>
      <WrapperHeader>
        <Col span={5}>
          <WapperTextHeader>ECOMMERCE WEB</WapperTextHeader>
        </Col>

        <Col span={13}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            placeholder="input search text"
            textButton="Tìm kiếm"
          // onSearch={onSearch}
          />
        </Col>

        <Col span={6} style={{display: 'flex', gap: '54px', alignItems: 'center'}}>
          <WapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }} />
            <div>
              <WapperTextHeaderSmall>Đăng nhập/Đăng ký</WapperTextHeaderSmall>
              <div>
                <WapperTextHeaderSmall>Tài khoản</WapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WapperHeaderAccount>
          <div>
            <Badge count={4} size='small'>
              <ShoppingCartOutlined style={{ fontSize: '36px', color: '#fff' }} />
            </Badge>
            <WapperTextHeaderSmall>Giỏ hàng</WapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent