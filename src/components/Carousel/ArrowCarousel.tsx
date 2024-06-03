import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './style.scss';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      aria-hidden="true"
      className={`wrapper-arrow-carousel ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      aria-hidden="true"
      className={`wrapper-arrow-carousel ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};

export { NextArrow, PrevArrow };
