import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const FlySvg = () => (
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.60869 6.92575L4.88649 6.68669C2.51735 5.90246 1.33278 5.51035 1.33278 4.788C1.33278 4.06566 2.51735 3.67355 4.88648 2.88932L4.88649 2.88932L10.3981 1.06487C12.0551 0.51639 12.8836 0.242149 13.3197 0.680081C13.7558 1.11801 13.4781 1.94534 12.9227 3.59999L11.0766 9.09971L11.0766 9.09972L11.0766 9.09974C10.292 11.4371 9.89973 12.6058 9.18057 12.6058C8.4614 12.6058 8.06911 11.4371 7.28453 9.09971L7.02786 8.33505L10.721 4.66755C11.1129 4.27839 11.1151 3.64523 10.726 3.25335C10.3368 2.86146 9.70364 2.85925 9.31176 3.24841L5.60869 6.92575Z"
      fill="#222222"
    />
  </svg>
);

const FlyIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={FlySvg} {...props} />
);

export default FlyIcon;
