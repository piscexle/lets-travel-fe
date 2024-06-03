import { Divider, Space } from 'antd';
import React from 'react';
import './style.scss';
import csx from 'classnames';

interface SelectLanguageProps {
  value: string;
  onChange: (value: string) => void;
}

const SelectLanguage: React.FC<SelectLanguageProps> = ({ value, onChange }) => (
  <Space size="small">
    <span
      className={csx('nav-language', { 'nav-language-active': value === 'vi' })}
      onClick={() => onChange('vi')}
      aria-hidden="true"
    >
      VN
    </span>
    <Divider type="vertical" />
    <span
      className={csx('nav-language', { 'nav-language-active': value === 'en' })}
      onClick={() => onChange('en')}
      aria-hidden="true"
    >
      EN
    </span>
  </Space>
);

export default SelectLanguage;
