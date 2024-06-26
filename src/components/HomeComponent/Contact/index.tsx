import React, { useEffect } from 'react';
import './style.scss';
import HeaderRectangle from '@/components/SectionHead/SectionHead';
import { useLocale, useTranslations } from 'next-intl';
import { Flex } from 'antd';
import PhoneIcon from '@/icons/PhoneIcon';
import GmailIcon from '@/icons/GmailIcon';
import FacebookIcon from '@/icons/FacebookIcon';
import EmailIcon from '@/icons/EmailIcon';
import { useAppDispatch, useAppSelector } from '@/store';
import { getInfoBusiness } from '@/store/business/business.action';

const Contact = () => {
  const { infoBusiness } = useAppSelector((state) => state.businessSlice);
  const dispatch = useAppDispatch();
  const t = useTranslations('common');
  const locale = useLocale();
  useEffect(() => {
    dispatch(getInfoBusiness());
  }, [dispatch]);
  return (
    <div className="home-contact">
      <HeaderRectangle title={t('itemContact')} titleIsLeft={false} miniTitle="hihi" />
      <div className="contact-info">
        <div className="container-info">
          <Flex vertical align="center">
            <h3>{t('textInfo')}</h3>
            <div className="text-info">
              <div className="block-mobile">
                <Flex vertical>
                  <Flex className="text-margin">
                    <PhoneIcon />
                    <p>{infoBusiness?.phoneNumber}</p>
                  </Flex>
                  <Flex>
                    <GmailIcon />
                    <p>{infoBusiness?.gmail}</p>
                  </Flex>
                </Flex>
              </div>
              <div>
                <Flex vertical>
                  <Flex className="text-margin">
                    <FacebookIcon />
                    <a href={infoBusiness.facebook} target="_blank" rel="noreferrer">
                      chuyendoisopnl.ltd
                    </a>
                  </Flex>
                  <Flex>
                    <EmailIcon />
                    <p>{infoBusiness.telegram}</p>
                  </Flex>
                </Flex>
              </div>
            </div>
            <p className="text-desc">{infoBusiness?.informationText?.[locale]}</p>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Contact;
