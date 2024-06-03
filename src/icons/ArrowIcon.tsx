import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ArrowSvg = () => (
  <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM2.80688e-09 9L25 9L25 7L-2.80688e-09 7L2.80688e-09 9Z"
      fill="black"
    />
  </svg>
);

const ArrowIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ArrowSvg} {...props} />
);

export default ArrowIcon;
