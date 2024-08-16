'use client';

import Banner from '@/components/Banner/Banner';
import { NextArrow, PrevArrow } from '@/components/Carousel/ArrowCarousel';
import UploadIcon from '@/icons/UploadIcon';
import { MainClient } from '@/layouts/MainClient';
import { useAppDispatch } from '@/store';
import { getInfoBanner } from '@/store/banner/banner.action';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Form, Input, Radio, Row, Space, Upload, UploadFile } from 'antd';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

const carouselBannerSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplaySpeed: 5000,
  autoplay: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Career = () => {
  const dispatch = useAppDispatch();
  const t = useTranslations('common');
  const [formRef] = Form.useForm();
  const [fileCV, setFileCV] = useState<UploadFile>({ uid: '', name: '' });
  const onRemove = () => {
    setFileCV({ uid: '', name: '' });
  };

  useEffect(() => {
    dispatch(getInfoBanner({ menuKey: 'CAREER' }));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(
  //     getListCareer({
  //       page: parameters.page as number,
  //       order: 'ASC',
  //       searchKey: '',
  //       take: parameters.take as number,
  //     })
  //   );
  //   const queryString = cleanAndSerializeQueryParams(parameters);
  //   router.push(`${pathname}?${queryString}`);
  // }, [parameters, router, dispatch, pathname]);

  // const onChange: PaginationProps['onChange'] = (pageNumber: number) => {
  //   setParameters((prev) => ({
  //     ...prev,
  //     page: pageNumber,
  //   }));
  // };

  const infoBannerContact = [
    {
      id: '1',
      image: '/images/bannerHG.png',
      title: 'Hà Giang',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet',
      buttonLink: 'https://shopee.vn/babyhousevietnam',
    },
    {
      id: '2',
      image: '/images/bannerHG.png',
      title: 'Hà Tinh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet',
      buttonLink: 'https://shopee.vn',
    },
  ];

  return (
    <MainClient>
      {infoBannerContact.length > 0 && (
        <Banner
          loading
          data={
            infoBannerContact?.map((item: any) => ({
              id: uuidv4(),
              image: item?.image,
              title: item?.title,
              description: item?.description,
              // buttonLink: item?.buttonLink,
              width: 3000,
              height: 700,
            })) || []
          }
          carouselBannerSettings={carouselBannerSettings}
        />
      )}
      <div className="container">
        <div className="wrapper-contact">
          <Form layout="vertical" form={formRef}>
            <Row gutter={{ xl: 30, md: 20 }}>
              <Col span={24}>
                <Form.Item
                  hasFeedback
                  label={t('labelAskYou')}
                  rules={[{ required: true, message: t('ruleFormAskYou') }]}
                >
                  <Radio.Group>
                    <Radio value="traveler"> {t('itemTraveler')} </Radio>
                    <Radio value="partnership"> {t('itemPartnership')} </Radio>
                    <Radio value="job request / Free consultation">{t('itemJobRequest')}</Radio>
                    <Radio value="other"> {t('itemOther')} </Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  hasFeedback
                  label={t('labelInterest')}
                  rules={[{ required: true, message: t('ruleFormInterest') }]}
                >
                  <Radio.Group>
                    <Radio value="Register as a Service Provider">{t('itemRegisterService')}</Radio>
                    <Radio value="Suggestion"> {t('itemSuggestion')} </Radio>
                    <Radio value="technical issue"> {t('itemTechnicalIssue')} </Radio>
                    <Radio value="other"> {t('itemOther')} </Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col xl={12} md={12} sm={24} xs={24}>
                <Row>
                  <Col span={24}>
                    <Form.Item
                      hasFeedback
                      label={t('labelName')}
                      name="fullName"
                      className="label-form"
                      rules={[{ required: true, message: t('ruleFormApplyJobFullName') }]}
                    >
                      <Input
                        className="input-form"
                        placeholder={t('placeholderFormApplyJobName')}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      hasFeedback
                      label={t('labelBusinessName')}
                      name="email"
                      className="label-form"
                    >
                      <Input
                        className="input-form"
                        placeholder={t('placeholderFormApplyJobEmail')}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      hasFeedback
                      label={t('labelEmail')}
                      name="email"
                      className="label-form"
                      rules={[{ required: true, message: t('ruleFormApplyJobEmail') }]}
                    >
                      <Input
                        className="input-form"
                        placeholder={t('placeholderFormApplyJobEmail')}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      hasFeedback
                      label={t('labelFormApplyJobMessage')}
                      name="message"
                      className="label-form"
                    >
                      <Input.TextArea
                        className="input-message-form"
                        placeholder={t('placeholderFormApplyJobMessage')}
                        // maxLength={100}
                        rows={3}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col xl={12} md={12} sm={24} xs={24}>
                <Row>
                  <Col span={24}>
                    <Form.Item
                      hasFeedback
                      label={t('labelPhone')}
                      name="phoneNumber"
                      className="label-form"
                      rules={[{ required: true, message: t('ruleFormApplyJobPhoneNumber') }]}
                    >
                      <Input
                        className="input-form"
                        placeholder={t('placeholderFormApplyJobPhone')}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      hasFeedback
                      label={t('labelFormApplyJobFile')}
                      name="cvFile"
                      className="label-form"
                    >
                      {!fileCV.name ? (
                        <Upload fileList={[fileCV]}>
                          <div className="upload-form">
                            <UploadIcon />
                            <p>{t('placeholderFormApplyJobFile')}</p>
                          </div>
                        </Upload>
                      ) : (
                        <Row>
                          <Col span={24}>
                            <Flex className="block-file" align="center" justify="space-between">
                              <a href={fileCV?.url} target="_blank" rel="noopener noreferrer">
                                {fileCV?.name}
                              </a>
                              <DeleteOutlined onClick={onRemove} />
                            </Flex>
                          </Col>
                        </Row>
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={24} className="text-privacy">
                {t('textPrivacy')}
              </Col>
              <Col span={24}>
                <Form.Item>
                  <Space>
                    <Button type="primary">{t('itemSubmit')}</Button>
                    <Button htmlType="reset">{t('itemReset')}</Button>
                  </Space>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </MainClient>
  );
};

export default Career;
