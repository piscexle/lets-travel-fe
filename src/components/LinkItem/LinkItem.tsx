import React, { useEffect, useState } from 'react';
import './style.scss';
import Link from 'next/link';
import FacebookColorIcon from '@/icons/FacebookColorIcon';
import ZaloColorIcon from '@/icons/ZaloColorIcon';
import TiktokColorIcon from '@/icons/TiktokColorIcon';
import GoogleMapsColorIcon from '@/icons/GoogleMapsColorIcon';
import YoutubeIcon from '@/icons/YoutubeIcon';
import LinkedinColorIcon from '@/icons/LinkedinColorIcon';
import QrCodeColorIcon from '@/icons/QrCodeColorIcon';
import WebsiteColorIcon from '@/icons/WebsiteColorIcon';
import { Image, Modal } from 'antd';
import PortfolioColorIcon from '@/icons/PortfolioColorIcon';
import { isMobile } from 'react-device-detect';

interface Props {
  link: string;
  titleBtn: string;
  type:
    | 'facebook'
    | 'zalo'
    | 'tiktok'
    | 'youtube'
    | 'address'
    | 'linkedin'
    | 'qr'
    | 'website'
    | 'portfolio';
  imageQrCode?: string;
}

const LinkItem = ({ link, titleBtn, type, imageQrCode }: Props) => {
  const [isModalQrCodeOpen, setIsModalQrCodeOpen] = useState(false);
  const [qrCodeZaloOpen, setQrCodeZaloOpen] = useState<string>('');
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  useEffect(() => {
    setIsMobileState(isMobile);
  }, [isMobile]);

  const getIconFromType = (typeStr: string) => {
    switch (typeStr) {
      case 'facebook':
        return <FacebookColorIcon />;
      case 'zalo':
        return <ZaloColorIcon />;
      case 'tiktok':
        return <TiktokColorIcon />;
      case 'youtube':
        return <YoutubeIcon />;
      case 'linkedin':
        return <LinkedinColorIcon />;
      case 'qr':
        return <QrCodeColorIcon />;
      case 'website':
        return <WebsiteColorIcon />;
      case 'address':
        return <GoogleMapsColorIcon />;
      case 'portfolio':
        return <PortfolioColorIcon />;
      default:
        return <FacebookColorIcon />;
    }
  };
  // eslint-disable-next-line no-nested-ternary
  return type === 'qr' ? (
    <div
      className="wrapper-link-item"
      aria-hidden
      onClick={() => {
        setIsModalQrCodeOpen(true);
      }}
    >
      <div className="wrapper-link-item-icon">{getIconFromType(type)}</div>
      <p>{titleBtn}</p>
      <Modal
        title=""
        open={isModalQrCodeOpen}
        onOk={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsModalQrCodeOpen(false);
        }}
        onCancel={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsModalQrCodeOpen(false);
        }}
        centered
        footer={null}
      >
        <Image src={imageQrCode} alt="" preview={false} />
      </Modal>
    </div>
  ) : isMobileState && type === 'zalo' ? (
    <div
      className="wrapper-link-item"
      aria-hidden
      onClick={() => {
        setQrCodeZaloOpen(imageQrCode || '');
      }}
    >
      <div className="wrapper-link-item-icon">{getIconFromType(type)}</div>
      <p>{titleBtn}</p>
      <Modal
        title=""
        open={qrCodeZaloOpen.length > 0}
        onOk={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setQrCodeZaloOpen('');
        }}
        onCancel={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setQrCodeZaloOpen('');
        }}
        centered
        footer={null}
      >
        <Image src={imageQrCode} alt="" preview={false} width={300} height={300} />
      </Modal>
    </div>
  ) : (
    <Link href={link} target="_blank" prefetch={false} className="wrapper-link-item">
      <div className="wrapper-link-item-icon">{getIconFromType(type)}</div>
      <p>{titleBtn}</p>
    </Link>
  );
};

export default LinkItem;
