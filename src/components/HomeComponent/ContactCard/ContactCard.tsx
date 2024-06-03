import React from 'react';
import { Form, Input, Row, Col } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import CustomButton from '@/components/Button/CustomButton';
import { NotificationTypeEnum } from '@/config/constant';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '@/store';
import { LocaleEnum } from '@/store/translation/translation.type';
import './style.scss';
import { useLocale, useTranslations } from 'next-intl';
import { ValueTypeContactWork } from '@/store/contact-work/contact-work.type';
import { contactWorkAction } from '@/store/contact-work/contact-work.action';
import { createToast } from '@/store/notification/notification.reducer';
import SendIcon from '@/icons/SendIcons';

const ContactCardComponent = ({ id }: { id: string }) => {
  const { loading } = useAppSelector((state) => state.contactWorkSlice);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const locale = useLocale();
  const t = useTranslations('common');

  const showToast = (status: NotificationTypeEnum, message: string) => {
    const toast = {
      id: uuidv4(),
      status,
      message,
      description: '',
    };
    dispatch(createToast(toast));
  };
  const onFinish = async (values: ValueTypeContactWork) => {
    const response: any = await dispatch(contactWorkAction(values));
    if (response?.payload?.messageCode) {
      showToast(NotificationTypeEnum.success, t('notiContactSuccess'));
      form.resetFields();
    } else {
      showToast(NotificationTypeEnum.error, t('notiFail'));
    }
  };

  return (
    <div className="contact-card" id={id}>
      <div className="contact-container">
        <div className="contact-card-content">
          <h3>{t('contactHome')}</h3>
          <p>{t('descriptionContact')}</p>

          <div className="contact-form">
            <Form
              className="form-container"
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
              onFinish={onFinish}
            >
              <Row gutter={16}>
                <Col xl={12} md={12} sm={24} xs={24}>
                  <Form.Item
                    name="fullName"
                    label={t('labelName')}
                    rules={[{ required: true, message: t('ruleFormApplyJobFullName') }]}
                  >
                    <Input className="input-name" placeholder={t('placeholderFormApplyJobName')} />
                  </Form.Item>
                </Col>
                <Col xl={12} md={12} sm={24} xs={24}>
                  <Form.Item
                    name="phoneNumber"
                    label={t('labelPhone')}
                    rules={[{ required: true, message: t('ruleFormApplyJobPhoneNumber') }]}
                  >
                    <Input
                      className="input-phone-number"
                      placeholder={t('placeholderFormApplyJobPhone')}
                    />
                  </Form.Item>
                </Col>
                <Col xl={12} md={12} sm={24} xs={24}>
                  <Form.Item
                    name="email"
                    label={t('labelEmail')}
                    rules={[{ required: true, message: t('ruleFormApplyJobEmail') }]}
                  >
                    <Input className="email" placeholder={t('placeholderFormApplyJobEmail')} />
                  </Form.Item>
                </Col>
                <Col xl={12} md={12} sm={24} xs={24}>
                  <Form.Item
                    name="address"
                    label={t('labelAddress')}
                    rules={[{ required: true, message: t('ruleFormApplyJobAddress') }]}
                  >
                    <Input className="input-address" placeholder={t('contactPlaceholderAddress')} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="message" label={t('labelFormApplyJobMessage')}>
                    <TextArea
                      className="input-note"
                      placeholder={t('placeholderFormApplyJobMessage')}
                      rows={4}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <div className="button">
                    <CustomButton
                      className={locale === LocaleEnum.en ? 'btn-style' : 'btn-style-vn'}
                      htmlType="submit"
                      loading={loading}
                    >
                      <SendIcon />
                      <p className="button-text"> {t('contactToWork')}</p>
                    </CustomButton>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactCardComponent;
