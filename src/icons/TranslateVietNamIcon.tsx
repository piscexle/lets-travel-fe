import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const TranslateVietNamSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <g clipPath="url(#clip0_1014_1092)">
      <path
        d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
        fill="#D80027"
      />
      <path
        d="M14 7.30444L15.5109 11.9545H20.4003L16.4447 14.8283L17.9556 19.4784L14 16.6045L10.0445 19.4784L11.5554 14.8283L7.59985 11.9545H12.4891L14 7.30444Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_1014_1092">
        <rect width="28" height="28" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const TranslateVietNamIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={TranslateVietNamSvg} {...props} />
);

export default TranslateVietNamIcon;
