import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const YoutubeSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 190"
    className="mdl-js"
    width="32"
    height="25"
  >
    <script />
    <path
      fill="red"
      d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134z"
    />
    <path fill="#fff" d="M102.42 51.224v76.836l66.329-38.418z" />
    <script />
  </svg>
);

const YoutubeIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={YoutubeSvg} {...props} />
);

export default YoutubeIcon;
