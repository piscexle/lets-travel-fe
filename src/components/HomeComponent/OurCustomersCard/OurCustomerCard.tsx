import React, { useEffect, useRef } from 'react';
import { Image } from 'antd';
import { motion, useInView } from 'framer-motion';
import './style.scss';
import { useAppDispatch, useAppSelector } from '@/store';
import { getAllCustomer } from '@/store/customer/customer.action';
import { useTranslations } from 'next-intl';

const OurCustomersPage = ({ id }: { id: string }) => {
  const { data } = useAppSelector((state) => state.customerSlice);
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const t = useTranslations('common');
  const isInView = useInView(ref);
  const motionSetting = {
    initial: { opacity: 0, x: '100%' },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' },
    transition: { duration: 1 },
  };

  useEffect(() => {
    dispatch(getAllCustomer());
  }, [dispatch]);

  return (
    <div ref={ref} className="our-customers" id={id}>
      <div className="our-customers-header">
        <h3>{t('ourCustomers')}</h3>
        <div className="rectangle">
          <motion.div {...motionSetting} className="rectangle-top" />
          <motion.div {...motionSetting} className="rectangle-bottom" />
        </div>
      </div>

      <div className="our-customers-main">
        <div className="logo-customers">
          {data.map((el, index) => (
            <div key={el.image}>
              <Image src={el.image} alt={`customer-${index}`} preview={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurCustomersPage;
