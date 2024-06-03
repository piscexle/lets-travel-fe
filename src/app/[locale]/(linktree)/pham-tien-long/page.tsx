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
      window.location.href = `mailto:tienlonglawyer@gmail.com?subject=${subject}`;
    } else {
      window.location.href = 'tel:0936521533';
    }
  };
  return (
    <div className="container-link-tree">
      <div className="wrapper-profile">
        <div className="wrapper-profile-header">
          <div className="wrapper-profile-header-avatar">
            <Image
              src="/images/pham-tien-long-avatar.png"
              fill
              placeholder="blur"
              blurDataURL={createRGBDataURL(199, 199, 199)}
              alt="Phạm Tiến Long"
              sizes="100%"
            />
          </div>
          <h1 className="wrapper-profile-header-name wrapper-profile-header-name-tien-long">
            Thạc sĩ / Luật sư: <br /> Phạm Tiến Long
          </h1>
          <p className="wrapper-profile-header-company">Công ty Luật Toàn Long</p>
          <p className="wrapper-profile-header-desc">Giám đốc</p>
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
              link="https://zalo.me/+84796781017"
              titleBtn="Zalo"
              type="zalo"
              imageQrCode="/images/phuc-qr.jpg"
            />
          </Col> */}
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.facebook.com/luattoanlong/"
              titleBtn="Facebook"
              type="facebook"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem link="https://luattoanlong.vn/" titleBtn="Website công ty" type="website" />
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.tiktok.com/@luattoanlongdn"
              titleBtn="Tiktok"
              type="tiktok"
            />
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.youtube.com/channel/UCKjAggZ2LS_TfFAAUcjG48g"
              titleBtn="Youtube"
              type="youtube"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="#"
              titleBtn="QR của tôi"
              type="qr"
              imageQrCode="/images/pham-tien-long-qr.png"
            />
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.google.com/maps/place/61+Ng.+12+P.+%C4%90%C3%A0o+T%E1%BA%A5n,+C%E1%BB%91ng+V%E1%BB%8B,+Ba+%C4%90%C3%ACnh,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0342468,105.8066756,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab6b320e326b:0x158858aa1ea5cc30!8m2!3d21.0342468!4d105.8092505!16s%2Fg%2F11vqmvkbwp?hl=vi-VN&entry=ttu"
              titleBtn="Trụ sở chính"
              type="address"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.google.com/maps/search/211+Nguy%E1%BB%85n+H%E1%BB%AFu+Th%E1%BB%8D,+Ho%C3%A0+Thu%E1%BA%ADn,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng+-+T%E1%BA%A7ng+3,+211+Nguy%E1%BB%85n+H%E1%BB%AFu+Th%E1%BB%8D,+Ho%C3%A0+Thu%E1%BA%ADn,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng/@16.0432821,108.2077564,17z/data=!3m1!4b1?hl=vi-VN&entry=ttu"
              titleBtn="Chi nhánh Đà Nẵng"
              type="address"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <LinkItem
              link="https://www.google.com/maps/place/290%2F26+%C4%90.+Nam+K%E1%BB%B3+Kh%E1%BB%9Fi+Ngh%C4%A9a,+Ph%C6%B0%E1%BB%9Dng+8,+Qu%E1%BA%ADn+3,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7905034,106.6818932,17z/data=!3m1!4b1!4m6!3m5!1s0x317528d32fb7f957:0x70510b2fd4d515b1!8m2!3d10.7905034!4d106.6844681!16s%2Fg%2F11j0sstqpd?hl=vi-VN&entry=ttu"
              titleBtn="Chi nhánh Hồ Chí Minh"
              type="address"
            />
          </Col>
        </Row>
        <FooterLink />
      </div>
    </div>
  );
};

export default ProfilePage;
