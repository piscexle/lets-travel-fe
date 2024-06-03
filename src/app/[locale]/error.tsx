'use client';

import { Button, Modal } from 'antd';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

function Error({ error, reset }: { error: Error; reset: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const t = useTranslations('common');
  useEffect(() => {
    if (error.message.length > 0) {
      setIsModalOpen(true);
    }
  }, [error]);

  const handleOk = () => {
    reset();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={t('itemBtnCancel')}
      centered
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          {t('itemBtnCancel')}
        </Button>,
        <Button danger key="submit" type="primary" onClick={handleOk}>
          {t('itemBtnTryAgain')}
        </Button>,
      ]}
    >
      <p className="error-title">{t('itemSystemEvolving')}</p>
      <p className="error-title">{t('itemSystemWait')} </p>
    </Modal>
  );
}

export default Error;
