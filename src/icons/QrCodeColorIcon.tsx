import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const QrCodeColorSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <path d="m100.00244 36h-44a20.02229 20.02229 0 0 0 -20 20v44a20.02229 20.02229 0 0 0 20 20h44a20.02229 20.02229 0 0 0 20-20v-44a20.02229 20.02229 0 0 0 -20-20zm-4 60h-36v-36h36z" />
    <path d="m100.00244 136h-44a20.02229 20.02229 0 0 0 -20 20v44a20.02229 20.02229 0 0 0 20 20h44a20.02229 20.02229 0 0 0 20-20v-44a20.02229 20.02229 0 0 0 -20-20zm-4 60h-36v-36h36z" />
    <path d="m200.00244 36h-44a20.02229 20.02229 0 0 0 -20 20v44a20.02229 20.02229 0 0 0 20 20h44a20.02229 20.02229 0 0 0 20-20v-44a20.02229 20.02229 0 0 0 -20-20zm-4 60h-36v-36h36z" />
    <path d="m148.00244 184a12.0006 12.0006 0 0 0 12-12v-24a12 12 0 0 0 -24 0v24a12.0006 12.0006 0 0 0 12 12z" />
    <path d="m208.00244 152h-12v-4a12 12 0 0 0 -24 0v48h-24a12 12 0 1 0 0 24h36a12.0006 12.0006 0 0 0 12-12v-32h12a12 12 0 0 0 0-24z" />
  </svg>
);

const QrCodeColorIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={QrCodeColorSvg} {...props} />
);

export default QrCodeColorIcon;
