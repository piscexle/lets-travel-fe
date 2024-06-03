import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const SendSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M22.8719 6.59824L12.9524 9.90476C9.19235 11.1581 7.31234 11.7848 7.04903 12.8559C6.97194 13.1695 6.97194 13.4971 7.04903 13.8108C7.31234 14.8819 9.19235 15.5086 12.9524 16.7619C13.7022 17.0118 14.0771 17.1368 14.3677 17.3795C14.4593 17.4561 14.5439 17.5407 14.6204 17.6323C14.8632 17.9228 14.9881 18.2978 15.2381 19.0476C16.4914 22.8076 17.1181 24.6876 18.1892 24.951C18.5028 25.028 18.8305 25.028 19.1441 24.951C20.2152 24.6876 20.8419 22.8076 22.0952 19.0476L25.4017 9.12106C25.9537 7.47227 26.2296 6.64438 25.7926 6.20736C25.3556 5.77034 24.5277 6.04631 22.8719 6.59824Z"
      fill="#FFE450"
      stroke="#B8BC0A"
    />
  </svg>
);

const SendIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={SendSvg} {...props} />
);

export default SendIcon;
