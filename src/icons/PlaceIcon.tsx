import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const PlaceSvg = () => (
  <svg width="14" height="18" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.72142 22.8695C11.5235 21.8327 18.2845 17.4536 18.2845 10.1103C18.2845 4.52654 14.255 0 9.28448 0C4.31392 0 0.284485 4.52654 0.284485 10.1103C0.284485 17.4536 7.04547 21.8327 8.84755 22.8695C9.12181 23.0273 9.44716 23.0273 9.72142 22.8695ZM9.28452 14.4433C11.4148 14.4433 13.1417 12.5034 13.1417 10.1103C13.1417 7.71729 11.4148 5.77734 9.28452 5.77734C7.15427 5.77734 5.42737 7.71729 5.42737 10.1103C5.42737 12.5034 7.15427 14.4433 9.28452 14.4433Z"
      fill="#FFCB45"
    />
  </svg>
);

const PlaceIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PlaceSvg} {...props} />
);

export default PlaceIcon;
