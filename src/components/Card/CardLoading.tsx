import React from 'react';
import { Card as CardAnt, Space } from 'antd';
import './style.scss';
import Skeleton from 'react-loading-skeleton';

const CardLoading = () => (
  <CardAnt
    className="wrapper-card"
    hoverable
    cover={
      <div className="wrapper-cart-image">
        <Skeleton />
      </div>
    }
  >
    <div className="wrapper-cart-info">
      <p className="wrapper-cart-info-title">
        <Skeleton count={3} />
      </p>
      <div className="wrapper-cart-info-des">
        <p className="wrapper-cart-info-des-price">
          <Skeleton />
        </p>
        <Space className="wrapper-cart-info-des-heart" size="small">
          <Skeleton />
        </Space>
      </div>
    </div>
  </CardAnt>
);

export default CardLoading;
