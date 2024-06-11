import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const HomeSvg = () => (
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.274461 4.51435C0 5.03491 0 5.62713 0 6.81155V10.5106C0 12.1555 0 12.978 0.585786 13.489C1.11733 13.9526 1.94285 13.9956 3.50001 13.9996V9.63832C3.50001 8.48036 4.52807 7.76598 5.50001 7.76598H8.50001C9.47194 7.76598 10.5 8.48036 10.5 9.63832V13.9996C12.0572 13.9956 12.8827 13.9526 13.4142 13.489C14 12.978 14 12.1555 14 10.5106V6.81155C14 5.62713 14 5.03491 13.7255 4.51435C13.4511 3.9938 12.9356 3.60839 11.9047 2.83758L10.9047 2.08986C9.04143 0.696619 8.10977 0 7 0C5.89023 0 4.95857 0.696619 3.09525 2.08986L2.09525 2.83758C1.06437 3.60839 0.548923 3.9938 0.274461 4.51435ZM8.50001 14V9.76598H5.50001V14H8.50001Z"
      fill="#222222"
    />
  </svg>
);

const HomeIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HomeSvg} {...props} />
);

export default HomeIcon;
