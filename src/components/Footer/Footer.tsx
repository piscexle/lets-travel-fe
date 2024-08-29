import React from 'react';
import { Col, Row, Image, Flex } from 'antd';
import './footer.scss';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import YoutubeIcon from '@/icons/YoutubeIcon';
import ZaloIcon from '@/icons/ZaloIcon';
import TiktokIcon from '@/icons/TiktokIcon';
import { useAppSelector } from '@/store';
import { isURLValid } from '@/utils/string.helper';

const FooterClient = () => {
  const router = useRouter();
  const t = useTranslations('common');
  const { infoBusiness } = useAppSelector((state) => state.businessSlice);

  return (
    <footer className="wrapper-footer">
      <div className="container">
        <div className="footer-container">
          <Row gutter={10} className="wrapper-footer-row">
            <Col
              xxl={{ span: 9, order: 1 }}
              xl={{ span: 9, order: 1 }}
              lg={{ span: 9, order: 1 }}
              md={{ span: 12, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 24, order: 1 }}
            >
              <Flex vertical className="wrapper-footer-map">
                <h4 className="footer-title">{t('footerTextMap')}</h4>
                <iframe
                  title="Let's travel"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=615%20Nguy%E1%BB%85n%20L%C6%B0%C6%A1ng%20B%E1%BA%B1ng,%20H%C3%B2a%20Hi%E1%BB%87p%20Nam,%20Li%C3%AAn%20Chi%E1%BB%83u,%20%C4%90%C3%A0%20N%E1%BA%B5ng,%20Vi%E1%BB%87t%20Nam+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps tracker sport</a>
                </iframe>
                <ul>
                  <li>{t('footerTextCopyright')}</li>
                  <li>{t('footerTextLicense')}</li>
                </ul>
              </Flex>
            </Col>
            <Col
              xxl={{ span: 9, order: 2 }}
              xl={{ span: 9, order: 2 }}
              lg={{ span: 7, order: 2 }}
              md={{ span: 12, order: 2 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 24, order: 2 }}
            >
              <Flex vertical className="wrapper-footer-link">
                <Flex className="wrapper-footer-link-container">
                  <Flex vertical className="wrapper-footer-link-container-page">
                    <h4 className="footer-title">{t('teamHome')}</h4>
                    <ul>
                      <li onClick={() => router.push('/')} aria-hidden="true">
                        <span>{t('itemIntroduce')}</span>
                      </li>
                      <li onClick={() => router.push('/news')} aria-hidden="true">
                        <span>{t('itemNews')}</span>
                      </li>
                      <li onClick={() => router.push('/projects')} aria-hidden="true">
                        <span>{t('project')}</span>
                      </li>
                      <li onClick={() => router.push('/career')} aria-hidden="true">
                        <span>{t('careerHome')}</span>
                      </li>
                    </ul>
                  </Flex>
                  <Flex vertical className="wrapper-footer-link-container-social">
                    <h4 className="footer-title">{t('footerTextLink')}</h4>
                    <Flex className="icons-social">
                      <span
                        onClick={() => {
                          if (isURLValid(infoBusiness.youtube)) {
                            window.open(infoBusiness.youtube, '_blank');
                          }
                        }}
                        aria-hidden="true"
                      >
                        <YoutubeIcon />
                      </span>
                      <span
                        onClick={() => {
                          if (infoBusiness.zalo) {
                            const zaloLink = `${infoBusiness.zalo}`;
                            window.open(
                              `https://zalo.me/${zaloLink?.replaceAll(' ', '')}`,
                              '_blank'
                            );
                          }
                        }}
                        aria-hidden="true"
                      >
                        <ZaloIcon />
                      </span>
                      <span
                        onClick={() => {
                          if (isURLValid(infoBusiness.tiktok)) {
                            window.open(infoBusiness.tiktok, '_blank');
                          }
                        }}
                        aria-hidden="true"
                      >
                        <TiktokIcon />
                      </span>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex className="flex-taxcode">
                  <ul className="info-taxcode">
                    <li>{t('footerTextCopyright')}</li>
                    <li>{t('footerTextLicense')}</li>
                    <li>{`${t('footerTaxCode')}: 0402206057`}</li>
                    <li>Power by IC Technology</li>
                  </ul>
                </Flex>
              </Flex>
            </Col>
            <Col
              xxl={{ span: 6, order: 3 }}
              xl={{ span: 6, order: 3 }}
              lg={{ span: 7, order: 3 }}
              md={{ span: 12, order: 3 }}
              sm={{ span: 12, order: 3 }}
              xs={{ span: 24, order: 3 }}
              className="footer-fb"
            >
              <Flex vertical className="footer-fb-content" justify="space-between">
                <div className="fb-pnl">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/profile.php?id=61564505001107%2Ffacebook&height=300&small_header=false&adapt_container_width=true&show_facepile=true&appId=100008118336402"
                    width="100%"
                    height="100%"
                    title="web"
                    frameBorder="0"
                    allow="autoplay"
                    scrolling="no"
                  />
                </div>
                <Flex className="flex-taxcode-mobile">
                  <ul className="info-taxcode">
                    <li>{t('footerTextCopyright')}</li>
                    <li>{t('footerTextLicense')}</li>
                    <li>{`${t('footerTaxCode')}: 0402206057`}</li>
                    <li>Power by IC Technology</li>
                  </ul>
                </Flex>
                <Image src="/images/bo-cong-thuong.webp" preview={false} alt="bct" />
              </Flex>
            </Col>
          </Row>
        </div>
      </div>
      <div className="wrapper-footer-all-right">
        <p>
          Copyright @ 2024 Lets travel - Designed and developed by{' '}
          <a href="https://www.facebook.com/profile.php?id=61564505001107">IC Technology</a>. All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterClient;
