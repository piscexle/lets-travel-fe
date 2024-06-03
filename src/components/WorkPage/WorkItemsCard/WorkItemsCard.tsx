import React, { useEffect, useState } from 'react';
import { Flex, Modal, Pagination, PaginationProps } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store';
import { useLocale } from 'next-intl';
import { ItemWorkDetail } from '@/store/work-detail/work-detail.type';
import { getListWork } from '@/store/works/work.action';
import EmptyData from '@/components/EmptyData';
import './style.scss';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MetaPagination } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import ItemCard from './ItemCard';
import WorkDetail from '../WorkDetail/WorkDetail';

const WorkItemsCard = () => {
  const { data, meta } = useAppSelector((state) => state.worksSlice);
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workDetail, setWorkDetail] = useState<ItemWorkDetail | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState<MetaPagination>({
    page: Number(searchParams.get('page')) || 1,
    take: Number(searchParams.get('take')) || 4,
  });
  const handleCancel = () => {
    setIsModalOpen(false);
    setWorkDetail(null);
  };

  useEffect(() => {
    dispatch(
      getListWork({
        page: search.page as number,
        order: 'ASC',
        searchKey: '',
        take: search.take as number,
      })
    );
    const queryString = cleanAndSerializeQueryParams(search);
    router.push(`${pathname}?${queryString}`);
  }, [search, router, dispatch, pathname]);

  const onChange: PaginationProps['onChange'] = (pageNumber: number) => {
    setSearch((prev) => ({
      ...prev,
      page: pageNumber,
    }));
  };

  return (
    <div className="work-items-card">
      <div className="container">
        {data.length > 0 ? (
          <div className="work-item-container">
            {data.map((item) => (
              <ItemCard
                description={item.description}
                thumbnail={item.thumbnail}
                title={item.title}
                key={item.id}
                slug={item.slug}
              />
            ))}

            <Modal
              className="model-work-detail"
              open={isModalOpen}
              footer={null}
              onCancel={handleCancel}
              width={1146}
            >
              <WorkDetail data={workDetail} locale={locale} />
            </Modal>
          </div>
        ) : null}
        {data.length === 0 ? <EmptyData /> : null}
        {data.length > 0 ? (
          <Flex align="center" justify="center" className="work-pagination">
            <Pagination
              defaultCurrent={meta.page}
              total={meta.itemCount}
              onChange={onChange}
              pageSize={4}
            />
          </Flex>
        ) : null}
      </div>
    </div>
  );
};

export default WorkItemsCard;
