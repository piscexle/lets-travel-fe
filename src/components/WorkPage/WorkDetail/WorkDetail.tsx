import React from 'react';
import { Image } from 'antd';
import './style.scss';
import { ItemWorkDetail } from '@/store/work-detail/work-detail.type';

type Props = {
  data: ItemWorkDetail | null;
  locale: string;
};

const WorkDetail = ({ data, locale }: Props) => (
  <div className="work-detail">
    <h4>{data?.title?.[locale]}</h4>
    <div className="body-work-detail">
      <Image className="image-work-detail" src={data?.thumbnail} alt="" preview={false} />
      <div
        className="text-description  sun-editor-editable sun-editor-editable-override"
        dangerouslySetInnerHTML={{
          __html: data?.content?.[locale] as string,
        }}
      />
    </div>
  </div>
);

export default WorkDetail;
