'use client';

import { MenuOutlined } from '@ant-design/icons';
import NextImage from 'next/image';
import { Button, Col, Drawer, Flex, Image, Menu, Row } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import csx from 'classnames';
import { useLocale, useTranslations } from 'next-intl';
import { Link, useRouter as NextRouter } from '@/navigation';
import './header.scss';
import AboutUsIcon from '@/icons/AboutUsIcon';
import StructureIcon from '@/icons/StructureIcon';
import { useAppDispatch } from '@/store';
import { getInfoBusiness } from '@/store/business/business.action';
import SelectLanguage from '../SelectLanguage/SelectLanguage';

const HeaderClient = () => {
  const dispatch = useAppDispatch();
  const t = useTranslations('common');
  const router = useRouter();
  const nextRouter = NextRouter();
  // const [current, setCurrent] = useState('/');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    dispatch(getInfoBusiness());
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleChangeLanguage = () => {
    if (pathname.includes('en')) {
      nextRouter.push(pathname.replace('en', '') as '/', { locale: 'vi' });
    } else if (pathname.includes('vi')) {
      nextRouter.push(pathname.replace('vi', '') as '/', { locale: 'en' });
    }
  };

  const menuItems = useMemo(
    () => [
      {
        label: t('itemIntroduce'),
        key: '/introduce',
        onClick: () => {
          setOpen(false);
          // setCurrent(`introduce`);
        },
        children: [
          {
            label: <span className="item-introduce">{t('teamHome')}</span>,
            key: 'about-us',
            icon: <AboutUsIcon />,
            onClick: () => {
              setOpen(false);
              // setCurrent('/introduce');
              router.push('/about-us');
            },
          },
          {
            label: <span className="item-introduce">{t('itemStructure')}</span>,
            key: 'structure',
            icon: <StructureIcon />,
            onClick: () => {
              setOpen(false);
              // setCurrent('/introduce');
              router.push('/organizational-chart');
            },
          },
        ],
      },
      {
        label: <Link href="/news">{t('itemNews')}</Link>,
        key: `/${locale}/news`,
      },
      {
        label: <Link href="/projects">{t('workHome')}</Link>,
        key: `/${locale}/projects`,
      },
      {
        label: <Link href="/career">{t('careerHome')}</Link>,
        key: `/${locale}/career`,
      },
    ],
    [t, setOpen, router]
  );

  return (
    <header className={csx('wrapper-header-client')}>
      <div className="container">
        <Row className="row-container">
          <Col
            xl={{ span: 4, offset: 0 }}
            xs={{ span: 6, offset: 0 }}
            sm={{ span: 6, offset: 0 }}
            md={{ span: 3, offset: 0 }}
          >
            <Flex align="center" className="h-100">
              <Link href="/">
                <NextImage
                  className="nav-header-logo"
                  src="/images/pnl-logo.png"
                  alt="logo"
                  width={77}
                  height={77}
                  quality={100}
                />
              </Link>
            </Flex>
          </Col>
          <Col
            className="col-menu"
            xl={{ span: 20, offset: 0 }}
            xs={{ span: 18, offset: 0 }}
            sm={{ span: 18, offset: 0 }}
            md={{ span: 21, offset: 0 }}
          >
            <div className="nav-header-client">
              <Menu
                mode="horizontal"
                selectedKeys={[pathname]}
                items={[...menuItems]}
                style={{ margin: 0 }}
              />
              <div className="wrapper-menu-mobile">
                <Button type="primary" onClick={showDrawer}>
                  <MenuOutlined />
                </Button>

                <Drawer
                  title={
                    <Image
                      preview={false}
                      width={50}
                      height={50}
                      src="/images/pnl-logo.png"
                      alt="PNL"
                      onClick={() => {
                        setOpen(false);
                        router.push('/');
                      }}
                    />
                  }
                  open={open}
                  key="Menu"
                  placement="right"
                  onClose={onClose}
                  className="pnl-drawer"
                >
                  <Menu mode="inline" items={menuItems} />
                </Drawer>
              </div>
              <div className="translation">
                <SelectLanguage
                  value={locale}
                  onChange={() => {
                    handleChangeLanguage();
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default HeaderClient;
