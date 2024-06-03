import React, { FC, useState } from 'react';
import CustomButton from '@/components/Button/CustomButton';
import { ButtonType, NotificationTypeEnum } from '@/config/constant';
import {
  Button,
  Col,
  Flex,
  Form,
  Image,
  Input,
  Modal,
  Row,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd';
import { v4 as uuidv4 } from 'uuid';
import './style.scss';
import { useTranslations } from 'next-intl';
import { ItemCareer, ValueApply } from '@/store/career/career.type';
import { useAppDispatch, useAppSelector } from '@/store';
import { careerApply } from '@/store/career/career.action';
import { postUploadSingleFileAction } from '@/store/upload/upload.action';
import { encryptCloudMediaKey } from '@/utils/encryptCloudMediaKey';
import { DeleteOutlined } from '@ant-design/icons';
import { createToast } from '@/store/notification/notification.reducer';
import SendIcon from '@/icons/SendIcons';
import UploadIcon from '@/icons/UploadIcon';

export interface Type {
  id: string;
  title: string;
  description: string;
  image: string;
}
interface Props {
  left: boolean;
  data: ItemCareer;
  locale: string;
}

const FormCareer: FC<Props> = ({ left, data, locale }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { load } = useAppSelector((state) => state.careerSlice);
  const dispatch = useAppDispatch();
  const [fileCV, setFileCV] = useState<UploadFile>({ uid: '', name: '' });
  const t = useTranslations('common');
  const [formRef] = Form.useForm();
  const clickApply = () => {
    setIsModalOpen(true);
  };

  const showToast = (status: NotificationTypeEnum, message: string) => {
    const toast = {
      id: uuidv4(),
      status,
      message,
      description: '',
    };
    dispatch(createToast(toast));
  };

  const handleOk = () => {
    formRef
      .validateFields()
      .then(async (values: ValueApply) => {
        const response: any = await dispatch(
          careerApply({ ...values, careerId: data.id, cvFile: fileCV?.url as string })
        );
        if (response.payload?.data) {
          showToast(NotificationTypeEnum.success, t('notiCareerSuccess'));
          setIsModalOpen(false);
          formRef.resetFields();
        } else {
          showToast(NotificationTypeEnum.error, t('notiFail'));
        }
      })
    // .catch((err) => {
    //   showToast(NotificationTypeEnum.error, t('notiFail'));
    //   throw err;
    // });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const props: UploadProps = {
    maxCount: 1,
    multiple: false,
    accept: '.docs, .doc, .pdf',
    async customRequest({ file }) {
      const response = await dispatch(
        postUploadSingleFileAction({
          key: encryptCloudMediaKey(),
          file: file as File,
        })
      );
      setFileCV({
        ...response.payload.data,
        name: response.payload.data.originalname,
        url: response.payload.data.result,
      });
    },
    showUploadList: false,
    fileList: [],
  };

  const onRemove = () => {
    setFileCV({ uid: '', name: '' });
  };

  return (
    <div className="career">
      {left ? (
        <Row className="content-career-body-1">
          <Col md={8} xs={24}>
            <div className="text-career-body-header">
              <div className="text-child-career-body-header">
                <h3>{data?.title?.[locale]}</h3>
                <h5>{data?.description?.[locale]}</h5>
                <Button type="primary" className="btn-apply" onClick={clickApply}>
                  {t('applyCareer')}
                </Button>
              </div>
            </div>
          </Col>
          <Col md={16} xs={24}>
            <Image
              className="image-career-body-header"
              preview={false}
              alt=""
              src={data.thumbnail}
            />
          </Col>
        </Row>
      ) : (
        <Row className="content-career-body-2">
          <Col md={16} xs={24}>
            <Image
              className="image-career-body-center"
              preview={false}
              alt=""
              src={data.thumbnail as string}
            />
          </Col>
          <Col md={8} xs={24}>
            <div className="text-career-body-center">
              <div className="text-child-career-body-center">
                <h3>{data?.title?.[locale]}</h3>
                <h5>{data?.description?.[locale]}</h5>
                <Button type="primary" className="btn-apply" onClick={clickApply}>
                  {t('applyCareer')}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      )}
      <Modal
        className="modal-style"
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="50%"
        footer={
          <div className="footer-modal">
            <CustomButton
              buttonType={ButtonType.PRIMARY}
              className="btn-apply"
              onClick={handleOk}
              loading={load}
            >
              <SendIcon />
              {t('applyCareer')}
            </CustomButton>
          </div>
        }
      >
        <Form layout="vertical" form={formRef}>
          <Row gutter={{ xl: 30, md: 20 }}>
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
                    <Input className="input-form" placeholder={t('placeholderFormApplyJobName')} />
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
                    <Input className="input-form" placeholder={t('placeholderFormApplyJobEmail')} />
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
                    <Input className="input-form" placeholder={t('placeholderFormApplyJobPhone')} />
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
                      <Upload {...props} fileList={[fileCV]}>
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
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default FormCareer;
