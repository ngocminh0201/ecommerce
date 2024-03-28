import { Badge, Col, Popover } from 'antd'
import React, { useEffect, useState } from 'react'
import { WapperHeaderAccount, WapperTextHeader, WapperTextHeaderSmall, WrapperContentPopup, WrapperHeader } from './style'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined

} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import {resetUser} from '../../redux/slides/userSlide' 
import Loading from '../LoadingComponent/Loading';

const HeaderComponent = () => {
  const navigate = useNavigate()
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }

  const user = useSelector((state) => state.user)
  // console.log('user', user)

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    setLoading(true)
    await UserService.logoutUser()
    dispatch(resetUser())
    setLoading(false)
  }

  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  useEffect(() => {
    setLoading(true)
    setUserName(user?.name)
    setUserAvatar(user?.avatar)
    setLoading(false)
  }, [user?.name, user?.avatar])


  const content = (
    <div>
      <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
      <WrapperContentPopup onClick={() => navigate('/profile-user')}>Thông tin người dùng</WrapperContentPopup>
    </div>
  );

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
          <Loading isPending={loading}>
            <WapperHeaderAccount>
              {userAvatar ? (
                  <img src={userAvatar} alt='avatar' style={{
                    height: '30px',
                    width: '30px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }} />
              ) : (
                <UserOutlined style={{ fontSize: '30px' }} />

              )}
              {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click">
                    <div style={{cursor: 'pointer'}} >{userName?.length ? userName : user?.email}</div>
                  </Popover>
                </>
              ) : (
                <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
                  <WapperTextHeaderSmall>Đăng nhập/Đăng ký</WapperTextHeaderSmall>
                  <div>
                    <WapperTextHeaderSmall>Tài khoản</WapperTextHeaderSmall>
                    <CaretDownOutlined />
                  </div>
                </div>
              )}
            </WapperHeaderAccount>
          </Loading>
          
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