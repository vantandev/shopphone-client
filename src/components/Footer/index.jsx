import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="logo"
              style={{ color: '#fff', fontSize: '20px', fontWeight: '900' }}
            >
              ITShop
            </div>
            <br />
            <p className="font">
              Mong muốn cung cấp dịch vụ tốt nhất đến mọi người trên 
              thị trường với giá cả và dịch vụ bảo hành tốt nhất
            </p>
          </div>
          <div className="col-md-6">
            <h4 className="font">Nhận tin mới từ ITShop</h4>
            <p className="font">
              Đăng kí ngay để nhận thông tin mới nhất về khuyến mãi, sự kiện,
              offer... từ ITShop.
            </p>
            <Input.Group compact>
              <Input size='large' style={{ width: 'calc(100% - 200px)' }} placeholder='Email' />
              <Button className='button' size='large'>
                Gửi
              </Button>
            </Input.Group>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <h5 className="fw-bold font">GIỚI THIỆU</h5>
            <ul className="font">
              <li>Về ITShop</li>
              <li>Câu chuyện ITShop</li>
              <li>Về ITShop</li>
              <li>Liên hệ</li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h5 className='fw-bold font'>ĐIỀU KHOẢN & DỊCH VỤ</h5>
            <ul className='font'>
              <li>Câu hỏi thường gặp</li>
              <li>Chính sách đổi hàng</li>
              <li>Chính sách bảo hành</li>
              <li>Chính sách thanh toán</li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h5 className='fw-bold font'>HỆ THỐNG CỬA HÀNG</h5>
            <ul className='font'>
              <li>Hồ Chí Minh</li>
              <li>Hải Phòng</li>
              <li>Đà Nẵng</li>
              <li>Hà Nội</li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h5 className='fw-bold font'>GIAO HÀNG</h5>
            <ul className='font'>
              <li>VNPost</li>
              <li>Giao hàng tiết kiệm</li>
              <li>Grab</li>
              <li>Gojek</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
