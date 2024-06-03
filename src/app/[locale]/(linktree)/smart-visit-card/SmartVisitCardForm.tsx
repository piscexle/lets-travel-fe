'use client';

import UploadSingleImage from '@/components/UploadSingleImage/UploadSingleImage';
import { AppActionEnum, NotificationTypeEnum } from '@/config/constant';
import { DeleteOutlined, EditOutlined, MenuOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  ColorPicker,
  Divider,
  Flex,
  Form,
  Input,
  Modal,
  Row,
  Space,
  UploadFile,
} from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { handleReorderHelper } from '@/utils/reorder.helper';
import { useAppDispatch } from '@/store';
import { createToast } from '@/store/notification/notification.reducer';
import { postLinkTreeAction } from '@/store/link-tree/link-tree.action';
import Image from 'next/image';
import { createRGBDataURL } from '@/utils/createRGBDataURL';
import LinkItem from '@/components/LinkItem/LinkItem';
import FooterLink from '@/components/FooterLink/FooterLink';
import BtnContactForm from './BtnContactForm';
import './style.scss';

interface CustomPanelProps {
  components: {
    Picker: React.ComponentType<any>; // Replace 'any' with the actual prop type of Picker
    Presets: React.ComponentType<any>; // Replace 'any' with the actual prop type of Presets
  };
}

export interface IListBtn {
  id: string;
  icon: string;
  title: string;
  value: string;
  index: number;
}

interface DataType {
  key: React.Key;
  id: UniqueIdentifier;
  icon: string;
  title: string;
  value: string;
  action: React.ReactNode;
}

interface FormProps {
  typeForm: AppActionEnum;
}

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}

const columns: ColumnsType<DataType> = [
  {
    key: 'sort',
    width: 20,
  },
  {
    title: 'STT',
    width: 20,
    dataIndex: 'stt',
    key: 'stt',
    align: 'center',
  },
  {
    title: 'Loại',
    dataIndex: 'icon',
    key: 'icon',
  },
  {
    title: 'Tiêu đề',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Liên kết',
    dataIndex: 'value',
    key: 'value',
    align: 'center',
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action',
    width: 100,
  },
];

const RowTable = ({ children, ...props }: RowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 9 } : {}),
  };

  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if ((child as React.ReactElement).key === 'sort') {
          return React.cloneElement(child as React.ReactElement, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{ touchAction: 'none', cursor: 'move' }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};

const SmartVisitCardForm = ({ typeForm }: FormProps) => {
  const dispatch = useAppDispatch();

  const [listBtn, setListBtn] = useState<IListBtn[]>([]);

  const [isModalEditOrAddBtnContact, setIsModalEditOrAddBtnContact] = useState<boolean>(false);
  const [isModalPreview, setIsModalPreview] = useState<boolean>(false);

  const [typeFormContact, setTypeFormContact] = useState<AppActionEnum>(AppActionEnum.create);
  const [valueBtnContact, setValueBtnContact] = useState<IListBtn>({
    id: '',
    icon: '',
    title: '',
    value: '',
    index: 99,
  });
  console.log('setValueBtnContact: ', setValueBtnContact);
  const [formRef] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<UploadFile[]>([
    {
      uid: '',
      name: '',
      status: undefined,
      url: '',
      thumbUrl: '',
    },
  ]);

  // eslint-disable-next-line react/no-unstable-nested-components
  const CustomPanel = (_: any, { components: { Picker, Presets } }: CustomPanelProps) => (
    <div
      className="custom-panel"
      style={{
        display: 'flex',
        width: 468,
      }}
    >
      <div
        style={{
          flex: 1,
        }}
      >
        <Presets />
      </div>
      <Divider
        type="vertical"
        style={{
          height: 'auto',
        }}
      />
      <div
        style={{
          width: 234,
        }}
      >
        <Picker />
      </div>
    </div>
  );

  const dataSource: DataType[] = listBtn.map((item, index) => ({
    key: item.id,
    stt: index + 1,
    index: item.index,
    id: item.id,
    icon: item.icon,
    title: item.title,
    value: item.value,
    action: (
      <Space>
        <Button
          type="primary"
          ghost
          icon={<EditOutlined />}
          onClick={() => {
            // dispatch(getDetailServicesAction(item?.id));
            // setTypeForm(AppActionEnum.update);
            // setIsModalEditOrAdd(true);
          }}
        />
        <Button
          type="primary"
          icon={<DeleteOutlined />}
          danger
          onClick={() => {
            // setModalDelete(item)
          }}
        />
      </Space>
    ),
  }));

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      const activeIndex = dataSource.findIndex((i) => i.id === active.id);
      const overIndex = dataSource.findIndex((i) => i.id === over?.id);
      // Calculator new index
      const result = handleReorderHelper(activeIndex, overIndex, dataSource);
      // dispatch(
      //   patchSlideReOrderAdminAction({
      //     activeId: result.resultId,
      //     activeIndex: result.resultIndex,
      //   })
      // );
      // dispatch(
      //   setDragDropDataSlideSection({
      //     active: activeIndex,
      //     over: overIndex,
      //     resultId: result.resultId as string,
      //     resultIndex: result.resultIndex,
      //   })
      // );
      const { resultId, resultIndex } = result;

      const newArr = arrayMove(listBtn, activeIndex, overIndex);

      const resArr = newArr?.map((item) => {
        if (item.id === resultId) {
          return {
            ...item,
            index: resultIndex,
          };
        }
        return { ...item };
      });
      setListBtn(resArr);
    }
  };

  const showToast = (status: NotificationTypeEnum, message: string, description: string) => {
    const toast = {
      id: uuidv4(),
      status,
      message,
      description,
    };
    dispatch(createToast(toast));
  };

  const onFinish = async (values: any) => {
    if (!imageUrl?.[0].url) {
      showToast(NotificationTypeEnum.error, 'Vui lòng chọn ảnh đại diện của bạn', '');
      return;
    }

    if (typeForm === AppActionEnum.create) {
      dispatch(
        postLinkTreeAction({
          fullName: values.fullName,
          avatar: imageUrl?.[0]?.url as string,
          companyName: values.companyName,
          position: values.position,
          phoneNumber: values.phoneNumber,
          email: values.email,
          passCode: values.passCode,
          primaryColor:
            typeof values?.primaryColor === 'object'
              ? values.primaryColor?.toHexString()
              : values.primaryColor,
          items: listBtn.map((item) => ({
            icon: item.icon,
            title: item.title,
            value: item.value,
          })),
        })
      );
    }
  };

  const handleSubmitBtnContact = (values: any) => {
    if (typeFormContact === AppActionEnum.create) {
      setListBtn([
        ...listBtn,
        {
          id: uuidv4(),
          icon: values.icon,
          title: values.title,
          value: values.value,
          index: listBtn.length + 1,
        },
      ]);
      setIsModalEditOrAddBtnContact(false);
    }
  };

  return (
    <div
      className="container"
      style={{ marginTop: '24px', position: 'relative', overflow: 'hidden' }}
    >
      <Form name="form-contact-link-tree" layout="vertical" form={formRef} onFinish={onFinish}>
        <Flex align="center" justify="center">
          <UploadSingleImage title="Upload avatar" imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </Flex>
        <Row gutter={[16, 16]}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Form.Item
              name="fullName"
              label="Họ và tên"
              rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Form.Item
              name="companyName"
              label="Tên công ty"
              rules={[{ required: true, message: 'Vui lòng nhập tên công ty!' }]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <Form.Item
              name="position"
              label="Chức vụ công ty"
              rules={[{ required: true, message: 'Vui lòng nhập chức vụ trong công ty!' }]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <Form.Item
              name="passCode"
              label="Pass Code"
              hasFeedback
              validateStatus="success"
              rules={[{ required: true, message: 'Vui lòng nhập passcode!' }]}
            >
              <Input.OTP />
            </Form.Item>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <Form.Item
              name="primaryColor"
              label="Màu nút (gọi / email)"
              rules={[{ required: true, message: 'Vui lòng màu nền của nút (gọi / email)!' }]}
            >
              <ColorPicker
                showText
                styles={{
                  popupOverlayInner: {
                    width: 468 + 24,
                  },
                }}
                presets={[
                  {
                    label: 'Recommended',
                    colors: [
                      '#000000',
                      '#000000E0',
                      '#000000A6',
                      '#00000073',
                      '#00000040',
                      '#00000026',
                      '#0000001A',
                      '#00000012',
                      '#0000000A',
                      '#00000005',
                      '#F5222D',
                      '#FA8C16',
                      '#FADB14',
                      '#8BBB11',
                      '#52C41A',
                      '#13A8A8',
                      '#1677FF',
                      '#2F54EB',
                      '#722ED1',
                      '#EB2F96',
                      '#F5222D4D',
                      '#FA8C164D',
                      '#FADB144D',
                      '#8BBB114D',
                      '#52C41A4D',
                      '#13A8A84D',
                      '#1677FF4D',
                      '#2F54EB4D',
                      '#722ED14D',
                      '#EB2F964D',
                    ],
                  },
                  {
                    label: 'Recent',
                    colors: [
                      '#F5222D4D',
                      '#FA8C164D',
                      '#FADB144D',
                      '#8BBB114D',
                      '#52C41A4D',
                      '#13A8A84D',
                    ],
                  },
                ]}
                panelRender={CustomPanel}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Form.Item
              name="phoneNumber"
              label="Zalo"
              rules={[{ required: true, message: 'Vui lòng nhập số điện thoại hoặc số zalo!' }]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Flex justify="flex-end">
          <Button
            type="primary"
            ghost
            onClick={() => {
              setTypeFormContact(AppActionEnum.create);
              setIsModalEditOrAddBtnContact(true);
            }}
          >
            Thêm nút liên hệ
          </Button>
        </Flex>
        <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
          <SortableContext
            // rowKey array
            items={dataSource.map((i) => i.id || '') || []}
            strategy={verticalListSortingStrategy}
          >
            <Table
              components={{
                body: {
                  row: RowTable,
                },
              }}
              rowKey="id"
              size="small"
              dataSource={dataSource.map((item) => ({ ...item, key: uuidv4() }))}
              columns={columns}
            />
          </SortableContext>
        </DndContext>
        <Form.Item>
          <Space className="wrapper-footer-admin-btn-space">
            <Button type="primary" ghost onClick={() => setIsModalPreview(true)}>
              Xem trước
            </Button>
            <Button type="primary" htmlType="submit">
              {typeForm === AppActionEnum.update ? 'Cập nhật card visit' : 'Thêm mới card visit'}
            </Button>
            {/* </div> */}
          </Space>
        </Form.Item>
      </Form>

      <Modal
        width={700}
        centered
        title={
          typeFormContact === AppActionEnum.update
            ? 'Cập nhật nút liên hệ'
            : 'Thêm mới nút liên hệ '
        }
        open={isModalEditOrAddBtnContact}
        closable={false}
        footer={null}
        onCancel={() => setIsModalEditOrAddBtnContact(false)}
      >
        <div className="wrapper-table-admin">
          <BtnContactForm
            value={valueBtnContact}
            type={
              typeFormContact === AppActionEnum.update ? AppActionEnum.update : AppActionEnum.create
            }
            handleCancel={() => setIsModalEditOrAddBtnContact(false)}
            onSubmit={handleSubmitBtnContact}
          />
        </div>
      </Modal>

      {/* modal preview thông tin contact */}
      <Modal
        title=""
        open={isModalPreview}
        closable={false}
        footer={null}
        onCancel={() => setIsModalPreview(false)}
        width={800}
      >
        <div className="wrapper-profile">
          <div className="wrapper-profile-header">
            <div className="wrapper-profile-header-avatar">
              <Image
                src={imageUrl?.[0]?.url || ''}
                fill
                placeholder="blur"
                blurDataURL={createRGBDataURL(199, 199, 199)}
                alt=""
                sizes="100%"
              />
            </div>
            <h1 className="wrapper-profile-header-name wrapper-profile-header-name-tien-long">
              {formRef.getFieldValue('fullName')}
            </h1>
            <p className="wrapper-profile-header-company">
              {' '}
              {formRef.getFieldValue('companyName')}
            </p>
            <p className="wrapper-profile-header-desc">{formRef.getFieldValue('position')}</p>
          </div>
          <div className="wrapper-profile-contact">
            <div className="wrapper-profile-contact-action">
              <button
                type="button"
                style={{ backgroundColor: formRef.getFieldValue('primaryColor')?.toHexString() }}
              >
                <span>☎️</span>
                <span>Gọi/Zalo</span>
              </button>
              <button
                type="button"
                style={{ backgroundColor: formRef.getFieldValue('primaryColor')?.toHexString() }}
              >
                <span>📪</span>
                <span>Email cho tôi</span>
              </button>
            </div>
          </div>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              {listBtn.map((item: any) => (
                <LinkItem key={item.id} link={item.value} titleBtn={item.title} type={item.icon} />
              ))}
            </Col>
          </Row>
          <FooterLink />
        </div>
      </Modal>
    </div>
  );
};

export default SmartVisitCardForm;
