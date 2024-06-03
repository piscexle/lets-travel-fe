import React from 'react';
import { AppConfirmModalEnum } from '@/config/constant';
import { Button, Modal } from 'antd';

interface IProps {
  isVisible: boolean;
  type: AppConfirmModalEnum;
  title?: string;
  name?: string;
  okTextButton?: string;
  cancelTextButton?: string;
  content?: React.ReactNode;
  onOk: () => void;
  onCancel: () => void;
  setIsVisible: (v: boolean) => void;
}

const AppConfirmModal = (props: IProps) => {
  const {
    isVisible,
    type,
    title,
    name,
    content,
    okTextButton,
    cancelTextButton,
    onOk,
    onCancel,
    setIsVisible,
  } = props;

  const getTitle = () => {
    if (title) return title;
    switch (type) {
      case AppConfirmModalEnum.delete:
        return 'Xoá dữ liệu';
      case AppConfirmModalEnum.confirm:
        return 'Xác nhận';
      case AppConfirmModalEnum.warning:
        return 'Cảnh báo';
      case AppConfirmModalEnum.info:
        return 'Thông báo';
      default:
        return 'Tiêu đề!';
    }
  };

  const getContent = () => {
    if (content) return content;
    switch (type) {
      case AppConfirmModalEnum.delete:
        return (
          <div>
            Bạn có muốn xóa
            {' '}
            <span style={{ color: 'red' }}>
              {' '}
              {name || 'dữ liệu'}
              {' '}
            </span>
            {' '}
            này
            không ?
          </div>
        );
      case AppConfirmModalEnum.confirm:
        return <div />;
      case AppConfirmModalEnum.warning:
        return <div>Bạn chắn chắn muốn tiếp tục?</div>;
      case AppConfirmModalEnum.info:
        return <div />;
      default:
        return <div />;
    }
  };

  const onOkClicked = () => {
    setIsVisible(false);
    onOk();
  };

  const onCancelClicked = () => {
    setIsVisible(false);
    onCancel();
  };

  return (
    <Modal
      centered
      title={getTitle()}
      open={isVisible}
      onOk={() => onOkClicked()}
      onCancel={() => onCancelClicked()}
      footer={[
        <Button key="cancel" onClick={() => onCancelClicked()}>
          {cancelTextButton || 'Huỷ'}
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={false}
          onClick={() => onOkClicked()}
          danger
        >
          {okTextButton || 'Ok'}
        </Button>,
      ]}
    >
      {getContent()}
    </Modal>
  );
}

AppConfirmModal.defaultProps = {
  title: '',
  name: '',
  okTextButton: '',
  cancelTextButton: '',
  content: null,
};

export default AppConfirmModal;
