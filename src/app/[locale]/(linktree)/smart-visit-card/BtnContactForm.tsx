import { AppActionEnum } from '@/config/constant';
import { Button, Form, Input, Select, Space } from 'antd';
import React, { useEffect } from 'react';

interface Props {
  value: {
    id: string;
    icon: string;
    title: string;
    value: string;
    index: number;
  };
  type: AppActionEnum;
  handleCancel: () => void;
  onSubmit: (values: any) => void;
}

const BtnContactForm = ({ value, type, handleCancel, onSubmit }: Props) => {
  const [formRef] = Form.useForm();

  useEffect(() => {
    formRef.setFieldsValue({
      icon: value?.icon,
      title: value?.title,
      value: value.value,
    });
  }, [value]);

  const onFinish = (values: any) => {
    onSubmit(values);
  };
  return (
    <Form layout="vertical" form={formRef} onFinish={onFinish}>
      <Form.Item name="icon" label="Tỉnh/Thành phố">
        <Select
          placeholder="Icon"
          options={[
            {
              title: 'Facebook',
              value: 'facebook',
            },
            {
              title: 'Zalo',
              value: 'zalo',
            },
            {
              title: 'Tiktok',
              value: 'tiktok',
            },
            {
              title: 'Youtube',
              value: 'youtube',
            },
            {
              title: 'Linkedin',
              value: 'linkedin',
            },
            {
              title: 'Website',
              value: 'website',
            },
            {
              title: 'Address',
              value: 'address',
            },
            {
              title: 'Portfolio',
              value: 'portfolio',
            },
          ]?.map((item) => ({
            key: item.title,
            value: item.value,
            label: item.title,
          }))}
        />
      </Form.Item>
      <Form.Item
        name="title"
        label="Tiêu đề nút"
        rules={[{ required: true, message: 'Vui lòng nhập tiêu đề nút!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="value"
        label="Liên kết"
        rules={[{ required: true, message: 'Vui lòng nhập liên kết!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Space className="wrapper-footer-admin-btn-space">
          {/* <div> */}
          <Button type="primary" ghost onClick={handleCancel}>
            Huỷ
          </Button>

          <Button type="primary" htmlType="submit">
            {type === AppActionEnum.update ? 'Cập nhật' : 'Thêm mới'}
          </Button>
          {/* </div> */}
        </Space>
      </Form.Item>
    </Form>
  );
};

export default BtnContactForm;
