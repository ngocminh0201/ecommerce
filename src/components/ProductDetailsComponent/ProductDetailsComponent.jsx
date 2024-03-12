import { Col, Image, InputNumber, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/test.webp'
import imageProductSmall from '../../assets/images/imagesmall.webp'
import { WrapperAddressProduct, WrapperBtnQuantityProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTestProduct, WrapperQuantityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailsComponent = () => {
    const onChange = () => {}
    return (
        <Row style={{padding: '16px', background: '#fff', borderRadius: '4px'}}>
            <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight: '8px'}}>
                <Image src={imageProduct} alt='image product' preview={false}/>
                <Row style={{paddingTop: '10px', justifyContent: 'space-between'}}> 
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
                    </WrapperStyleColImage>                
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft: '6px'}}>
                <WrapperStyleNameProduct>Sách - Thám tử lừng danh Conan</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}} />
                    <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}} />
                    <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}} />
                    <WrapperStyleTextSell>| Da ban 1000+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTestProduct>200.000d</WrapperPriceTestProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến </span>
                    <span className='address'>Nam Từ Liêm, Hà Nội</span> -
                    <span className='change-address'>Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <div style={{margin: '10px 0 20px', padding: '10px 0',
                            borderTop: '1px solid #e5e5e5',
                            borderBottom: '1px solid #e5e5e5' }}>
                    <div style={{marginBottom: '10px'}}>Số lượng</div>
                    <WrapperQuantityProduct>
                        <button style={{border: 'none', background: 'transparent' }}>
                            <MinusOutlined style={{color: '#000', fontSize: '20px'}} />
                        </button>
                        <WrapperInputNumber defaultValue={1} onChange={onChange} size='small'/>
                        <button style={{border: 'none', background: 'transparent' }}>
                            <PlusOutlined style={{color: '#000', fontSize: '20px'}} />
                        </button>
                    </WrapperQuantityProduct>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'rgb(255, 57, 69)',
                            height: '48px',
                            width: '220px',
                            border: 'none',
                            borderRadius: '4px'
                        }}
                        textButton={'Chọn mua'}
                        styleTextButton={{
                            color: '#fff',
                            fontSize: '15px',
                            fontWeight: '700'
                        }}
                    ></ButtonComponent>

                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background: '#fff',
                            height: '48px',
                            width: '220px',
                            border: '1px solid rgb(13, 92, 182)',
                            borderRadius: '4px'
                        }}
                        textButton={'Mua trả sau'}
                        styleTextButton={{
                            color: 'rgb(13, 92, 182)',
                            fontSize: '15px'
                        }}
                    ></ButtonComponent>
                </div>
            </Col>
        </Row>
    )
}

export default ProductDetailsComponent