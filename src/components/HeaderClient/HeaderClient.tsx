'use client';

import { DownOutlined, LoginOutlined, MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Col, Drawer, Flex, Menu, Popover, Row, Space } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter as NextRouter } from '@/navigation';
import './header.scss';
import { useAppDispatch, useAppSelector } from '@/store';
import { getInfoBusiness } from '@/store/business/business.action';
import { createRGBDataURL } from '@/utils/createRGBDataURL';
import FlyIcon from '@/icons/FlyIcon';
import HomeIcon from '@/icons/HomeIcon';
import { AppConfirmModalEnum, NotificationTypeEnum } from '@/config/constant';
import { setTokenAuth, setUserAuth } from '@/store/auth/auth.reducer';
import { createToast } from '@/store/notification/notification.reducer';
import { v4 as uuidv4 } from 'uuid';
import { signOut } from 'next-auth/react';
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import AppConfirmModal from '../AppConfirmModal/AppConfirmModal';

const HeaderClient = () => {
  const dispatch = useAppDispatch();
  const t = useTranslations('common');
  const router = useRouter();
  const nextRouter = NextRouter();
  // const [current, setCurrent] = useState('/');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const [info, setInfo] = useState<any>({});
  const { user, token, typeLogin } = useAppSelector((state) => state.authSlice);
  const [showConfirmLogoutVisible, setShowConfirmLogoutVisible] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const onLogoutClicked = () => {
    setShowConfirmLogoutVisible(true);
  };

  useEffect(() => {
    if (Object.values(token).every((value) => value !== '')) {
      setInfo({
        ...user,
        ...token,
      });
    } else {
      setInfo({});
    }
  }, [user, token]);

  const menuItems = useMemo(
    () => [
      {
        label: <Link href="/">{t('itemHome')}</Link>,
        key: `/${locale}`,
      },
      {
        label: (
          <span>
            {t('serviceHome')} <DownOutlined />
          </span>
        ),
        key: '/introduce',
        onClick: () => {
          setOpen(false);
          // setCurrent(`introduce`);
        },
        children: [
          {
            label: <span className="item-introduce">{t('itemTransport')}</span>,
            key: 'about-us',
            icon: <FlyIcon />,
            onClick: () => {
              setOpen(false);
              // setCurrent('/introduce');
              router.push('/about-us');
            },
          },
          {
            label: <span className="item-introduce">{t('itemStay')}</span>,
            key: 'structure',
            icon: <HomeIcon />,
            onClick: () => {
              setOpen(false);
              // setCurrent('/introduce');
              router.push('/organizational-chart');
            },
          },
        ],
      },
      {
        label: <Link href="/news">{t('itemExperiences')}</Link>,
        key: `/${locale}/news`,
      },
      {
        label: <Link href="/projects">{t('itemPlaceToStay')}</Link>,
        key: `/${locale}/projects`,
      },
      {
        label: <Link href="/contact">{t('contactHome')}</Link>,
        key: `/${locale}/contact`,
      },
    ],
    [t, setOpen, router]
  );

  return (
    <header className={`wrapper-header-client ${isScrolled ? 'active' : ''}`}>
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
                <Image
                  className="nav-header-logo"
                  src="/images/logo.svg"
                  alt="logo"
                  width={162}
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
                      width={50}
                      height={50}
                      src="/images/logo.svg"
                      alt="Lets Travel"
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
              <div>
                {info.accessToken ? (
                  <Popover
                    content={
                      <Space direction="vertical">
                        <Button
                          href="/profile?page=my-details"
                          type="link"
                          style={{ width: '180px', color: '#066156' }}
                        >
                          {t('itemProfile')}
                        </Button>

                        <Button
                          onClick={() => onLogoutClicked()}
                          type="primary"
                          style={{ width: '180px' }}
                        >
                          {t('itemLogout')}
                        </Button>
                      </Space>
                    }
                  >
                    <Space>
                      <div>
                        <Image
                          src={user?.avatar ? user.avatar : '/images/avatar.jpg'}
                          alt="Lets travel"
                          fill
                          placeholder="blur"
                          blurDataURL={createRGBDataURL(199, 199, 199)}
                          sizes="100%"
                        />
                      </div>
                      <p>{info?.lastName || 'kẻ mộng mơ'}</p>
                    </Space>
                  </Popover>
                ) : (
                  <Link href="/dang-nhap">
                    <Space>
                      <Button className="btn-login">
                        <LoginOutlined /> {t('itemLogin')}
                      </Button>
                    </Space>
                  </Link>
                )}
              </div>
            </div>
          </Col>
        </Row>
        <AppConfirmModal
          isVisible={showConfirmLogoutVisible}
          type={AppConfirmModalEnum.warning}
          title={t('itemLogout')}
          okTextButton={t('itemLogout')}
          onCancel={() => {
            setShowConfirmLogoutVisible(false);
          }}
          onOk={async () => {
            if (typeLogin === 'google') {
              signOut({ redirect: false }).then(async () => {
                const dispatchPromises = [
                  // dispatch(clearShoppingCart()),
                  (window.location.href = '/'),
                  dispatch(
                    setTokenAuth({
                      expiresIn: 0,
                      accessToken: '',
                      refreshToken: '',
                    })
                  ),
                  dispatch(
                    setUserAuth({
                      id: '',
                      createdAt: '',
                      updatedAt: '',
                      deletedAt: null,
                      role: '',
                      email: '',
                      firstName: null,
                      lastName: null,
                      avatar: '',
                      phoneNumber: '',
                    })
                  ),
                ];

                await Promise.all([...dispatchPromises]);
              });
            } else {
              await dispatch(
                setUserAuth({
                  id: '',
                  createdAt: '',
                  updatedAt: '',
                  deletedAt: null,
                  role: '',
                  email: '',
                  firstName: null,
                  lastName: null,
                  avatar: '',
                  phoneNumber: '',
                  // permission: {
                  //   id: '',
                  //   createdAt: '',
                  //   updatedAt: '',
                  //   deletedAt: '',
                  //   groupName: '',
                  //   permission: [],
                  //   users: [],
                  // },
                })
              );
              await dispatch(
                setTokenAuth({
                  expiresIn: 0,
                  accessToken: '',
                  refreshToken: '',
                })
              );
              await dispatch(
                createToast({
                  id: uuidv4(),
                  status: NotificationTypeEnum.success,
                  message: 'Đăng xuất thành công',
                  description: '',
                })
              );
              setShowConfirmLogoutVisible(false);
              router.push('/', { scroll: false });
            }
          }}
        />
      </div>
    </header>
  );
};

export default HeaderClient;
