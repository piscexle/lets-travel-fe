import { ItemOurTeam } from '@/store/our-team/our-team.type';
import Image from 'next/image';
import React, { Fragment } from 'react';
import csx from 'classnames';
import './style.scss';
import { Flex, Popover } from 'antd';
import { useLocale } from 'next-intl';

interface Props {
  data: ItemOurTeam[];
}

const Card: React.FC<Props> = ({ data }) => {
  const locale = useLocale();
  const content = (value: ItemOurTeam) => {
    console.log(value);
    return (
      <div className="popover-our-team">
        <Flex vertical>
          <p className="our-team-name">{value.name}</p>
          <p className="our-team-position">{value.position}</p>
          <div
            className="our-team-desc sun-editor-editable sun-editor-editable-override"
            dangerouslySetInnerHTML={{ __html: value.description?.[locale] }}
          />
        </Flex>
      </div>
    );
  };

  return (
    <ul>
      {data.map((item) => (
        <Fragment key={item.id}>
          <li>
            <div className={csx('card', { 'card-child': !!item.parentId })}>
              <Popover placement="top" content={content(item)}>
                <div>
                  <div className="card-body">
                    <div className="image">
                      <Image src={item.avatar} width={100} height={100} alt="" />
                    </div>
                    <p>{item.position}</p>
                  </div>
                </div>
              </Popover>
            </div>
            {item.children?.length > 0 && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default Card;
