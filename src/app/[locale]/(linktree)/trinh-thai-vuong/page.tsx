'use client';

import React from 'react';
import '../style.scss';
import Image from 'next/image';
import { createRGBDataURL } from '@/utils/createRGBDataURL';
import LinkItem from '@/components/LinkItem/LinkItem';
import FooterLink from '@/components/FooterLink/FooterLink';
import { Col, Row } from 'antd';

const ProfilePage = () => {
  // sdt thứ 2: 0944354688
  const contactUs = (type: string) => {
    if (type === 'email') {
      const subject = encodeURIComponent('Liên hệ');
      window.location.href = `mailto:phuclamvuongdng@gmail.com?subject=${subject}`;
    } else {
      window.location.href = 'tel:0795515518';
    }
  };
  return (
    <div className="container-link-tree">
      <div className="wrapper-profile">
        <div className="wrapper-profile-header">
          <div className="wrapper-profile-header-avatar">
            <Image
              src="/images/phuc-lam-vuong-avatar.jpg"
              fill
              placeholder="blur"
              blurDataURL={createRGBDataURL(199, 199, 199)}
              alt="Trịnh Thái Vương"
              sizes="100%"
            />
          </div>
          <h1 className="wrapper-profile-header-name">Trịnh Thái Vương</h1>
          <p className="wrapper-profile-header-company">
            Công Ty TNHH Dịch Vụ Thương Mại & Sản Xuất Phúc Lâm Vương
          </p>
          <p className="wrapper-profile-header-desc wrapper-profile-header-desc-customize">
            Chức vụ: Giám đốc
          </p>
        </div>
        <div className="wrapper-profile-contact">
          <div className="wrapper-profile-contact-action">
            <button type="button" onClick={() => contactUs('phone')}>
              <span>☎️</span>
              <span>Gọi/Zalo</span>
            </button>
            <button type="button" onClick={() => contactUs('email')}>
              <span>📪</span>
              <span>Email cho tôi</span>
            </button>
          </div>
        </div>
        <Row gutter={[16, 16]}>
          {/* <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://zalo.me/+84932702486"
              titleBtn="Zalo"
              type="zalo"
              imageQrCode="/images/ngoc-qr.jpg"
            />
          </Col> */}
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.facebook.com/trinhthaivuong1989"
              titleBtn="Facebook cá nhân"
              type="facebook"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.facebook.com/phuclamvuongdanang"
              titleBtn="Fanpage Công ty"
              type="facebook"
            />
          </Col>
          {/* <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://pnlsoftware.com.vn/"
              titleBtn="Website công ty"
              type="website"
            />
          </Col> */}
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem link="https://www.tiktok.com/@plv_lighting" titleBtn="Tiktok" type="tiktok" />
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.google.com/maps/place/648+T%C3%B4n+%C4%90%E1%BA%A3n,+Ho%C3%A0+Ph%C3%A1t,+C%E1%BA%A9m+L%E1%BB%87,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.0345539,108.1819629,17z/data=!3m1!4b1!4m6!3m5!1s0x314219774b19898b:0x8745f2cdf80c65ea!8m2!3d16.0345539!4d108.1845378!16s%2Fg%2F11lh3w95yb?entry=ttu"
              titleBtn="Địa chỉ"
              type="address"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.youtube.com/channel/UCywcVHxQwNShGBTHzvth-LA"
              titleBtn="Youtube"
              type="youtube"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="#"
              titleBtn="QR của tôi"
              type="qr"
              imageQrCode="/images/trinh-thai-vuong-qr.png"
            />
          </Col>
        </Row>
        <FooterLink />
      </div>
    </div>
  );
};

export default ProfilePage;
