import { Popover, Space } from 'antd';
import React from 'react';
import { useTranslations } from 'next-intl';
import './style.scss';
import csx from 'classnames';
import Image from 'next/image';

interface SelectLanguageProps {
  value: string;
  onChange: (value: string) => void;
}

const SelectLanguage: React.FC<SelectLanguageProps> = ({ value, onChange }) => {
  const t = useTranslations('common');
  return (
    <Space size="small">
      <span
        className={csx('nav-language', { 'nav-language-active': value === 'vi' })}
        aria-hidden="true"
      >
        <Popover
          content={
            <Space direction="vertical">
              <div className="btn-language" aria-hidden onClick={() => onChange('vi')}>
                <Image
                  src="/images/vietnam.png"
                  alt=""
                  width={45}
                  height={26}
                  style={{ borderRadius: 5 }}
                />{' '}
                {t('titleVN')}
              </div>
              <div className="btn-language" aria-hidden onClick={() => onChange('en')}>
                <Image
                  src="/images/england.png"
                  alt=""
                  width={45}
                  height={26}
                  style={{ borderRadius: 5 }}
                />{' '}
                {t('titleEN')}
              </div>
            </Space>
          }
        >
          <div>
            <Image
              src={value === 'vi' ? '/images/vietnam.png' : '/images/england.png'}
              alt=""
              width={45}
              height={26}
              style={{ borderRadius: '5px' }}
            />
          </div>
        </Popover>
      </span>
    </Space>
  );
};

export default SelectLanguage;
