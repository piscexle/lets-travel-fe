'use client';

import React from 'react';
import '../style.scss';
import Image from 'next/image';
import { createRGBDataURL } from '@/utils/createRGBDataURL';
import LinkItem from '@/components/LinkItem/LinkItem';
import FooterLink from '@/components/FooterLink/FooterLink';
import { Col, Row } from 'antd';

const ProfilePage = () => {
  const contactUs = (type: string) => {
    if (type === 'email') {
      const subject = encodeURIComponent('Liên hệ');
      window.location.href = `mailto:phule9225@gmail.com?subject=${subject}`;
    } else {
      window.location.href = 'tel:0328814589';
    }
  };
  return (
    <div className="container-link-tree">
      <div className="wrapper-profile">
        <div className="wrapper-profile-header">
          <div className="wrapper-profile-header-avatar">
            <Image
              src="https://res.cloudinary.com/dvv3iwbyz/image/upload/v1710932607/IMG_0009_kq5znm.jpg"
              fill
              placeholder="blur"
              blurDataURL={createRGBDataURL(199, 199, 199)}
              alt="Lê Hữu Phú"
              sizes="100%"
            />
          </div>
          <h1 className="wrapper-profile-header-name">Le Huu Phu</h1>
          <p className="wrapper-profile-header-company">
            PNL Digital Transformation Solutions Company{' '}
          </p>
          <p className="wrapper-profile-header-desc">CTO</p>
        </div>
        <div className="wrapper-profile-contact">
          <div className="wrapper-profile-contact-action">
            <button type="button" onClick={() => contactUs('phone')}>
              <span>☎️</span>
              <span>Call me</span>
            </button>
            <button type="button" onClick={() => contactUs('email')}>
              <span>📪</span>
              <span>Email me</span>
            </button>
          </div>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://zalo.me/+84328814589"
              titleBtn="Zalo"
              type="zalo"
              imageQrCode="/images/phu-qr.jpg"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.facebook.com/lehuuphus"
              titleBtn="Facebook"
              type="facebook"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.linkedin.com/in/lehuuphu"
              titleBtn="Linkedin"
              type="linkedin"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://pnlsoftware.com.vn/"
              titleBtn="Company website"
              type="website"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.google.com/maps/dir//24b+B%C3%ACnh+Th%C3%A1i+4,+H%C3%B2a+Th%E1%BB%8D+%C4%90%C3%B4ng,+C%E1%BA%A9m+L%E1%BB%87,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.0128688,108.2030221,20.71z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31421a258fc33b73:0x81eacb599ddfdde9!2m2!1d108.2028385!2d16.0127828?hl=vi-VN&entry=ttu"
              titleBtn="Address"
              type="address"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.youtube.com/@pnlsoftware"
              titleBtn="Youtube"
              type="youtube"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://85bb6503.my-portfolio-c70.pages.dev/en"
              titleBtn="Portfolio"
              type="portfolio"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="#"
              titleBtn="My QR"
              type="qr"
              imageQrCode="https://res.cloudinary.com/dvv3iwbyz/image/upload/v1710995475/phu_chfhbn.png"
            />
          </Col>
        </Row>
        <FooterLink />
      </div>
    </div>
  );
};

export default ProfilePage;